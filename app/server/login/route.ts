import { NextResponse, NextRequest } from 'next/server'
import { getRedis, setRedis, removeRedis } from '@/app/server/redis'
import config from '@/app/server/config/config'
import jwt from 'jsonwebtoken'
const secr = config.secr
const expiresIn = config.sessionTimeout

export async function GET(req: NextRequest) {
  const token = req.cookies.get('authToken')?.value
  if (!token) {
    return NextResponse.json({ loginState: false, message: 'jwt token must provided' }, { status: 401 })
  }
  
  try {
    const decoded = jwt.verify(token, secr) as { account: string }
    const redisData = await getRedis(token)
    if (!redisData) {
      return NextResponse.json({ loginState: false, message: 'Invalid or expired token session' }, { status: 401 })
    }

    return NextResponse.json({ loginState: true, account: decoded.account })
  } catch (error) {
    // jwt.verify error >> token expired or invalid
    return NextResponse.json({ loginState: false, message: 'Invalid token' }, { status: 401 })
  }
}

// export async function POST(req: Request) {
//   const { account } = await req.json()
//   const expiresIn = 1800
//   const data = await setRedis('loginState', {state: true, account}, expiresIn)
//   return NextResponse.json({ data })
// }
export async function POST(req: Request) {
  const { account } = await req.json()
  const token = jwt.sign({ account }, secr, { expiresIn });
  await setRedis(token, { account }, expiresIn);
  const response = NextResponse.json({ success: true, account })
  response.cookies.set('authToken', token, {
    httpOnly: true,
    secure: config.mode !== 'development',
    sameSite: 'strict',
    path: '/',
    maxAge: expiresIn
  })
  return response
}

export async function DELETE(req: NextRequest) {
  const token = req.cookies.get('authToken')?.value

  if (token) {
    await removeRedis(token);
  }

  const response = NextResponse.json({ success: true, message: 'Logged out successfully' });
  response.cookies.set('authToken', '', {
    httpOnly: true,
    secure: config.mode !== 'development',
    sameSite: 'strict',
    path: '/',
    expires: new Date(0)
  });

  return response;
}
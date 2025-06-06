import { NextResponse } from 'next/server'
import { getRedis, setRedis, removeRedis } from '@/app/services/redis'

export async function GET(req: Request) {
  const data = await getRedis('loginState')
  return NextResponse.json({ data })
}

export async function POST(req: Request) {
  const { account } = await req.json()
  const expiresIn = 1800
  const data = await setRedis('loginState', {state: true, account}, expiresIn)
  return NextResponse.json({ data })
}

export async function DELETE(req: Request) {
  const data = await removeRedis('loginState')
  return NextResponse.json({ data })
}
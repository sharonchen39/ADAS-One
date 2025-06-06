"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Globe, Lock, Zap, Bot } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import { LoginDialog } from "@/components/login-dialog"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="py-20 md:py-28 lg:py-36 relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 z-0">
          <img
            src="/header-background.jpg"
            alt="Digital security network background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/70 to-transparent"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-2xl text-left">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  HiWAF <br></br> <span style={{ color: "#0D99FF" }}>Security Operation Center</span>
                </h1>
                <p className="text-gray-300 text-xs sm:text-sm md:text-sm font-normal max-w-md whitespace-nowrap">
                  全方位的網路安全解決方案，保護您的應用程式免受各種網路威脅
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/login">
                  <Button
                    className="text-white font-normal px-6 py-2 text-base"
                    style={{ backgroundColor: "#0D99FF", borderColor: "#0D99FF" }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0A85E9")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0D99FF")}
                  >
                    開始使用
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="text-white font-normal px-6 py-2 text-base border-2"
                    style={{ borderColor: "#0D99FF", color: "#0D99FF" }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(13, 153, 255, 0.1)"
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent"
                    }}
                  >
                    了解更多
                  </Button>
                </Link>
                <Link href="/api">
                  <Button
                    variant="outline"
                    className="text-white font-normal px-6 py-2 text-base border-2"
                    style={{ borderColor: "#0D99FF", color: "#0D99FF" }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(13, 153, 255, 0.1)"
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent"
                    }}
                  >
                    智慧報表（新功能開發中）
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 rounded-lg shadow-lg border border-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            我們的<span style={{ color: "#0D99FF" }}>服務</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedServiceCard
                title="HiWAF防禦"
                description="中華電信HiNet WAF網站應用防火牆服務"
                icon={<Shield className="h-10 w-10" style={{ color: "#0D99FF" }} />}
                delay={0}
                price="$3.5萬"
                priceUnit="/月起"
              />
            <AnimatedServiceCard
              title="應用層DDoS防禦"
              description="防範任何規模或類型的 DDoS 攻擊"
              icon={<Shield className="h-10 w-10" style={{ color: "#0D99FF" }} />}
              delay={100}
              price="$2萬"
              priceUnit="/月起"
            />
            <AnimatedServiceCard
              title="機器人防禦"
              description="管理良性/惡意傀儡程式，保護您的網站免受自動化攻擊。"
              icon={<Bot className="h-10 w-10" style={{ color: "#0D99FF" }} />}
              delay={200}
              price="$5萬"
              priceUnit="/月起"
            />
            <AnimatedServiceCard
              title="TCP/UDP流量代理防禦"
              description="保護任何 TCP 或 UDP 應用程式免受 DDoS 威脅，並提升效能。"
              icon={<Zap className="h-10 w-10" style={{ color: "#0D99FF" }} />}
              delay={300}
              price="$5萬"
              priceUnit="/月起"
            />
            <AnimatedServiceCard
              title="全球CDN加速"
              description="通過全球分佈的節點加速內容傳遞，提升用戶體驗。"
              icon={<Globe className="h-10 w-10" style={{ color: "#0D99FF" }} />}
              delay={400}
              price="$2萬"
              priceUnit="/月起"
            />
            <AnimatedServiceCard
              title="零信任服務"
              description="Zero Trust 網路由統一的雲端原生安全和連線服務平台提供。"
              icon={<Lock className="h-10 w-10" style={{ color: "#0D99FF" }} />}
              delay={500}
              price="$3萬"
              priceUnit="/月起"
            />
            {/* <AnimatedServiceCard
              title="API (BDE)"
              description="保護您的API端點，確保數據安全傳輸和訪問控制"
              icon={<Users className="h-10 w-10" style={{ color: "#0D99FF" }} />}
              delay={500}
            /> */}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl text-white">
                為什麼選擇 <span style={{ color: "#0D99FF" }}>HiWAF</span>
              </h2>
              <p className="text-gray-300 md:text-lg font-normal">
                7x24 專業團隊，監控掌握企業資安狀態，即時通知資安威脅
              </p>
              <ul className="space-y-2 text-gray-300 font-normal">
                <li className="flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full" style={{ backgroundColor: "#5591BD" }} />
                  全天候監控和保護
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full" style={{ backgroundColor: "#5591BD" }} />
                  易於部署和管理
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full" style={{ backgroundColor: "#5591BD" }} />
                  靈活的定價方案
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full" style={{ backgroundColor: "#5591BD" }} />
                  專業的技術支持
                </li>
              </ul>
              <div>
                <Link href="/account/purchase">
                  <Button
                    className="text-white font-normal"
                    style={{ backgroundColor: "#0D99FF", borderColor: "#0D99FF" }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0A85E9")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0D99FF")}
                  >
                    查看服務方案
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md rounded-lg bg-gray-800 p-8 h-80 flex items-center justify-center shadow-lg border border-gray-700">
                {/* <p className="text-gray-400 text-center">安全統計圖表展示區</p> */}
                <img src="/pageshow.png" alt="Page Show" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function AnimatedServiceCard({ 
  title, 
  description, 
  icon, 
  delay = 0, 
  price, 
  priceUnit,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  price?: string;
  priceUnit?: string;
}) {
  const [isVisible, setIsVisible] = useState(false)
  // const [showLoginDialog, setShowLoginDialog] = useState(false)
  const [isLogin, setLoginState] = useState(false)
  const [account, setAccount] = useState('')
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    const checkLoginState = async () => {
      try {
        const res = await fetch('/api/login')
        const resp = await res.json()
        const { state, account } = resp.data;
        if (state === true) {
          setLoginState(true)
          setAccount(account)
        }
      } catch (error) {
        console.error("Failed to fetch login state:", error)
      }
    }

    checkLoginState()
  }, [])

  const handleClick = async (e: React.MouseEvent) => {
    if (title === '機器人防禦') {
      window.location.href = "/services/bot-defense"
    } else if (title === 'TCP/UDP流量代理防禦') {
      window.location.href = "/services/tcp-proxy"
    } else if (title === '全球CDN加速') {
      window.location.href = "/services/cdn"
    } else if (title === '零信任服務') {
      window.location.href = "/services/zero-trust"
    } else {
      if (account === 'user') {
        e.preventDefault()
        try {
          if (isLogin === true) {
            window.location.href = title === "HiWAF防禦" ? "https://202.39.33.231:8444/soc" : "https://202.39.33.231:8444/soc?cloudflareType=cloudflare"
          } else {
            window.location.href = title === "HiWAF防禦" ? "/services/hiwaf" : "/services/application-defense"
          }
        } catch (err) {
          console.error("Failed to check login state", err)
          router.push('/login')
        }
      } else {
        e.preventDefault()
        if (title === '應用層DDoS防禦') {
          try {
            if (isLogin === true) {
              window.location.href = "https://202.39.33.231:8444/soc?cloudflareType=cloudflare"
            } else {
              window.location.href = "/services/application-defense"
            }
          } catch (err) {
            console.error("Failed to check login state", err)
            router.push('/login')
          }
        } else if (title === 'HiWAF防禦') {
          window.location.href = "/services/hiwaf"
        }
      }
    }
  }

  return (
    <div
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <Card role="button" className="cursor-pointer border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg bg-gray-800 relative flex flex-col h-[200px]" onClick={handleClick}>
        <CardHeader className="flex flex-row items-center gap-4 pb-3">
          <div className="transform transition-all duration-500 hover:scale-110">{icon}</div>
          <div className="flex-1">
            <CardTitle className="text-xl font-medium text-white">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-0 flex-1 flex flex-col justify-between">
          <CardDescription className="text-gray-300 font-normal mb-4">{description}</CardDescription>
          {

            isLogin && account === 'user' && (title === "HiWAF防禦" || title === "應用層DDoS防禦") ? (
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold" style={{ color: "#0D99FF" }}>
                  已訂閱
                </span>
              </div>
            ) : 
            isLogin && account === 'demo' && (title === "應用層DDoS防禦") ? (
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold" style={{ color: "#0D99FF" }}>
                  已訂閱
                </span>
              </div>
            ) : price && (
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold" style={{ color: "#0D99FF" }}>
                  {price}
                </span>
                <span className="text-sm text-gray-400 font-normal">{priceUnit}</span>
              </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Globe, Lock, Zap, Bot, Server, Users, Clock, Check, Network } from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { PageTitle } from "@/components/page-title"

export default function Home() {
  const pricingRef = useRef(null)

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="py-20 md:py-28 lg:py-36 relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 z-0">
          <img
            src="/header-background.jpg"
            alt="Digital security network background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent dark:from-gray-950/90 dark:via-gray-900/70"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-2xl text-left">
            <div className="space-y-8">
              <div className="space-y-4">
                <PageTitle>
                  ADAS ONE <br />
                  <span style={{ color: "#0D99FF" }}>Security Operation Center</span>
                </PageTitle>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-sm font-normal max-w-md">
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
                    className="font-normal px-6 py-2 text-base border-2 bg-transparent"
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card rounded-lg shadow-lg border">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-3xl font-semibold">
              我們的<span style={{ color: "#0D99FF" }}>服務</span>
            </h2>
            <div className="absolute right-0 top-0">
              <Button
                className="text-white font-normal px-6 py-2"
                style={{ backgroundColor: "#0D99FF", borderColor: "#0D99FF" }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0A85E9")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0D99FF")}
                onClick={scrollToPricing}
              >
                優惠組合方案
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/hiwaf">
              <AnimatedServiceCard
                title="WAF防禦"
                description="WAF網站應用防火牆服務"
                icon={<Shield className="h-10 w-10" style={{ color: "#0D99FF" }} />}
                delay={0}
                price="$3.5萬"
                priceUnit="/月起"
              />
            </Link>
            <Link href="/services/application-defense">
              <AnimatedServiceCard
                title="應用層DDoS防禦"
                description="防範任何規模或類型的 DDoS 攻擊"
                icon={<Shield className="h-10 w-10" style={{ color: "#0D99FF" }} />}
                delay={100}
                price="$2萬"
                priceUnit="/月起"
                priceNote="計價單位：(應用程式數量/流量)"
              />
            </Link>
            <Link href="/services/waiting-room">
              <AnimatedServiceCard
                title="Waiting room等候室"
                description="管理高峰流量的虛擬等待室"
                icon={<Clock className="h-10 w-10" style={{ color: "#0D99FF" }} />}
                delay={110}
                price="$5萬"
                priceUnit="/月起"
                priceNote="計價單位：(應用程式數量）"
              />
            </Link>
            <Link href="/services/api-protection">
              <AnimatedServiceCard
                title="API 防護"
                description="全球整合式 API 保護和監控，可自動探索、驗證和保護您的 API 端點。"
                icon={<Users className="h-10 w-10" style={{ color: "#0D99FF" }} />}
                delay={125}
                price="$7萬"
                priceUnit="/月起"
                priceNote="計價單位：(應用程式數量/請求數）"
              />
            </Link>
            <Link href="/services/dns-protection">
              <AnimatedServiceCard
                title="DNS 防護"
                description="阻止針對 DNS 系統的超大規模攻擊"
                icon={<Server className="h-10 w-10" style={{ color: "#0D99FF" }} />}
                delay={150}
                price="$5萬"
                priceUnit="/月起"
                priceNote="計價單位：(應用程式數量/請求數）"
              />
            </Link>
            <Link href="/services/bot-defense">
              <AnimatedServiceCard
                title="機器人防禦"
                description="管理良性/惡意傀儡程式，保護您的網站免受自動化攻擊。"
                icon={<Bot className="h-10 w-10" style={{ color: "#0D99FF" }} />}
                delay={200}
                price="$5萬"
                priceUnit="/月起"
                priceNote="計價單位: (應用程式數量/請求數）"
              />
            </Link>
            <Link href="/services/rate-limiting">
              <AnimatedServiceCard
                title="Rate Limiting 限速"
                description="透過限制超過定義限制的流量，保護應用程式和 API 免遭濫用"
                icon={<Shield className="h-10 w-10" style={{ color: "#0D99FF" }} />}
                delay={250}
                price="點擊看方案"
                priceUnit=""
              />
            </Link>
            <Link href="/services/tcp-proxy">
              <AnimatedServiceCard
                title="TCP/UDP流量代理防禦"
                description="保護任何 TCP 或 UDP 應用程式免受 DDoS 威脅，並提升效能。"
                icon={<Zap className="h-10 w-10" style={{ color: "#0D99FF" }} />}
                delay={300}
                price="$5萬"
                priceUnit="/月起"
                priceNote="計價單位: (應用程式數量/L4流量)"
              />
            </Link>
            <Link href="/services/cdn">
              <AnimatedServiceCard
                title="全球CDN加速"
                description="通過全球分佈的節點加速內容傳遞，提升用戶體驗。"
                icon={<Globe className="h-10 w-10" style={{ color: "#0D99FF" }} />}
                delay={400}
                price="$2萬"
                priceUnit="/月起"
                priceNote="計價單位: (應用程式數量/流量）"
              />
            </Link>
            <Link href="/services/zero-trust">
              <AnimatedServiceCard
                title="零信任服務"
                description="Zero Trust 網路由統一的雲端原生安全和連線服務平台提供。"
                icon={<Lock className="h-10 w-10" style={{ color: "#0D99FF" }} />}
                delay={500}
                price="$3萬"
                priceUnit="/月起"
                priceNote="計價單位: (席位）"
              />
            </Link>
            <Link href="/services/data-localization">
              <AnimatedServiceCard
                title="資料本地化套件"
                description="區域服務，能選擇邊緣節點檢查和儲存數據的位置，並保持全球網路的安全和性能優勢。"
                icon={<Globe className="h-10 w-10" style={{ color: "#0D99FF" }} />}
                delay={550}
                price="$7萬"
                priceUnit="/月起"
                priceNote="計價單位：(應用程式數量)"
              />
            </Link>
            <Link href="/services/tfx-cdn">
              <AnimatedServiceCard
                title="TFX CDN融合交換中心"
                description="CDN併行與備援機制，提供數位韌性強度"
                icon={<Network className="h-10 w-10" style={{ color: "#0D99FF" }} />}
                delay={600}
                price="$8萬"
                priceUnit="/月起"
                priceNote="計價單位：(應用程式數量/流量)"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
                為什麼選擇 <span style={{ color: "#0D99FF" }}>ADAS ONE</span>
              </h2>
              <p className="text-muted-foreground md:text-lg font-normal">
                7x24 專業團隊，監控掌握企業資安狀態，即時通知資安威脅
              </p>
              <ul className="space-y-2 text-muted-foreground font-normal">
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
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md rounded-lg bg-card p-8 h-80 flex items-center justify-center shadow-lg border">
                <p className="text-muted-foreground text-center">安全統計圖表展示區</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 優惠組合方案區塊 */}
      <section ref={pricingRef} className="py-12 md:py-24 bg-card rounded-lg shadow-lg border">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
              優惠<span style={{ color: "#0D99FF" }}>組合方案</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-normal">
              選擇最適合您需求的服務方案，保護您的網站和應用程式免受各種網路威脅
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="合規版"
              price="5萬"
              originalPrice=""
              description="基礎網站安全防護方案"
              features={["WAF 防禦", "乾淨流量1TB", "應用程式1個"]}
              buttonText="選擇合規版"
              buttonVariant="outline"
            />
            <PricingCard
              title="進階版"
              price="6萬"
              originalPrice="10萬"
              description="進階網站安全防護方案"
              features={["WAF防禦", "DNS防護", "應用層DDoS防禦", "乾淨流量5TB", "應用程式1個"]}
              buttonText="選擇進階版"
              buttonVariant="default"
              highlighted={true}
              recommended={true}
            />
            <PricingCard
              title="專業版"
              price="9萬"
              originalPrice="12萬"
              description="全方位網站安全與效能解決方案"
              features={["WAF防禦", "DNS防護", "應用層DDoS防禦", "全球CDN加速", "乾淨流量15TB", "應用程式1個"]}
              buttonText="選擇專業版"
              buttonVariant="outline"
            />
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-medium text-foreground mb-4">需要自定義方案？</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6 font-normal">
              我們提供靈活的自定義方案，以滿足您的特定需求。聯繫我們的銷售團隊，獲取專屬方案。
            </p>
            <Button
              className="text-white font-normal"
              style={{ backgroundColor: "#0D99FF", borderColor: "#0D99FF" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0A85E9")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0D99FF")}
            >
              聯繫我們
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function AnimatedServiceCard({ title, description, icon, delay = 0, price, priceUnit, priceNote }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

<<<<<<< Updated upstream
=======
  useEffect(() => {
    const checkLoginState = async () => {
      try {
        const res = await fetch('/server/login')
        const data = await res.json()
        if (res.ok && data.loginState) {
          setLoginState(true)
          setAccount(data.account)
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
    } else if (title === 'Waiting room等候室') {
      window.location.href = "/services/waiting-room"
    } else if (title === 'API 防護') {
      window.location.href = "/services/api-protection"
    } else if (title === 'DNS 防護') {
      window.location.href = "/services/dns-protection"
    } else if (title === 'TCP/UDP流量代理防禦') {
      window.location.href = "/services/tcp-proxy"
    } else if (title === '全球CDN加速') {
      window.location.href = "/services/cdn"
    } else if (title === '零信任服務') {
      window.location.href = "/services/zero-trust"
    } else if (title === 'API (BDE)') {
      window.location.href = "/api"
    } else if (title === 'Rate Limiting 限速') {
      window.location.href = "/services/rate-limiting"
    } else if (title === '資料本地化套件') {
      window.location.href = "/services/data-localization"
    } else {
      if (account === 'user') {
        e.preventDefault()
        try {
          if (isLogin === true) {
            if (title === "TFX CDN融合交換中心") {
              window.location.href = "/services/tfx-cdn"
            } else {
              window.location.href = title === "HiWAF防禦" ? "https://202.39.33.231:8444/soc" : "https://202.39.33.231:8444/soc?cloudflareType=cloudflare"
            }
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

>>>>>>> Stashed changes
  return (
    <div
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <Card className="border hover:border-primary/50 transition-all duration-300 shadow-lg bg-card relative h-[280px] flex flex-col hover:shadow-xl">
        <CardHeader className="flex flex-row items-center gap-4 pb-3">
          <div className="transform transition-all duration-500 hover:scale-110">{icon}</div>
          <div className="flex-1">
            <CardTitle className="text-xl font-medium">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-0 flex flex-col flex-1">
          <CardDescription className="text-muted-foreground font-normal mb-4 line-clamp-3 h-[72px]">
            {description}
          </CardDescription>
          <div className="mt-auto">
            {price && (
              <div className="mt-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold" style={{ color: "#0D99FF" }}>
                    {price}
                  </span>
                  <span className="text-sm text-muted-foreground font-normal">{priceUnit}</span>
                </div>
                {priceNote && <p className="text-xs text-muted-foreground font-normal mt-1">{priceNote}</p>}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function PricingCard({
  title,
  price,
  originalPrice,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
  recommended = false,
}) {
  return (
    <Card className={`bg-card border-border shadow-lg ${highlighted ? "ring-2 ring-blue-600 shadow-xl" : ""}`}>
      <CardHeader className="pb-0">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-medium text-card-foreground">{title}</CardTitle>
            <CardDescription className="font-normal text-muted-foreground">{description}</CardDescription>
          </div>
          {recommended && <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">推薦</div>}
        </div>
        <div className="mt-4">
          <div className="flex items-baseline gap-1">
            <span className="text-muted-foreground font-normal">$</span>
            <span className="text-3xl font-medium text-card-foreground">{price}</span>
            <span className="text-muted-foreground font-normal">/月起</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through font-normal">原價${originalPrice}</span>
            )}
          </div>
        </div>
      </CardHeader>

      <div className="px-6 py-6">
        {buttonVariant === "default" ? (
          <Button
            className="w-full text-white font-normal"
            style={{ backgroundColor: "#0D99FF", borderColor: "#0D99FF" }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0A85E9")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0D99FF")}
          >
            {buttonText}
          </Button>
        ) : (
          <Button
            className="w-full font-normal bg-transparent"
            variant="outline"
            style={{ borderColor: "#0D99FF", color: "#0D99FF" }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(13, 153, 255, 0.1)"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
            }}
          >
            {buttonText}
          </Button>
        )}
      </div>

      <CardContent className="pt-0">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: "#0D99FF" }} />
              <span className="text-muted-foreground font-normal">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

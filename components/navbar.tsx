"use client"

import React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { LoginDialog } from "./login-dialog"
import { ThemeToggle } from "./theme-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
<<<<<<< Updated upstream
=======
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const [loginState, setLoginState] = useState(false)
  const [account, setAccount] = useState('')
  
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

  const handleLogout = async () => {
    try {
      await fetch('/server/login', {
        method: 'DELETE'
      })
      setLoginState(false)
      setAccount('')
      window.location.reload()
    } catch (error) {
      console.error("Failed to logout:", error)
    }
  }

  const handleProtectedNavigation = async (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/server/login')
      const result = await res.json()
      const { state, account } = result.data;
      if (state === true) {
        window.location.href = href
      } else {
        setShowLoginDialog(true)
      }
    } catch (err) {
      console.error("Login check failed:", err)
      setShowLoginDialog(true)
    }
  }
>>>>>>> Stashed changes

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-xl font-medium">ADAS ONE</span>
        </Link>

        <div className="hidden md:flex ml-auto">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground font-normal">
                  服務總覽
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <ListItem key={service.title} title={service.title} href={service.href}>
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/cloud-ground-defense" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-normal text-muted-foreground hover:text-foreground",
                    )}
                  >
                    雲地防禦方案
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <Link href="/api" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-normal text-muted-foreground hover:text-foreground",
                    )}
                  >
                    API (BDE)
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <Link href="/account" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-normal text-muted-foreground hover:text-foreground",
                    )}
                  >
                    帳戶資訊
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="ml-4 flex items-center gap-2">
            <ThemeToggle />
            <LoginDialog />
          </div>
        </div>

        <div className="md:hidden ml-auto flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">打開選單</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-normal hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  首頁
                </Link>
                <div className="border-t pt-4">
                  <p className="text-lg font-normal mb-2">服務總覽</p>
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="block py-2 text-muted-foreground hover:text-primary font-normal transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/cloud-ground-defense"
                  className="text-lg font-normal hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  雲地防禦方案
                </Link>
                {/* <Link
                  href="/api"
                  className="text-lg font-normal hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  API (BDE)
                </Link> */}
                <Link
                  href="/account"
                  className="text-lg font-normal hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  帳戶資訊
                </Link>
                <div className="mt-4">
                  <LoginDialog />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const services = [
  {
    title: "WAF防禦",
    href: "/services/hiwaf",
    description: "WAF網站應用防火牆服務",
  },
  {
<<<<<<< Updated upstream
    title: "應用層DDoS防禦",
    href: "/services/ddos-protection",
    description: "防範任何規模或類型的 DDoS 攻擊",
  },
  {
    title: "Waiting room等候室",
    href: "/services/waiting-room",
    description: "管理高峰流量的虛擬等待室",
  },
  {
    title: "API 防護",
    href: "/services/api-protection",
    description: "全球整合式 API 保護和監控，可自動探索、驗證和保護您的 API 端點",
  },
  {
    title: "DNS 防護",
    href: "/services/dns-protection",
    description: "阻止針對 DNS 系統的超大規模攻擊",
  },
  {
    title: "機器人防禦",
    href: "/services/bot-defense",
    description: "管理良性/惡意傀儡程式，保護您的網站免受自動化攻擊",
  },
  {
    title: "TCP/UDP流量代理防禦",
    href: "/services/tcp-proxy",
    description: "保護任何 TCP 或 UDP 應用程式免受 DDoS 威脅，並提升效能",
  },
  {
=======
>>>>>>> Stashed changes
    title: "全球CDN加速",
    href: "/services/cdn",
    description: "通過全球分佈的節點加速內容傳遞，提升用戶體驗",
  },
  {
    title: "應用層DDoS防禦",
    // href: "/services/application-defense",
    href: "https://202.39.33.231:8444/soc?cloudflareType=cloudflare",
    description: "防範任何規模或類型的 DDoS 攻擊",
  },
]
// const services = [
//   {
//     title: "WAF防禦",
//     // href: "/services/hiwaf",
//     href: "https://202.39.33.231:8444/soc",
//     description: "WAF網站應用防火牆服務",
//   },
//   {
//     title: "應用層DDoS防禦",
//     // href: "/services/ddos-protection",
//     href: "https://202.39.33.231:8444/soc?cloudflareType=cloudflare",
//     description: "防範任何規模或類型的 DDoS 攻擊",
//   },
//   {
//     title: "Waiting room等候室",
//     href: "/services/waiting-room",
//     description: "管理高峰流量的虛擬等待室",
//   },
//   {
//     title: "API 防護",
//     href: "/services/api-protection",
//     description: "全球整合式 API 保護和監控，可自動探索、驗證和保護您的 API 端點",
//   },
//   {
//     title: "DNS 防護",
//     href: "/services/dns-protection",
//     description: "阻止針對 DNS 系統的超大規模攻擊",
//   },
//   {
//     title: "機器人防禦",
//     href: "/services/bot-defense",
//     description: "管理良性/惡意傀儡程式，保護您的網站免受自動化攻擊",
//   },
//   {
//     title: "TCP/UDP流量代理防禦",
//     // href: "/services/tcp-proxy",
//     href: "https://202.39.33.231:8444/soc?cloudflareType=cloudflare_spectrum",
//     description: "保護任何 TCP 或 UDP 應用程式免受 DDoS 威脅，並提升效能",
//   },
//   {
//     title: "全球CDN加速",
//     href: "/services/cdn",
//     description: "通過全球分佈的節點加速內容傳遞，提升用戶體驗",
//   },
//   {
//     title: "TFX CDN融合交換中心",
//     href: "/services/tfx-cdn",
//     description: "CDN併行與備援機制，提供數位韌性強度",
//   },
//   {
//     title: "零信任服務",
//     href: "/services/zero-trust",
//     description: "Zero Trust 網路由統一的雲端原生安全和連線服務平台提供",
//   },
//   {
//     title: "Rate Limiting 限速",
//     href: "/services/rate-limiting",
//     description: "透過限制超過定義限制的流量，保護應用程式和 API 免遭濫用",
//   },
//   {
//     title: "資料本地化套件",
//     href: "/services/data-localization",
//     description: "區域服務，能選擇邊緣節點檢查和儲存數據的位置",
//   },
// ]

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground font-normal">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

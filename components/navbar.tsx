"use client"

import React from "react"

import { useState, useEffect } from "react"
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const [loginState, setLoginState] = useState(false)
  const [account, setAccount] = useState('')
  
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

  const handleLogout = async () => {
    try {
      await fetch('/api/login', {
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
      const res = await fetch('/api/login')
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900">
      <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-6 w-6" style={{ color: "#0D99FF" }} />
          <span className="text-xl font-medium text-white">HiWAF - Security Operation Center</span>
        </Link>

        <div className="hidden md:flex ml-auto">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem style={{ marginLeft: "490px" }}>
                <NavigationMenuTrigger className="text-gray-300 hover:text-blue-400 font-normal ">
                  服務總覽
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {/* {services.map((service) => (
                      <ListItem key={service.title} title={service.title} href={service.href}>
                        {service.description}
                      </ListItem>
                    ))} */}
                    {services.map((service) => (
                      service.title === "HiWAF防禦" || service.title === "應用層DDoS防禦" || service.title === "TCP/UDP流量代理防禦" ? (
                        <ListItem
                          key={service.title}
                          title={service.title}
                          href={service.href}
                          onClick={(e) => handleProtectedNavigation(service.href, e)}
                        >
                          {service.description}
                        </ListItem>
                      ) : (
                        <ListItem
                          key={service.title}
                          title={service.title}
                          href={service.href}
                        >
                          {service.description}
                        </ListItem>
                      )
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <Link href="/api" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "font-normal text-gray-300 hover:text-blue-400")}
                  >
                    API (BDE)
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <Link href="/account" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-normal")}>
                    帳戶資訊
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              {loginState === true ? (
                  <NavigationMenuItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <NavigationMenuLink
                          className={cn(navigationMenuTriggerStyle(), "text-white font-normal hover:text-blue-400")}
                          style={{ cursor: "pointer", backgroundColor: "#0D99FF", borderColor: "#0D99FF" }}
                        >
                          Hi, {account}
                        </NavigationMenuLink>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem onClick={handleLogout}>
                          登出
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </NavigationMenuItem>
                ) : (
                  <LoginDialog />
                )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="md:hidden ml-auto">
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
                  className="text-lg font-normal text-gray-800 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  首頁
                </Link>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-lg font-normal text-gray-800 mb-2">服務總覽</p>
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="block py-2 text-gray-600 hover:text-blue-600 font-normal"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/api"
                  className="text-lg font-normal text-gray-800 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  API (BDE)
                </Link>
                <Link
                  href="/account"
                  className="text-lg font-normal text-gray-800 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  帳戶資訊
                </Link>
                <div className="mt-4">
                  {loginState === true ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          className="flex items-center gap-2 text-white font-normal"
                          style={{ backgroundColor: "#0D99FF", borderColor: "#0D99FF" }}
                          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0A85E9")}
                          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0D99FF")}
                        >{account}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem onClick={handleLogout}>
                          登出
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <LoginDialog />
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {showLoginDialog && <LoginDialog open={showLoginDialog} onOpenChange={setShowLoginDialog} redirectUrl={window.location.href} />}
    </header>
  )
}

const services = [
  {
    title: "HiWAF防禦",
    // href: "/services/hiwaf",
    href: "https://202.39.33.231:8444/soc",
    description: "中華電信HiNet WAF網站應用防火牆服務",
  },
  {
    title: "應用層DDoS防禦",
    // href: "/services/ddos-protection",
    href: "https://202.39.33.231:8444/soc?cloudflareType=cloudflare",
    description: "防範任何規模或類型的 DDoS 攻擊",
  },
  {
    title: "機器人防禦",
    href: "/services/bot-defense",
    description: "管理良性/惡意傀儡程式，保護您的網站免受自動化攻擊",
  },
  {
    title: "TCP/UDP流量代理防禦",
    // href: "/services/tcp-proxy",
    href: "https://202.39.33.231:8444/soc?cloudflareType=cloudflare_spectrum",
    description: "保護任何 TCP 或 UDP 應用程式免受 DDoS 威脅，並提升效能",
  },
  {
    title: "全球CDN加速",
    href: "/services/cdn",
    description: "通過全球分佈的節點加速內容傳遞，提升用戶體驗",
  },
  {
    title: "零信任服務",
    href: "/services/zero-trust",
    description: "Zero Trust 網路由統一的雲端原生安全和連線服務平台提供",
  },
]

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { onClick?: (e: React.MouseEvent) => void }>(
  ({ className, title, children, onClick, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-blue-400 focus:bg-gray-800 focus:text-blue-400",
              className,
            )}
            onClick={onClick}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-gray-500 font-normal">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
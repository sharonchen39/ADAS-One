"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Globe, Server, Lock, Zap, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl text-white">
          服務<span style={{ color: "#0D99FF" }}>總覽</span>
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto font-normal">
          7x24 專業團隊，監控掌握企業資安狀態，即時通知資安威脅
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          title="機器人防禦"
          description="管理良性/惡意傀儡程式，保護您的網站免受自動化攻擊。我們的機器人防禦系統使用先進的行為分析和機器學習技術，能夠區分正常用戶和惡意機器人。"
          icon={<Server className="h-12 w-12" style={{ color: "#0D99FF" }} />}
          href="/services/bot-defense"
        />
        <ServiceCard
          title="TCP流量代理防禦"
          description="保護任何 TCP 或 UDP 應用程式免受 DDoS 威脅，並提升效能。我們的TCP流量代理系統能夠過濾惡意流量，確保您的服務器不受DDoS攻擊影響。"
          icon={<Zap className="h-12 w-12" style={{ color: "#0D99FF" }} />}
          href="/services/tcp-proxy"
        />
        <ServiceCard
          title="全球CDN加速"
          description="通過全球分佈的節點加速內容傳遞，提升用戶體驗。我們的CDN網絡覆蓋全球主要地區，能夠顯著減少網站加載時間，提升用戶體驗。"
          icon={<Globe className="h-12 w-12" style={{ color: "#0D99FF" }} />}
          href="/services/cdn"
        />
        <ServiceCard
          title="零信任"
          description="Zero Trust 網路由統一的雲端原生安全和連線服務平台提供。我們的零信任系統基於「永不信任，始終驗證」的原則，為您的網絡提供最高級別的安全保障。"
          icon={<Lock className="h-12 w-12" style={{ color: "#0D99FF" }} />}
          href="/services/zero-trust"
        />
        <ServiceCard
          title="API (BDE)"
          description="保護您的API端點，確保數據安全傳輸和訪問控制。我們的API保護系統能夠防止API濫用、數據洩露和未授權訪問，確保您的API安全可靠。"
          icon={<Users className="h-12 w-12" style={{ color: "#0D99FF" }} />}
          href="/api"
        />
        <ServiceCard
          title="HiWAF防禦"
          description="中華電信HiNet WAF網站應用防火牆服務。提供全面的網站應用程式保護，防禦各種網路攻擊威脅。"
          icon={<Shield className="h-12 w-12" style={{ color: "#0D99FF" }} />}
          href="/services/hiwaf"
        />
        <ServiceCard
          title="應用層DDoS防禦"
          description="防範任何規模或類型的 DDoS 攻擊。提供強大的DDoS防護能力，確保您的服務持續可用。"
          icon={<Shield className="h-12 w-12" style={{ color: "#0D99FF" }} />}
          href="/services/ddos-protection"
        />
      </div>
    </div>
  )
}

function ServiceCard({ title, description, icon, href }:{ title: string, description: string, icon: React.ReactNode, href: string }) {
  return (
    <Card className="border-gray-700 hover:border-blue-600 transition-colors h-full flex flex-col shadow-lg bg-gray-800">
      <CardHeader className="flex flex-row items-center gap-4">
        {icon}
        <CardTitle className="text-xl font-medium text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-300 font-normal">{description}</CardDescription>
      </CardContent>
      <div className="p-6 pt-0 mt-auto">
        <Link href={href}>
          <Button
            variant="outline"
            className="w-full font-normal"
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
    </Card>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Globe, Server, Lock, Zap, Users, Clock, Network } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
          服務<span style={{ color: "#0D99FF" }}>總覽</span>
        </h1>
        <p className="mt-4 text-gray-300 dark:text-gray-300 text-gray-700 max-w-2xl mx-auto font-normal">
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
          title="Waiting room等候室"
          description="管理高峰流量的虛擬等待室。當網站流量激增時，自動將用戶引導至等候室，確保核心服務穩定運行，提供優質的用戶體驗。"
          icon={<Clock className="h-12 w-12" style={{ color: "#0D99FF" }} />}
          href="/services/waiting-room"
        />
        <ServiceCard
          title="API 防護"
          description="全球整合式 API 保護和監控，可自動探索、驗證和保護您的 API 端點。我們的API防護系統能夠防止API濫用、數據洩露和未授權訪問，確保您的API安全可靠。"
          icon={<Users className="h-12 w-12" style={{ color: "#0D99FF" }} />}
          href="/services/api-protection"
        />
        <ServiceCard
          title="DNS 防護"
          description="阻止針對 DNS 系統的超大規模攻擊。我們的DNS防護系統能夠檢測和緩解各種DNS攻擊，包括DNS放大攻擊、DNS隧道攻擊等，確保您的域名解析服務穩定可靠。"
          icon={<Server className="h-12 w-12" style={{ color: "#0D99FF" }} />}
          href="/services/dns-protection"
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
        <Card className="border-green-500 dark:border-green-600 hover:border-green-400 dark:hover:border-green-500 transition-colors h-full flex flex-col shadow-lg bg-card relative">
          {/* 已訂閱標籤 */}
          <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
            已訂閱
          </div>
          <CardHeader className="flex flex-row items-center gap-4">
            <Shield className="h-12 w-12" style={{ color: "#0D99FF" }} />
            <CardTitle className="text-xl font-medium text-card-foreground">WAF防禦</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="text-muted-foreground font-normal">
              中華電信HiNet WAF網站應用防火牆服務。提供全面的網站應用程式保護，防禦各種網路攻擊威脅。
            </CardDescription>
          </CardContent>
          <div className="p-6 pt-0 mt-auto">
            <Link href="/services/hiwaf">
              <Button className="w-full font-normal bg-green-600 hover:bg-green-700 text-white border-0">
                管理服務
              </Button>
            </Link>
          </div>
        </Card>
        <ServiceCard
          title="應用層DDoS防禦"
          description="防範任何規模或類型的 DDoS 攻擊。提供強大的DDoS防護能力，確保您的服務持續可用。計價：$2萬/月起，計價單位：(應用程式數量/流量)"
          icon={<Shield className="h-12 w-12" style={{ color: "#0D99FF" }} />}
          href="/services/ddos-protection"
        />
        <ServiceCard
          title="Rate Limiting 限速"
          description="透過限制超過定義限制的流量，保護應用程式和 API 免遭濫用。我們的限速系統能夠緩解 DDoS 攻擊、保護客戶資料免受暴力登入攻擊，並確保 API 可用性。"
          icon={<Shield className="h-12 w-12" style={{ color: "#0D99FF" }} />}
          href="/services/rate-limiting"
        />
        <ServiceCard
          title="資料本地化套件"
          description="區域服務，能選擇邊緣節點檢查和儲存數據的位置，並保持全球網路的安全和性能優勢。我們的資料本地化套件讓您能夠符合政策限制與法規要求，同時保持全球網路的性能優勢。"
          icon={<Globe className="h-12 w-12" style={{ color: "#0D99FF" }} />}
          href="/services/data-localization"
        />
        <ServiceCard
          title="TFX CDN融合交換中心"
          description="CDN併行與備援機制，提供數位韌性強度。透過多重CDN供應商的整合，確保內容傳遞的高可用性和最佳效能，即使在單一供應商故障時也能維持服務不中斷。"
          icon={<Network className="h-12 w-12" style={{ color: "#0D99FF" }} />}
          href="/services/tfx-cdn"
        />
      </div>
    </div>
  )
}

function ServiceCard({ title, description, icon, href }) {
  return (
    <Card className="border-border hover:border-blue-600 transition-colors h-full flex flex-col shadow-lg bg-card">
      <CardHeader className="flex flex-row items-center gap-4">
        {icon}
        <CardTitle className="text-xl font-medium text-card-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-muted-foreground font-normal">{description}</CardDescription>
      </CardContent>
      <div className="p-6 pt-0 mt-auto">
        <Link href={href}>
          <Button
            variant="outline"
            className="w-full font-normal bg-transparent"
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

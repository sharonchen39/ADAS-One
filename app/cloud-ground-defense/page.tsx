"use client"

import {
  Cloud,
  Database,
  Globe,
  Lock,
  Shield,
  Zap,
  ArrowDown,
  User,
  Bot,
  XCircle,
  CheckCircle,
  Server,
  Skull,
  BarChart3,
  AlertTriangle,
  CheckCircle2,
  Building2,
  Network,
  ShieldAlert,
  GlobeLock,
  DollarSign,
  UserX,
  Layers,
  MapPin,
  ToggleLeft,
  Brain,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function CloudGroundDefensePage() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // 在客戶端掛載後才能訪問 theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const cloudServices = [
    { name: "DNS 服務代管 & 保護", icon: Shield, link: "/services/dns-protection" },
    { name: "CDN 加速", icon: Zap, link: "/services/cdn" },
    { name: "DDoS 防護", icon: Shield, link: "/services/ddos-protection" },
    { name: "GSLB 負載平衡", icon: Globe, link: "/services/rate-limiting" },
    { name: "來源 IP 信譽檢查", icon: Lock, link: "/services/bot-defense" },
    { name: "白名單管理", icon: Database, link: "/services/application-defense" },
    { name: "SSL 憑證檢查", icon: Lock, link: "/services/application-defense" },
    { name: "WAF + Bot 防禦", icon: Shield, link: "/services/hiwaf" },
  ]

  const groundServices = [
    { name: "DNS 服務", icon: Shield, link: "/services/dns-protection" },
    { name: "負載平衡", icon: Globe, link: "/services/rate-limiting" },
    { name: "SSL Offload", icon: Lock, link: "/services/application-defense" },
    { name: "L7 DDoS", icon: Shield, link: "/services/ddos-protection" },
    { name: "WAF + Bot 防禦", icon: Shield, link: "/services/hiwaf" },
    { name: "黑/白名單", icon: Database, link: "/services/application-defense" },
    { name: "API Gateway", icon: Globe, link: "/services/api-protection" },
  ]

  // 根據當前主題選擇圖片
  const diagramImage =
    mounted && (theme === "dark" || resolvedTheme === "dark")
      ? "/cloud-ground-defense-diagram-dark.jpg"
      : "/cloud-ground-defense-diagram.jpg"

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
            混合雲架構下的<span style={{ color: "#0D99FF" }}>雲地雙層式防禦方案</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg font-normal max-w-2xl mx-auto">
            結合 Cloudflare 與 F5 的防禦優勢，打造端對端的多層資安防護。
          </p>
        </div>

        {/* 互動式架構圖 */}
        <div className="relative mx-auto max-w-6xl mb-16">
          <div className="bg-muted border border-border rounded-lg p-8 shadow-lg">
            {/* 用戶、機器人和攻擊者視覺化 */}
            <div className="mb-12">
              <div className="flex justify-center items-center gap-12 mb-8">
                {/* 合法用戶 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-2">
                    <User className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-sm font-medium text-foreground">合法用戶</span>
                </div>

                {/* 機器人攻擊 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-2">
                    <Bot className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <span className="text-sm font-medium text-foreground">機器人攻擊</span>
                </div>

                {/* 攻擊者 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-2">
                    <Skull className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <span className="text-sm font-medium text-foreground">惡意攻擊者</span>
                </div>
              </div>

              {/* 由上而下的視覺流程 */}
              <div className="flex justify-center items-center gap-12 mb-8">
                {/* 用戶通過 */}
                <div className="flex flex-col items-center">
                  <ArrowDown className="h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span className="text-xs text-muted-foreground">允許通過</span>
                  </div>
                </div>

                {/* 機器人阻擋 */}
                <div className="flex flex-col items-center">
                  <ArrowDown className="h-8 w-8 text-orange-600 dark:text-orange-400 mb-2" />
                  <div className="flex items-center gap-1">
                    <XCircle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                    <span className="text-xs text-muted-foreground">雲端阻擋</span>
                  </div>
                </div>

                {/* 攻擊者阻擋 */}
                <div className="flex flex-col items-center">
                  <ArrowDown className="h-8 w-8 text-red-600 dark:text-red-400 mb-2" />
                  <div className="flex items-center gap-1">
                    <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    <span className="text-xs text-muted-foreground">完全阻擋</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 雲端防護層 */}
            <div className="mb-12">
              <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 p-6">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Cloud className="h-8 w-8" style={{ color: "#FF6B00" }} />
                    <h2 className="text-2xl font-semibold text-foreground">雲端防護層</h2>
                  </div>
                  <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-sm py-1 px-3 rounded-full inline-flex items-center">
                    <span>Cloudflare 全球網路第一層防禦</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {cloudServices.map((service, index) => {
                    const IconComponent = service.icon
                    return (
                      <Link key={index} href={service.link}>
                        <Button
                          variant="outline"
                          className="h-auto p-4 w-full flex flex-col items-center gap-2 hover:bg-orange-50 dark:hover:bg-orange-950/20 border-2 hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-200"
                        >
                          <IconComponent className="h-6 w-6" style={{ color: "#FF6B00" }} />
                          <span className="text-xs text-center font-medium">{service.name}</span>
                        </Button>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* 流量流向指示 */}
            <div className="flex justify-center mb-12">
              <div className="flex flex-col items-center">
                <div className="text-muted-foreground text-sm mb-2">流量流向</div>
                <ArrowDown className="h-8 w-8 text-muted-foreground animate-bounce" />
                <div className="text-muted-foreground text-sm mt-2">經過雲端過濾後</div>
              </div>
            </div>

            {/* 地端防護層 */}
            <div>
              <div className="bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 p-6">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Server className="h-8 w-8" style={{ color: "#FF0000" }} />
                    <h2 className="text-2xl font-semibold text-foreground">地端防護層</h2>
                  </div>
                  <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-sm py-1 px-3 rounded-full inline-flex items-center">
                    <span>F5 進階安全解決方案第二層防禦</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {groundServices.map((service, index) => {
                    const IconComponent = service.icon
                    return (
                      <Link key={index} href={service.link}>
                        <Button
                          variant="outline"
                          className="h-auto p-4 w-full flex flex-col items-center gap-2 hover:bg-red-50 dark:hover:bg-red-950/20 border-2 hover:border-red-200 dark:hover:border-red-800 transition-all duration-200"
                        >
                          <IconComponent className="h-6 w-6" style={{ color: "#FF0000" }} />
                          <span className="text-xs text-center font-medium">{service.name}</span>
                        </Button>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* 架構說明 */}
            <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#0D99FF" }}></div>
                <h3 className="font-semibold text-foreground">雙層式防禦架構</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                惡意流量首先經過雲端 Cloudflare 的全球網路進行第一層過濾，阻擋大規模攻擊和已知威脅。
                經過雲端過濾的合法流量再進入地端 F5 設備進行第二層精細化防護，確保應用層安全。
                點擊任一服務按鈕可查看詳細功能說明。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">
            雙層式防禦的<span style={{ color: "#0D99FF" }}>優勢</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-muted border border-border p-8 shadow-lg">
              <h3 className="mb-4 text-xl font-medium text-foreground">全面性防護</h3>
              <p className="text-muted-foreground font-normal">
                結合雲端與地端防禦機制，提供從網路層到應用層的全方位保護，有效抵禦各類型攻擊。
              </p>
            </div>
            <div className="rounded-lg bg-muted border border-border p-8 shadow-lg">
              <h3 className="mb-4 text-xl font-medium text-foreground">彈性擴展</h3>
              <p className="text-muted-foreground font-normal">
                雲端服務可快速應對大規模攻擊，地端設備則提供精準的應用防護，兩者相輔相成。
              </p>
            </div>
            <div className="rounded-lg bg-muted border border-border p-8 shadow-lg">
              <h3 className="mb-4 text-xl font-medium text-foreground">降低延遲</h3>
              <p className="text-muted-foreground font-normal">
                透過 CDN 加速與負載平衡技術，在提供安全防護的同時，確保服務的高可用性與低延遲。
              </p>
            </div>
          </div>
        </div>

        {/* 客戶案例區塊 */}
        <section className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl">
              客戶<span style={{ color: "#0D99FF" }}>案例</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              了解我們如何協助金融交易中心建立雲地雙層式防禦架構，成功抵禦大規模攻擊
            </p>
          </div>

          {/* 客戶資訊卡片 */}
          <div className="bg-muted border border-border rounded-lg p-8 shadow-lg mb-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                <Building2 className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">大型金融交易中心</h3>
                <p className="text-muted-foreground mb-6">
                  由於台灣在2023年才開始鬆綁關於金融機構上雲，因此客戶原先針對資安的防護措施皆部署於地端，然而仍有多項規定需要符合，因此在資安健檢後梳理出幾個客戶痛點。
                </p>

                {/* 添加關鍵數據指標 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 text-center border border-blue-200 dark:border-blue-800">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">350倍</div>
                    <div className="text-xs text-muted-foreground">攻擊流量峰值</div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 text-center border border-green-200 dark:border-green-800">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">99.9%</div>
                    <div className="text-xs text-muted-foreground">服務可用性</div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4 text-center border border-orange-200 dark:border-orange-800">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">5倍</div>
                    <div className="text-xs text-muted-foreground">實際vs預估流量</div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 text-center border border-purple-200 dark:border-purple-800">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">0秒</div>
                    <div className="text-xs text-muted-foreground">交易中斷時間</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 痛點與解決方案對照 */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* 左側：客戶痛點 */}
            <div className="bg-muted border border-border rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-semibold text-foreground">客戶痛點</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                    <ShieldAlert className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">地端設備無法因應現代化攻擊</h4>
                    <p className="text-sm text-muted-foreground">
                      駭客手法演進，純地端的防禦系統開始會出現幾個問題，像是設備老舊若要全部汰換需大筆成本支出、網路頻寬遇到大規模的攻擊無法因應而造成網頁當機的狀況出現。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                    <GlobeLock className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">資料不可經過中國節點</h4>
                    <p className="text-sm text-muted-foreground">
                      雖無法條明文規定，但金融業資料敏感，因此儘管鬆綁上雲，但相關資料仍不希望有機會經過中國的地方節點。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">按流量計費擔心成本爆量</h4>
                    <p className="text-sm text-muted-foreground">
                      多數雲端服務已流量計費的形式進行，客戶本身為台灣大型交易中心，每日交易量大，且金融機構敏感容易成為駭客流量攻擊目標，因此格外擔心支出成本問題。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                    <UserX className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">擔心完全阻擋也阻擋了部分客戶交易</h4>
                    <p className="text-sm text-muted-foreground">
                      許多雲端資安服務會利用完全阻擋的方式進行保護，但用戶在交易時其實會出現類似機器人的行為，因此若完全阻擋也會影響到客戶交易，希望能夠進行調整。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右側：解決方案 */}
            <div className="bg-muted border border-border rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-semibold text-foreground">極風所提供的協助</h3>
              </div>

              <p className="mb-6 text-muted-foreground">
                在不捨棄客戶既有地端設備的情況下，進行雲地整合防禦，藉由雙重防禦達成數位資安韌性，雲地共同協防。
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                    <Layers className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">雲地整合協防</h4>
                    <p className="text-sm text-muted-foreground">
                      沿用顧客既有的地端設備，利用Cloudflare進行大方向第一步的阻擋，隱藏源站IP並且利用Anycast架構導流可疑流量，完成全自動第一步防禦。再利用地端系統進行細部微調，設定部分開放條件，既可以逐步簡化地端設備，更可以做到協防備援的目的。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">排除中港澳，改以其他鄰近節點進行清洗</h4>
                    <p className="text-sm text-muted-foreground">
                      除了Cloudflare本身方案即不經由中國節點外，為了減少任何資料外流之疑慮，極風雲創可協助客戶進行設定，將香港、澳門之節點進行排除，鄰近流量會改經由日本、韓國，以及台灣自身的節點進行清理，確保數據安全。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                    <ToggleLeft className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">One portal彈性切換</h4>
                    <p className="text-sm text-muted-foreground">
                      Cloudflare在流量計算上僅計算乾淨流量，因此若遇到大量攻擊也不需要當心費用暴漲，但由於客戶本身每日交易量大，因此在成本考量下，客戶評估有部分流量不需要經由Cloudflare，極風雲創協助客戶設定一鍵快速切換的功能，並可以利用地端條件設定，讓已評估安全的流量直接進入地端設備。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                    <Brain className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">利用邊際運算雲端的Cloudflare AI全自動防禦</h4>
                    <p className="text-sm text-muted-foreground">
                      駭客攻擊的手法每日不斷地變化，如前面所提及，Cloudflare服務用於第一階段大範圍的全自動 AI 防禦，達到
                      Fight AI with AI
                      的目的，客戶可再依特定需求使用地端設備進行細部條件設定，例如在類似機器人的用戶行為出現時，Cloudflare可利用驗證機制進行第一步驗證與防禦阻擋，再由客戶利用地端設定進行細部處理排除，以不阻礙使用者交易為目的達到完全防護。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 架構圖 - 根據主題顯示不同圖片 */}
          <div className="bg-muted border border-border rounded-lg p-8 shadow-lg mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center text-foreground">雲地雙層式防禦架構圖</h3>

            <div className="flex justify-center">
              <div className="relative w-full max-w-4xl">
                {mounted && (
                  <Image
                    src={diagramImage || "/placeholder.svg"}
                    alt="雲地雙層式防禦架構圖"
                    width={1200}
                    height={600}
                    className="rounded-lg"
                    style={{ objectFit: "contain" }}
                    priority
                  />
                )}
              </div>
            </div>
          </div>

          {/* 成果展示 */}
          <div className="bg-muted border border-border rounded-lg p-8 shadow-lg mb-12">
            <h3 className="text-xl font-semibold mb-8 text-center text-foreground">實施成果</h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* 成功抵禦大規模攻擊 */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-lg font-medium text-foreground">成功抵禦大規模攻擊</h4>
                </div>

                <p className="text-muted-foreground mb-6">
                  在調整完資安服務架構後，客戶就曾成功抵禦來自駭客的大規模流量攻擊，當日攻擊量較平時正常流量多出350倍，但經清洗後流量與日常流量無異，交易一切正常。
                </p>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-600 dark:text-red-400">350倍</div>
                    <div className="text-xs text-muted-foreground">攻擊流量倍數</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">100%</div>
                    <div className="text-xs text-muted-foreground">攻擊阻擋率</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">0ms</div>
                    <div className="text-xs text-muted-foreground">額外延遲</div>
                  </div>
                </div>

                {/* 攻擊流量圖表視覺化 - 線圖 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-foreground">攻擊流量 vs 正常流量</span>
                    <span className="text-xs text-muted-foreground">350倍攻擊流量被成功阻擋</span>
                  </div>

                  <div className="relative h-48 w-full">
                    {/* 垂直分隔線 - 調整前後分水嶺 */}
                    <div className="absolute h-full w-0.5 bg-blue-400 dark:bg-blue-600 left-1/3 z-10"></div>

                    {/* 分水嶺標籤 */}
                    <div className="absolute top-0 left-1/3 transform -translate-x-1/2 -translate-y-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded z-20">
                      資安架構調整
                    </div>

                    {/* 調整前標籤 */}
                    <div className="absolute top-4 left-1/6 transform -translate-x-1/2 text-xs text-muted-foreground">
                      調整前
                    </div>

                    {/* 調整後標籤 */}
                    <div className="absolute top-4 left-2/3 transform -translate-x-1/2 text-xs text-muted-foreground">
                      調整後
                    </div>

                    {/* X軸 */}
                    <div className="absolute bottom-0 w-full h-px bg-gray-300 dark:bg-gray-600"></div>

                    {/* 攻擊流量線圖 - 更細緻的版本 */}
                    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      {/* 基準線 - 正常流量水平 */}
                      <line x1="0" y1="85" x2="100" y2="85" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2" />

                      {/* 調整前 - 正常流量 */}
                      <path
                        d="M0,85 C2,83 4,86 6,84 C8,82 10,85 12,83 C14,84 16,82 18,85 C20,87 22,84 24,85 C26,86 28,83 30,85"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="1.5"
                      />

                      {/* 調整後 - 正常流量 (左側) */}
                      <path
                        d="M30,85 C32,84 34,86 36,85 C38,84 40,85 42,84"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="1.5"
                      />

                      {/* 攻擊流量峰值 */}
                      <path
                        d="M42,84 C44,80 46,60 48,30 C50,20 52,25 54,35 C56,45 58,70 60,80 C62,84 64,85 66,85"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2"
                      />

                      {/* 攻擊後 - 正常流量 (右側) */}
                      <path
                        d="M66,85 C68,84 70,86 72,85 C74,83 76,86 78,84 C80,85 82,83 84,85 C86,86 88,84 90,85 C92,86 94,84 96,85 C98,85 100,84 100,85"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="1.5"
                      />

                      {/* 攻擊流量區域填充 */}
                      <path
                        d="M42,84 C44,80 46,60 48,30 C50,20 52,25 54,35 C56,45 58,70 60,80 C62,84 64,85 66,85 L66,85 L42,85 Z"
                        fill="rgba(239, 68, 68, 0.1)"
                      />

                      {/* 攻擊流量峰值標記 */}
                      <circle cx="48" cy="30" r="2" fill="#ef4444" stroke="#fff" strokeWidth="1" />
                    </svg>

                    {/* 攻擊流量標籤 */}
                    <div
                      className="absolute text-xs font-medium text-red-600 dark:text-red-400 bg-white dark:bg-gray-800 px-1 rounded border border-red-200 dark:border-red-800"
                      style={{ top: "25%", left: "48%" }}
                    >
                      攻擊流量
                    </div>

                    {/* 正常流量標籤 */}
                    <div
                      className="absolute text-xs text-blue-600 dark:text-blue-400"
                      style={{ bottom: "20%", left: "15%" }}
                    >
                      正常流量
                    </div>
                  </div>
                </div>
              </div>

              {/* 掌握確切流量數據 */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-lg font-medium text-foreground">掌握確切流量數據</h4>
                </div>

                <p className="text-muted-foreground mb-6">
                  過往流量靠客戶去做估算，並不精細，以此客戶來說，實際流量較原本預估流量相差近五倍，藉由導入Cloudflare服務後，可以更明確了解流量數據來源，並針對可疑流量進行排除。
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">5倍</div>
                    <div className="text-xs text-muted-foreground">實際流量差異</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">70%</div>
                    <div className="text-xs text-muted-foreground">合法流量比例</div>
                  </div>
                </div>

                {/* 流量數據圖表視覺化 - 圓餅圖 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-foreground">流量數據分析</span>
                    <span className="text-xs text-muted-foreground">實際流量為預估的5倍</span>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    {/* 圓餅圖 */}
                    <div className="relative w-40 h-40">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        {/* 背景圓 */}
                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#e5e7eb" strokeWidth="20" />

                        {/* 可發流量 (70%) */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke="#2563eb"
                          strokeWidth="20"
                          strokeDasharray="175.8 251.2"
                          strokeDashoffset="0"
                          transform="rotate(-90 50 50)"
                        />

                        {/* 可疑流量 (20%) */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke="#60a5fa"
                          strokeWidth="20"
                          strokeDasharray="50.2 251.2"
                          strokeDashoffset="-175.8"
                          transform="rotate(-90 50 50)"
                        />

                        {/* 其他 (10%) */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke="#d1d5db"
                          strokeWidth="20"
                          strokeDasharray="25.1 251.2"
                          strokeDashoffset="-226"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                    </div>

                    {/* 圖例 */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                        <span className="text-sm text-foreground">可發流量 (70%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                        <span className="text-sm text-foreground">可疑流量 (20%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-400"></div>
                        <span className="text-sm text-foreground">其他 (10%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 整體成效統計 */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-950/30 dark:to-gray-900/20 rounded-lg p-8 border border-gray-200 dark:border-gray-800 mb-12">
            <h3 className="text-xl font-semibold mb-8 text-center text-foreground">實施成效總覽</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">防護成功率</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">50%</div>
                <div className="text-sm text-muted-foreground">成本節省</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">30%</div>
                <div className="text-sm text-muted-foreground">效能提升</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">全天候監控</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground text-sm">
                * 數據基於客戶實際使用情況，實施雲地雙層式防禦方案後的6個月統計結果
              </p>
            </div>
          </div>

          {/* 公司介紹 */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                <Network className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">關於極風雲創</h3>
            </div>

            <p className="text-muted-foreground mb-4">
              極風雲創為全台唯一同時精通Cloudflare
              與地端設備之應用資安服務專業廠商，長期持續專注雲端應用資安領域。專業技術團隊擁有卓越的資安知識，擅長對於規劃與導入雲端和地端資安並存的複雜架構，協助服務台灣諸多重要的金融、政府、製造產業的客戶，提供更快速及完善的安全資訊架構，來服務滿足客戶需求，成為企業的最佳資安夥伴。
            </p>

            <div className="flex justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" style={{ backgroundColor: "#0D99FF" }}>
                了解更多成功案例
              </Button>
            </div>
          </div>
        </section>

        {/* 立即諮詢區塊 */}
        <section className="py-12 bg-muted rounded-lg shadow-lg border border-border mt-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">
              雲地防禦<span style={{ color: "#0D99FF" }}>方案</span>
            </h2>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-medium text-foreground mb-4">需要客製化方案？</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 font-normal">
                我們的專家團隊將協助您評估現有架構，制定最適合的雲地防禦實施計劃
              </p>
              <Button
                variant="outline"
                className="text-white font-normal px-8 py-3 text-lg border-2"
                style={{ borderColor: "#0D99FF", color: "#0D99FF" }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(13, 153, 255, 0.1)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                }}
              >
                免費諮詢
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

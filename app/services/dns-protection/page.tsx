"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Server, CheckCircle, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"

export default function DNSProtectionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
          DNS<span style={{ color: "#0D99FF" }}>防護</span>
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg font-normal max-w-2xl mx-auto">
          阻止針對 DNS 系統的超大規模攻擊
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-400 font-normal max-w-3xl mx-auto">
          我們的DNS防護系統提供全面的DNS安全解決方案，能夠檢測和緩解各種DNS攻擊，包括DNS放大攻擊、DNS隧道攻擊、DNS劫持等，確保您的域名解析服務穩定可靠。
        </p>
      </div>

      {/* Service Features List */}
      <section className="py-12 bg-card rounded-lg shadow-lg border border-border mb-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">
            服務<span style={{ color: "#0D99FF" }}>特色</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-6">
              <ServiceFeatureItem
                icon={<Zap className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="快速響應"
                description="可提供安全和具有復原能力的 DNS 服務，它具有最快速的回應時間（平均 11 毫秒）、無與倫比的備援（位置分佈於超過 330 座城市）以及進階安全性。"
              />
              <ServiceFeatureItem
                icon={<Shield className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="DNS攻擊防護"
                description="Cloudflare 提供內建 無限和非計量 DDoS 保護和一鍵式 DNSSEC，以確保您的應用程式始終獲得保護，以免受到 DNS 攻擊。"
              />
              <ServiceFeatureItem
                icon={<CheckCircle className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="憑證管理"
                description="TLS 憑證管理自動周期更新，確保憑證保持有效。"
              />
            </ul>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">
          防護<span style={{ color: "#0D99FF" }}>分析</span>
        </h2>
        <DNSProtectionAnalytics />
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-card rounded-lg shadow-lg border border-border">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">
            DNS防護<span style={{ color: "#0D99FF" }}>方案</span>
          </h2>

          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-medium text-foreground">DNS防護方案</CardTitle>
                <CardDescription className="font-normal text-muted-foreground">
                  全面的DNS安全防護解決方案
                </CardDescription>
                <div className="mt-6">
                  <span className="text-muted-foreground font-normal text-lg">$</span>
                  <span className="text-5xl font-medium text-foreground">5萬</span>
                  <span className="text-muted-foreground font-normal text-lg">/月起</span>
                </div>
                <p className="text-xs text-gray-500 font-normal mt-2">計價單位：(應用程式數量/請求數）</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">DNS攻擊全面防護</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">99.99%服務可用性</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">毫秒級查詢響應</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">全球分佈式架構</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">24/7即時監控</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">AI智能分析</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">專業技術支持</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">詳細防護報告</span>
                  </li>
                </ul>

                <div className="pt-6">
                  <Link href="/account/purchase">
                    <Button
                      className="w-full font-normal py-3 text-lg text-white"
                      style={{ backgroundColor: "#0D99FF", borderColor: "#0D99FF" }}
                      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0A85E9")}
                      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0D99FF")}
                    >
                      立即購買
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-medium text-foreground mb-4">需要客製化方案？</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 font-normal">
              我們的專家團隊將協助您評估DNS安全需求，制定最適合的DNS防護策略
            </p>
            <Button
              variant="outline"
              className="text-foreground font-normal px-8 py-3 text-lg border-2"
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
  )
}

function ServiceFeatureItem({ icon, title, description }) {
  return (
    <li className="flex items-start space-x-4 p-4 rounded-lg bg-muted border border-border">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="text-lg font-medium text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground font-normal">{description}</p>
      </div>
    </li>
  )
}

function DNSProtectionAnalytics() {
  // 模擬數據
  const dnsQueryData = [
    { name: "1月", 正常查詢: 12500, 惡意查詢: 850, 阻擋查詢: 820 },
    { name: "2月", 正常查詢: 13200, 惡意查詢: 720, 阻擋查詢: 695 },
    { name: "3月", 正常查詢: 14500, 惡意查詢: 980, 阻擋查詢: 960 },
    { name: "4月", 正常查詢: 15800, 惡意查詢: 650, 阻擋查詢: 635 },
    { name: "5月", 正常查詢: 16500, 惡意查詢: 580, 阻擋查詢: 570 },
    { name: "6月", 正常查詢: 17200, 惡意查詢: 420, 阻擋查詢: 415 },
  ]

  const responseTimeData = [
    { name: "1月", 響應時間: 15 },
    { name: "2月", 響應時間: 12 },
    { name: "3月", 響應時間: 10 },
    { name: "4月", 響應時間: 8 },
    { name: "5月", 響應時間: 6 },
    { name: "6月", 響應時間: 5 },
  ]

  const attackTypeData = [
    { name: "DNS放大攻擊", value: 40, color: "#ef4444" },
    { name: "DNS隧道攻擊", value: 25, color: "#f97316" },
    { name: "DNS劫持", value: 20, color: "#eab308" },
    { name: "其他攻擊", value: 15, color: "#a3a3a3" },
  ]

  return (
    <div className="space-y-8">
      {/* 統計卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="阻擋成功率"
          value="98.8%"
          description="本月DNS攻擊阻擋率"
          trend="+0.8%"
          trendType="positive"
          icon={<Shield className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="查詢處理量"
          value="17.6M"
          description="本月DNS查詢總數"
          trend="+4.3%"
          trendType="positive"
          icon={<Server className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="響應時間"
          value="5ms"
          description="平均DNS查詢響應時間"
          trend="-16.7%"
          trendType="positive"
          icon={<Zap className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="服務可用性"
          value="99.99%"
          description="本月DNS服務可用率"
          trend="+0.01%"
          trendType="positive"
          icon={<TrendingUp className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
      </div>

      {/* 圖表區域 - 使用靜態內容 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">DNS查詢統計</CardTitle>
            <CardDescription className="text-muted-foreground">過去6個月的DNS查詢和攻擊阻擋情況</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">DNS查詢統計圖表</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {dnsQueryData.map((item, index) => (
                    <div key={index} className="bg-muted p-3 rounded-lg border border-border">
                      <p className="text-foreground font-medium">{item.name}</p>
                      <p className="text-sm text-green-400">正常: {item.正常查詢}</p>
                      <p className="text-sm text-red-400">惡意: {item.惡意查詢}</p>
                      <p className="text-sm text-blue-400">阻擋: {item.阻擋查詢}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">響應時間優化</CardTitle>
            <CardDescription className="text-muted-foreground">DNS查詢響應時間改善趨勢</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <div className="text-center w-full">
                <p className="text-muted-foreground mb-4">響應時間優化趨勢</p>
                <div className="flex justify-between items-end h-32 w-full px-4">
                  {responseTimeData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="bg-blue-500 w-8" style={{ height: `${(20 - item.響應時間) * 4}px` }}></div>
                      <p className="text-xs mt-2 text-muted-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.響應時間}ms</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 shadow-lg bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">攻擊類型分佈</CardTitle>
            <CardDescription className="text-muted-foreground">檢測到的DNS攻擊類型比例</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">攻擊類型分佈圖表</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  {attackTypeData.map((item, index) => (
                    <div key={index} className="p-3 rounded-lg" style={{ backgroundColor: `${item.color}30` }}>
                      <p className="text-foreground font-medium text-sm">{item.name}</p>
                      <p className="text-sm" style={{ color: item.color }}>
                        {item.value}%
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 shadow-lg bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">DNS安全事件</CardTitle>
            <CardDescription className="text-muted-foreground">最近的DNS安全事件記錄</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 overflow-y-auto">
              <div className="space-y-3">
                <div className="flex items-start p-3 bg-muted rounded-lg border border-border">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-1"></div>
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">DNS放大攻擊</p>
                    <p className="text-muted-foreground text-xs">檢測到來自多個IP的DNS放大攻擊，已成功阻擋</p>
                    <p className="text-muted-foreground text-xs">2小時前</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-muted rounded-lg border border-border">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-1"></div>
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">異常查詢模式</p>
                    <p className="text-muted-foreground text-xs">發現異常的DNS查詢模式，可能為DNS隧道攻擊</p>
                    <p className="text-muted-foreground text-xs">6小時前</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-muted rounded-lg border border-border">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-1"></div>
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">系統更新完成</p>
                    <p className="text-muted-foreground text-xs">DNS防護規則已更新，新增對最新攻擊模式的防護</p>
                    <p className="text-muted-foreground text-xs">1天前</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function StatCard({ title, value, description, trend, trendType, icon }) {
  return (
    <Card className="shadow-lg bg-card border-border">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold text-foreground mt-2">{value}</p>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
          <div className="bg-slate-100 dark:bg-gray-700 p-3 rounded-full">{icon}</div>
        </div>
        <div
          className={`mt-4 flex items-center text-sm ${trendType === "positive" ? "text-green-500" : "text-red-500"}`}
        >
          {trendType === "positive" ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v3.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                clipRule="evenodd"
              />
            </svg>
          )}
          {trend}
        </div>
      </CardContent>
    </Card>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Bot, Users, CheckCircle, TrendingUp, Eye, Zap } from "lucide-react"
import Link from "next/link"

export default function BotDefensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
          機器人<span style={{ color: "#0D99FF" }}>防禦</span>
        </h1>
        <p className="mt-4 text-muted-foreground text-lg font-normal max-w-2xl mx-auto">
          識別並阻止惡意機器人流量，保護您的網站免受自動化攻擊
        </p>
      </div>

      {/* Service Features List */}
      <section className="py-12 bg-card rounded-lg shadow-lg border-border mb-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">
            服務<span style={{ color: "#0D99FF" }}>特色</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-6">
              <ServiceFeatureItem
                icon={<Bot className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="智能機器人檢測"
                description="使用機器學習算法識別惡意機器人，區分正常用戶和自動化攻擊"
              />
              <ServiceFeatureItem
                icon={<Shield className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="行為分析"
                description="分析訪問模式和行為特徵，即時識別異常的自動化行為"
              />
              <ServiceFeatureItem
                icon={<Zap className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="即時阻擋"
                description="毫秒級響應，即時阻擋惡意機器人請求，保護網站資源"
              />
              <ServiceFeatureItem
                icon={<Eye className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="流量監控"
                description="24/7監控網站流量，識別爬蟲、刷票機器人等惡意行為"
              />
              <ServiceFeatureItem
                icon={<Users className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="白名單管理"
                description="支持搜索引擎等合法機器人白名單，確保正常業務不受影響"
              />
              <ServiceFeatureItem
                icon={<TrendingUp className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="智能學習"
                description="持續學習新的攻擊模式，自動更新防護策略"
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
        <BotDefenseAnalytics />
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-card rounded-lg shadow-lg border-border">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">
            機器人防禦<span style={{ color: "#0D99FF" }}>方案</span>
          </h2>

          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-medium text-foreground">機器人防禦方案</CardTitle>
                <CardDescription className="font-normal text-muted-foreground">
                  全面的機器人防護解決方案
                </CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-medium text-foreground">$5萬</span>
                  <span className="text-muted-foreground font-normal text-lg">/月起</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">智能機器人檢測</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">即時行為分析</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">毫秒級響應阻擋</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">24/7流量監控</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">白名單管理</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">智能學習更新</span>
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
                      className="w-full text-white font-normal py-3 text-lg"
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
              我們的專家團隊將協助您評估網站流量特性，制定最適合的機器人防護策略
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

function BotDefenseAnalytics() {
  // 模擬數據
  const botDetectionData = [
    { name: "1月", 惡意機器人: 1250, 合法機器人: 380, 正常用戶: 8500 },
    { name: "2月", 惡意機器人: 1180, 合法機器人: 420, 正常用戶: 9200 },
    { name: "3月", 惡意機器人: 1350, 合法機器人: 450, 正常用戶: 10500 },
    { name: "4月", 惡意機器人: 980, 合法機器人: 380, 正常用戶: 11800 },
    { name: "5月", 惡意機器人: 850, 合法機器人: 420, 正常用戶: 12500 },
    { name: "6月", 惡意機器人: 720, 合法機器人: 450, 正常用戶: 13200 },
  ]

  const blockingEfficiencyData = [
    { name: "1月", 阻擋率: 94.2 },
    { name: "2月", 阻擋率: 95.8 },
    { name: "3月", 阻擋率: 96.5 },
    { name: "4月", 阻擋率: 97.2 },
    { name: "5月", 阻擋率: 98.1 },
    { name: "6月", 阻擋率: 98.7 },
  ]

  const botTypeData = [
    { name: "爬蟲機器人", value: 35, color: "#ef4444" },
    { name: "刷票機器人", value: 25, color: "#f97316" },
    { name: "垃圾郵件機器人", value: 20, color: "#eab308" },
    { name: "其他惡意機器人", value: 20, color: "#dc2626" },
  ]

  return (
    <div className="space-y-8">
      {/* 統計卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="阻擋率"
          value="98.7%"
          description="本月阻擋成功率"
          trend="+0.6%"
          trendType="positive"
          icon={<Shield className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="檢測機器人"
          value="720"
          description="本月檢測惡意機器人"
          trend="-15.3%"
          trendType="positive"
          icon={<Bot className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="響應時間"
          value="5ms"
          description="平均檢測響應時間"
          trend="-16.7%"
          trendType="positive"
          icon={<Zap className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="保護用戶"
          value="13,200"
          description="本月保護正常用戶"
          trend="+5.6%"
          trendType="positive"
          icon={<Users className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
      </div>

      {/* 圖表區域 - 替換為靜態內容 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">流量分析</CardTitle>
            <CardDescription className="text-muted-foreground">過去6個月的流量類型分佈</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">流量分析圖表</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {botDetectionData.map((item, index) => (
                    <div key={index} className="bg-muted border border-border p-3 rounded-lg">
                      <p className="text-foreground font-medium">{item.name}</p>
                      <p className="text-sm text-blue-400">正常: {item.正常用戶}</p>
                      <p className="text-sm text-green-400">合法: {item.合法機器人}</p>
                      <p className="text-sm text-red-400">惡意: {item.惡意機器人}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">阻擋效率趨勢</CardTitle>
            <CardDescription className="text-muted-foreground">過去6個月的機器人阻擋成功率</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">阻擋效率趨勢圖表</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {blockingEfficiencyData.map((item, index) => (
                    <div key={index} className="bg-muted border border-border p-3 rounded-lg">
                      <p className="text-foreground font-medium">{item.name}</p>
                      <p className="text-sm text-green-400">阻擋率: {item.阻擋率}%</p>
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
            <CardTitle className="text-xl text-foreground">機器人類型分佈</CardTitle>
            <CardDescription className="text-muted-foreground">檢測到的惡意機器人類型</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">機器人類型分佈圖表</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  {botTypeData.map((item, index) => (
                    <div key={index} className="p-3 rounded-lg bg-muted border border-border">
                      <p className="text-foreground font-medium">{item.name}</p>
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
            <CardTitle className="text-xl text-foreground">響應時間優化</CardTitle>
            <CardDescription className="text-muted-foreground">機器人檢測響應時間改善趨勢</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <div className="text-center w-full">
                <p className="text-muted-foreground mb-4">響應時間優化趨勢</p>
                <div className="flex justify-between items-end h-32 w-full px-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-500 w-8" style={{ height: "60px" }}></div>
                    <p className="text-xs mt-2 text-muted-foreground">1月</p>
                    <p className="text-xs text-muted-foreground">15ms</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-500 w-8" style={{ height: "48px" }}></div>
                    <p className="text-xs mt-2 text-muted-foreground">2月</p>
                    <p className="text-xs text-muted-foreground">12ms</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-500 w-8" style={{ height: "40px" }}></div>
                    <p className="text-xs mt-2 text-muted-foreground">3月</p>
                    <p className="text-xs text-muted-foreground">10ms</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-500 w-8" style={{ height: "32px" }}></div>
                    <p className="text-xs mt-2 text-muted-foreground">4月</p>
                    <p className="text-xs text-muted-foreground">8ms</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-500 w-8" style={{ height: "24px" }}></div>
                    <p className="text-xs mt-2 text-muted-foreground">5月</p>
                    <p className="text-xs text-muted-foreground">6ms</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-500 w-8" style={{ height: "20px" }}></div>
                    <p className="text-xs mt-2 text-muted-foreground">6月</p>
                    <p className="text-xs text-muted-foreground">5ms</p>
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

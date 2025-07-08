"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CheckCircle, TrendingUp, Eye, Server, Zap, Lock, Users } from "lucide-react"
import Link from "next/link"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"

export default function RateLimitingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
          Rate Limiting<span style={{ color: "#0D99FF" }}>限速</span>
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg font-normal max-w-2xl mx-auto">
          透過限制超過定義限制的流量，保護應用程式和 API 免遭濫用
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-400 font-normal max-w-3xl mx-auto">
          限速可提供保護來抵禦阻斷服務攻擊、暴力登入嘗試、流量激增，以及針對 API 和應用程式的其他類型的濫用。
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
                icon={<Shield className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="緩解 DDoS 攻擊"
                description="使用精細化設定選項阻止高準度的第 7 層攻擊，有效防禦各種 DDoS 攻擊模式"
              />
              <ServiceFeatureItem
                icon={<Lock className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="保護客戶資料"
                description="抵禦試圖盜用帳戶和竊取敏感性資訊的暴力登入攻擊，確保用戶資料安全"
              />
              <ServiceFeatureItem
                icon={<Server className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="確保 API 可用性"
                description="透過基於要求的任何參數對流量進行限速，以較高的準確度識別濫用流量"
              />
              <ServiceFeatureItem
                icon={<Eye className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="即時監控"
                description="24/7 監控流量模式，即時檢測異常請求並自動觸發限速機制"
              />
              <ServiceFeatureItem
                icon={<Zap className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="彈性配置"
                description="支援多種限速策略，可根據不同業務需求靈活調整限制參數"
              />
              <ServiceFeatureItem
                icon={<TrendingUp className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="智能分析"
                description="提供詳細的流量分析報告，幫助優化限速策略和提升防護效果"
              />
            </ul>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">
          限速<span style={{ color: "#0D99FF" }}>分析</span>
        </h2>
        <RateLimitingAnalytics />
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-card rounded-lg shadow-lg border border-border">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">
            Rate Limiting<span style={{ color: "#0D99FF" }}>方案</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 基礎版方案 */}
            <Card className="bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-medium text-foreground">基礎版</CardTitle>
                <CardDescription className="font-normal text-muted-foreground">
                  基於IP，保護未經驗證的端點
                </CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-medium text-foreground">$3萬</span>
                  <span className="text-muted-foreground font-normal text-lg">/月起</span>
                </div>
                <p className="text-xs text-gray-500 font-normal mt-2">計價單位: (Request/月/100rules)</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">基於IP的限速保護</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">保護未經驗證的端點</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">限制特定IP位址請求數量</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">處理重複攻擊者濫用</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">基礎技術支持</span>
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
                      選擇基礎版
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* 進階版方案 */}
            <Card className="bg-card border-border shadow-lg ring-2 ring-blue-600">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-medium text-foreground">進階版</CardTitle>
                    <CardDescription className="font-normal text-muted-foreground">
                      基於IP及其他多種參數的全面限速
                    </CardDescription>
                  </div>
                  <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">推薦</div>
                </div>
                <div className="mt-6">
                  <span className="text-4xl font-medium text-foreground">$7萬</span>
                  <span className="text-muted-foreground font-normal text-lg">/月起</span>
                </div>
                <p className="text-xs text-gray-500 font-normal mt-2">計價單位: (Request/月/100rules)</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">包含基礎版所有功能</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">基於Query參數限速</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">Host、Headers、Cookie限速</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">ASN、Country、Path限速</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">高級流量分析</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">自定義限速規則</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">24/7專屬技術支持</span>
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
                      選擇進階版
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-medium text-foreground mb-4">需要客製化方案？</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 font-normal">
              我們的專家團隊將協助您評估流量模式，制定最適合的限速策略
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

function RateLimitingAnalytics() {
  // 模擬數據
  const requestData = [
    { name: "1月", 正常請求: 8500, 限速請求: 1250, 阻擋請求: 1180 },
    { name: "2月", 正常請求: 9200, 限速請求: 1100, 阻擋請求: 1050 },
    { name: "3月", 正常請求: 10500, 限速請求: 1350, 阻擋請求: 1280 },
    { name: "4月", 正常請求: 11800, 限速請求: 980, 阻擋請求: 920 },
    { name: "5月", 正常請求: 12500, 限速請求: 850, 阻擋請求: 800 },
    { name: "6月", 正常請求: 13200, 限速請求: 720, 阻擋請求: 680 },
  ]

  const rateLimitEfficiencyData = [
    { name: "1月", 阻擋率: 94.4 },
    { name: "2月", 阻擋率: 95.5 },
    { name: "3月", 阻擋率: 94.8 },
    { name: "4月", 阻擋率: 93.9 },
    { name: "5月", 阻擋率: 94.1 },
    { name: "6月", 阻擋率: 94.4 },
  ]

  const attackTypeData = [
    { name: "暴力登入", value: 35, color: "#ef4444" },
    { name: "API濫用", value: 30, color: "#f97316" },
    { name: "DDoS攻擊", value: 25, color: "#eab308" },
    { name: "其他攻擊", value: 10, color: "#a3a3a3" },
  ]

  const responseTimeData = [
    { name: "1月", 響應時間: 8 },
    { name: "2月", 響應時間: 7 },
    { name: "3月", 響應時間: 6 },
    { name: "4月", 響應時間: 5 },
    { name: "5月", 響應時間: 4 },
    { name: "6月", 響應時間: 3 },
  ]

  return (
    <div className="space-y-8">
      {/* 統計卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="限速規則"
          value="156"
          description="活躍限速規則數量"
          trend="+8.3%"
          trendType="positive"
          icon={<Shield className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="阻擋請求"
          value="680"
          description="本月阻擋惡意請求"
          trend="-15.0%"
          trendType="positive"
          icon={<Eye className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="響應時間"
          value="3ms"
          description="平均限速檢測時間"
          trend="-25.0%"
          trendType="positive"
          icon={<Zap className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="保護用戶"
          value="13,200"
          description="本月保護正常請求"
          trend="+5.6%"
          trendType="positive"
          icon={<Users className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
      </div>

      {/* 圖表區域 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">請求處理統計</CardTitle>
            <CardDescription className="text-muted-foreground">過去6個月的請求處理和限速情況</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={requestData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#ffffff" }} />
                  <Legend />
                  <Bar dataKey="正常請求" fill="#22b866" />
                  <Bar dataKey="限速請求" fill="#f97316" />
                  <Bar dataKey="阻擋請求" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">限速效率趨勢</CardTitle>
            <CardDescription className="text-muted-foreground">過去6個月的限速阻擋成功率</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={rateLimitEfficiencyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis domain={[90, 100]} stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#ffffff" }} />
                  <Line type="monotone" dataKey="阻擋率" stroke="#0D99FF" strokeWidth={3} />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 shadow-lg bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">攻擊類型分佈</CardTitle>
            <CardDescription className="text-muted-foreground">被限速阻擋的攻擊類型比例</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={attackTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {attackTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#ffffff" }} />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 shadow-lg bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">響應時間優化</CardTitle>
            <CardDescription className="text-muted-foreground">限速檢測響應時間改善趨勢</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={responseTimeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#ffffff" }} />
                  <Area type="monotone" dataKey="響應時間" stroke="#0D99FF" fill="#0D99FF" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
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
            <p className="text-sm text-gray-400 mt-1">{description}</p>
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

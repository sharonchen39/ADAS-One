"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Zap, Users, CheckCircle, TrendingUp, Eye, Server } from "lucide-react"
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

export default function CDNPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
          全球企業級內容傳遞網路<span style={{ color: "#0D99FF" }}> (CDN)</span>
        </h1>
        <p className="mt-4 text-muted-foreground text-lg font-normal max-w-2xl mx-auto">
          憑藉世界各地 330 個位置的支援，我們的 CDN 可最佳化靜態和動態內容，來滿足裝置、瀏覽器和頻寬需求。
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
                icon={<Globe className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="全球節點覆蓋"
                description="在全球330個位置部署CDN節點，確保用戶就近訪問"
              />
              <ServiceFeatureItem
                icon={<Zap className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="極速內容傳遞"
                description="智能路由算法，自動選擇最佳傳輸路徑，大幅提升加載速度"
              />
              <ServiceFeatureItem
                icon={<Server className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="智能緩存"
                description="動態內容緩存策略，減少源站負載，提高響應效率"
              />
              <ServiceFeatureItem
                icon={<Eye className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="實時監控"
                description="24/7監控節點狀態和性能，確保服務穩定可靠"
              />
              <ServiceFeatureItem
                icon={<Users className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="流量分析"
                description="詳細的流量統計和用戶行為分析，優化內容分發策略"
              />
              <ServiceFeatureItem
                icon={<TrendingUp className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="自動擴展"
                description="根據流量需求自動調整資源配置，應對突發流量"
              />
            </ul>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">
          性能<span style={{ color: "#0D99FF" }}>分析</span>
        </h2>
        <CDNAnalytics />
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-card rounded-lg shadow-lg border-border">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">
            CDN加速<span style={{ color: "#0D99FF" }}>方案</span>
          </h2>

          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-medium text-foreground">全球CDN加速方案</CardTitle>
                <CardDescription className="font-normal text-muted-foreground">
                  全面的內容分發網絡解決方案
                </CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-medium text-foreground">$2萬</span>
                  <span className="text-muted-foreground font-normal text-lg">/月</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">全球330個位置覆蓋</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">極速內容傳遞</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">智能緩存策略</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">24/7實時監控</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">詳細流量分析</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">自動資源擴展</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">專業技術支持</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">性能優化報告</span>
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
              我們的專家團隊將協助您評估流量需求，制定最適合的CDN加速策略
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

function CDNAnalytics() {
  // 模擬數據
  const performanceData = [
    { name: "1月", 加載時間: 2.8, 緩存命中率: 85, 帶寬節省: 65 },
    { name: "2月", 加載時間: 2.5, 緩存命中率: 88, 帶寬節省: 68 },
    { name: "3月", 加載時間: 2.2, 緩存命中率: 91, 帶寬節省: 72 },
    { name: "4月", 加載時間: 1.9, 緩存命中率: 93, 帶寬節省: 75 },
    { name: "5月", 加載時間: 1.6, 緩存命中率: 95, 帶寬節省: 78 },
    { name: "6月", 加載時間: 1.3, 緩存命中率: 97, 帶寬節省: 82 },
  ]

  const trafficData = [
    { name: "1月", 總流量: 1200, 緩存流量: 1020, 源站流量: 180 },
    { name: "2月", 總流量: 1350, 緩存流量: 1188, 源站流量: 162 },
    { name: "3月", 總流量: 1480, 緩存流量: 1347, 源站流量: 133 },
    { name: "4月", 總流量: 1620, 緩存流量: 1507, 源站流量: 113 },
    { name: "5月", 總流量: 1800, 緩存流量: 1710, 源站流量: 90 },
    { name: "6月", 總流量: 2000, 緩存流量: 1940, 源站流量: 60 },
  ]

  const regionData = [
    { name: "亞太地區", value: 45, color: "#0D99FF" },
    { name: "北美地區", value: 25, color: "#5591BD" },
    { name: "歐洲地區", value: 20, color: "#7dd3fc" },
    { name: "其他地區", value: 10, color: "#a3a3a3" },
  ]

  const responseTimeData = [
    { name: "1月", 響應時間: 120 },
    { name: "2月", 響應時間: 105 },
    { name: "3月", 響應時間: 95 },
    { name: "4月", 響應時間: 85 },
    { name: "5月", 響應時間: 75 },
    { name: "6月", 響應時間: 65 },
  ]

  return (
    <div className="space-y-8">
      {/* 統計卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="加載時間"
          value="1.3s"
          description="平均頁面加載時間"
          trend="-18.8%"
          trendType="positive"
          icon={<Zap className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="緩存命中率"
          value="97%"
          description="本月緩存命中率"
          trend="+2.1%"
          trendType="positive"
          icon={<Server className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="帶寬節省"
          value="82%"
          description="相比直連源站節省"
          trend="+5.1%"
          trendType="positive"
          icon={<TrendingUp className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="全球節點"
          value="330"
          description="活躍CDN節點數"
          trend="+8.1%"
          trendType="positive"
          icon={<Globe className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
      </div>

      {/* 圖表區域 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">性能優化趨勢</CardTitle>
            <CardDescription className="text-muted-foreground">過去6個月的性能指標改善</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      borderColor: "hsl(var(--border))",
                      color: "hsl(var(--foreground))",
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="加載時間" stroke="#ef4444" strokeWidth={2} />
                  <Line type="monotone" dataKey="緩存命中率" stroke="#0D99FF" strokeWidth={2} />
                  <Line type="monotone" dataKey="帶寬節省" stroke="#22b866" strokeWidth={2} />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">流量分佈</CardTitle>
            <CardDescription className="text-muted-foreground">過去6個月的流量處理情況</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trafficData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      borderColor: "hsl(var(--border))",
                      color: "hsl(var(--foreground))",
                    }}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="緩存流量" stackId="1" stroke="#0D99FF" fill="#0D99FF" />
                  <Area type="monotone" dataKey="源站流量" stackId="1" stroke="#ef4444" fill="#ef4444" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 shadow-lg bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">地區流量分佈</CardTitle>
            <CardDescription className="text-muted-foreground">全球用戶訪問地區分佈</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={regionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {regionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      borderColor: "hsl(var(--border))",
                      color: "hsl(var(--foreground))",
                    }}
                  />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 shadow-lg bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">響應時間優化</CardTitle>
            <CardDescription className="text-muted-foreground">CDN節點響應時間改善趨勢</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={responseTimeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      borderColor: "hsl(var(--border))",
                      color: "hsl(var(--foreground))",
                    }}
                  />
                  <Bar dataKey="響應時間" fill="#0D99FF" />
                </BarChart>
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

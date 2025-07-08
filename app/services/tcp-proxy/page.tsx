"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, CheckCircle, TrendingUp, Eye, Server, Globe } from "lucide-react"
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

export default function TCPProxyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
          TCP/UDP流量<span style={{ color: "#0D99FF" }}>代理防禦</span>
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg font-normal max-w-2xl mx-auto">
          為 TCP 和 UDP 應用程式提供非計量 DDoS 防護和流量加速
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-400 font-normal max-w-3xl mx-auto">
          Spectrum 基於覆蓋全球 330
          個位置的網路而構建，可保護您的應用程式免遭複雜的大規模攻擊，同時提供快速、一致且「即時」的終端使用者體驗。
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
                icon={<Shield className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="非計量 DDoS 防護"
                description="提供無限制的 DDoS 防護，無論攻擊規模大小都能有效防禦"
              />
              <ServiceFeatureItem
                icon={<Zap className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="流量加速"
                description="通過智能路由和優化技術，顯著提升應用程式響應速度"
              />
              <ServiceFeatureItem
                icon={<Globe className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="全球網路覆蓋"
                description="基於覆蓋全球 330 個位置的強大網路基礎設施"
              />
              <ServiceFeatureItem
                icon={<Server className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="TCP/UDP 支援"
                description="同時支援 TCP 和 UDP 協議，適用於各種應用程式類型"
              />
              <ServiceFeatureItem
                icon={<Eye className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="即時監控"
                description="24/7 監控流量狀況，即時檢測和防禦攻擊威脅"
              />
              <ServiceFeatureItem
                icon={<TrendingUp className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="智能優化"
                description="自動優化流量路由，確保最佳的終端使用者體驗"
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
        <TCPProxyAnalytics />
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-card rounded-lg shadow-lg border-border">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">
            TCP/UDP流量代理<span style={{ color: "#0D99FF" }}>方案</span>
          </h2>

          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-medium text-foreground">TCP/UDP流量代理防禦方案</CardTitle>
                <CardDescription className="font-normal text-muted-foreground">
                  全面的流量代理和DDoS防護解決方案
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
                    <span className="text-muted-foreground font-normal">非計量 DDoS 防護</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">TCP/UDP 協議支援</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">全球 330 個位置覆蓋</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">智能流量加速</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">24/7 即時監控</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">自動路由優化</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">專業技術支持</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-muted-foreground font-normal">詳細性能報告</span>
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
              我們的專家團隊將協助您評估應用程式需求，制定最適合的流量代理防護策略
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

function TCPProxyAnalytics() {
  // 模擬數據
  const trafficData = [
    { name: "1月", TCP流量: 1200, UDP流量: 800, 攻擊阻擋: 45 },
    { name: "2月", TCP流量: 1350, UDP流量: 920, 攻擊阻擋: 38 },
    { name: "3月", TCP流量: 1480, UDP流量: 1050, 攻擊阻擋: 52 },
    { name: "4月", TCP流量: 1620, UDP流量: 1180, 攻擊阻擋: 29 },
    { name: "5月", TCP流量: 1800, UDP流量: 1300, 攻擊阻擋: 35 },
    { name: "6月", TCP流量: 2000, UDP流量: 1450, 攻擊阻擋: 22 },
  ]

  const performanceData = [
    { name: "1月", 延遲: 85, 可用性: 99.2 },
    { name: "2月", 延遲: 78, 可用性: 99.5 },
    { name: "3月", 延遲: 72, 可用性: 99.7 },
    { name: "4月", 延遲: 68, 可用性: 99.8 },
    { name: "5月", 延遲: 62, 可用性: 99.9 },
    { name: "6月", 延遲: 58, 可用性: 99.95 },
  ]

  const protocolData = [
    { name: "TCP", value: 65, color: "#0D99FF" },
    { name: "UDP", value: 35, color: "#5591BD" },
  ]

  const attackTypeData = [
    { name: "1月", DDoS攻擊: 25, 連接洪水: 15, 協議攻擊: 8, 其他: 5 },
    { name: "2月", DDoS攻擊: 22, 連接洪水: 12, 協議攻擊: 6, 其他: 4 },
    { name: "3月", DDoS攻擊: 28, 連接洪水: 18, 協議攻擊: 10, 其他: 6 },
    { name: "4月", DDoS攻擊: 18, 連接洪水: 8, 協議攻擊: 5, 其他: 3 },
    { name: "5月", DDoS攻擊: 20, 連接洪水: 10, 協議攻擊: 7, 其他: 3 },
    { name: "6月", DDoS攻擊: 15, 連接洪水: 6, 協議攻擊: 4, 其他: 2 },
  ]

  return (
    <div className="space-y-8">
      {/* 統計卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="平均延遲"
          value="58ms"
          description="全球平均響應時間"
          trend="-6.5%"
          trendType="positive"
          icon={<Zap className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="服務可用性"
          value="99.95%"
          description="本月服務可用率"
          trend="+0.05%"
          trendType="positive"
          icon={<Shield className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="攻擊阻擋"
          value="22"
          description="本月阻擋攻擊次數"
          trend="-37.1%"
          trendType="positive"
          icon={<Eye className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="流量處理"
          value="3.45TB"
          description="本月總流量處理"
          trend="+15.2%"
          trendType="positive"
          icon={<Server className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
      </div>

      {/* 圖表區域 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">流量處理統計</CardTitle>
            <CardDescription className="text-muted-foreground">過去6個月的TCP/UDP流量和攻擊阻擋</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={trafficData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#ffffff" }} />
                  <Legend />
                  <Bar dataKey="TCP流量" fill="#0D99FF" />
                  <Bar dataKey="UDP流量" fill="#5591BD" />
                  <Bar dataKey="攻擊阻擋" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">性能優化趨勢</CardTitle>
            <CardDescription className="text-muted-foreground">延遲時間和服務可用性改善</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#ffffff" }} />
                  <Legend />
                  <Line type="monotone" dataKey="延遲" stroke="#ef4444" strokeWidth={2} />
                  <Line type="monotone" dataKey="可用性" stroke="#22b866" strokeWidth={2} />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 shadow-lg bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">協議分佈</CardTitle>
            <CardDescription className="text-muted-foreground">TCP vs UDP 流量比例</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={protocolData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {protocolData.map((entry, index) => (
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
            <CardTitle className="text-xl text-foreground">攻擊類型分析</CardTitle>
            <CardDescription className="text-muted-foreground">過去6個月的攻擊類型統計</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={attackTypeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#ffffff" }} />
                  <Legend />
                  <Area type="monotone" dataKey="DDoS攻擊" stackId="1" stroke="#ef4444" fill="#ef4444" />
                  <Area type="monotone" dataKey="連接洪水" stackId="1" stroke="#f97316" fill="#f97316" />
                  <Area type="monotone" dataKey="協議攻擊" stackId="1" stroke="#eab308" fill="#eab308" />
                  <Area type="monotone" dataKey="其他" stackId="1" stroke="#a3a3a3" fill="#a3a3a3" />
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

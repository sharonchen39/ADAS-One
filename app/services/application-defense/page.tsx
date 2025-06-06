"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CheckCircle, TrendingUp, Eye, Server, Zap, Globe } from "lucide-react"
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

export default function ApplicationDefensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl text-white">
          應用層<span style={{ color: "#0D99FF" }}>防禦</span>
        </h1>
        <p className="mt-4 text-gray-300 text-lg font-normal max-w-2xl mx-auto">
          防範任何規模或類型的 DDoS 攻擊，確保您的服務持續可用
        </p>
        <p className="mt-2 text-gray-400 font-normal max-w-3xl mx-auto">
          DDoS 攻擊可能會減緩或關閉服務，但我們會阻止所有攻擊。憑藉 388 Tbps
          的網路容量，成功緩解了一些有記錄以來最大規模的 DDoS 攻擊，且並未降低客戶的效能。
        </p>
      </div>

      {/* Service Features List */}
      <section className="py-12 bg-gray-900 rounded-lg shadow-lg border border-gray-800 mb-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            服務<span style={{ color: "#0D99FF" }}>特色</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-6">
              <ServiceFeatureItem
                icon={<Shield className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="全方位DDoS防護"
                description="防範L7層的各種DDoS攻擊，包括容量攻擊、協議攻擊和應用層攻擊"
              />
              <ServiceFeatureItem
                icon={<Globe className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="388 Tbps網路容量"
                description="擁有業界領先的網路容量，能夠應對任何規模的DDoS攻擊"
              />
              <ServiceFeatureItem
                icon={<Zap className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="零延遲防護"
                description="即時檢測和緩解攻擊，確保正常流量不受影響，維持最佳性能"
              />
              <ServiceFeatureItem
                icon={<Eye className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="智能威脅檢測"
                description="使用機器學習和AI技術，自動識別新型攻擊模式"
              />
              <ServiceFeatureItem
                icon={<Server className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="全球分散式防護"
                description="利用全球分佈的防護節點，就近攔截攻擊流量"
              />
              <ServiceFeatureItem
                icon={<TrendingUp className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="自適應防護"
                description="根據攻擊強度和類型自動調整防護策略，確保最佳防護效果"
              />
            </ul>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-white">
          防護<span style={{ color: "#0D99FF" }}>分析</span>
        </h2>
        <ApplicationDefenseAnalytics />
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-gray-900 rounded-lg shadow-lg border border-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            應用層防禦<span style={{ color: "#0D99FF" }}>方案</span>
          </h2>

          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-gray-800 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-medium text-white">應用層防禦方案</CardTitle>
                <CardDescription className="font-normal text-gray-300">
                  全面的應用層DDoS攻擊防護解決方案
                </CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-medium text-white">$2萬</span>
                  <span className="text-gray-300 font-normal text-lg">/月起</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">全方位DDoS防護</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">388 Tbps網路容量</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">零延遲防護技術</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">智能威脅檢測</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">全球分散式防護</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">自適應防護策略</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">24/7專業技術支持</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">詳細攻擊分析報告</span>
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
            <h3 className="text-2xl font-medium text-white mb-4">需要客製化方案？</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 font-normal">
              我們的專家團隊將協助您評估應用程式架構，制定最適合的DDoS防護策略
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
  )
}

function ServiceFeatureItem({ icon, title, description }:{ icon: React.ReactNode, title: string, description: string }) {
  return (
    <li className="flex items-start space-x-4 p-4 rounded-lg bg-gray-800 border border-gray-700">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
        <p className="text-gray-300 font-normal">{description}</p>
      </div>
    </li>
  )
}

function ApplicationDefenseAnalytics() {
  // 模擬數據
  const attackVolumeData = [
    { name: "1月", 攻擊次數: 45, 攻擊強度: 125, 阻擋成功: 44 },
    { name: "2月", 攻擊次數: 38, 攻擊強度: 98, 阻擋成功: 37 },
    { name: "3月", 攻擊次數: 62, 攻擊強度: 185, 阻擋成功: 61 },
    { name: "4月", 攻擊次數: 29, 攻擊強度: 78, 阻擋成功: 29 },
    { name: "5月", 攻擊次數: 35, 攻擊強度: 92, 阻擋成功: 35 },
    { name: "6月", 攻擊次數: 22, 攻擊強度: 65, 阻擋成功: 22 },
  ]

  const performanceData = [
    { name: "1月", 可用性: 99.2, 響應時間: 145 },
    { name: "2月", 可用性: 99.5, 響應時間: 138 },
    { name: "3月", 可用性: 99.7, 響應時間: 125 },
    { name: "4月", 可用性: 99.8, 響應時間: 118 },
    { name: "5月", 可用性: 99.9, 響應時間: 112 },
    { name: "6月", 可用性: 99.95, 響應時間: 105 },
  ]

  const attackTypeData = [
    { name: "容量攻擊", value: 40, color: "#ef4444" },
    { name: "協議攻擊", value: 30, color: "#f97316" },
    { name: "應用層攻擊", value: 25, color: "#eab308" },
    { name: "混合攻擊", value: 5, color: "#dc2626" },
  ]

  const mitigationTimeData = [
    { name: "1月", 檢測時間: 8, 緩解時間: 25 },
    { name: "2月", 檢測時間: 6, 緩解時間: 20 },
    { name: "3月", 檢測時間: 5, 緩解時間: 18 },
    { name: "4月", 檢測時間: 4, 緩解時間: 15 },
    { name: "5月", 檢測時間: 3, 緩解時間: 12 },
    { name: "6月", 檢測時間: 2, 緩解時間: 8 },
  ]

  return (
    <div className="space-y-8">
      {/* 統計卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="防護成功率"
          value="100%"
          description="本月攻擊阻擋成功率"
          trend="0%"
          trendType="positive"
          icon={<Shield className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="服務可用性"
          value="99.95%"
          description="本月服務可用率"
          trend="+0.05%"
          trendType="positive"
          icon={<Server className="h-8 w-8" style={{ color: "#0D99FF" }} />}
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
          title="緩解時間"
          value="8s"
          description="平均攻擊緩解時間"
          trend="-33.3%"
          trendType="positive"
          icon={<Zap className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
      </div>

      {/* 圖表區域 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl text-white">攻擊量統計</CardTitle>
            <CardDescription className="text-gray-300">過去6個月的攻擊次數、強度和阻擋情況</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attackVolumeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#ffffff" }} />
                  <Legend />
                  <Bar dataKey="攻擊次數" fill="#ef4444" />
                  <Bar dataKey="阻擋成功" fill="#22b866" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl text-white">服務性能趨勢</CardTitle>
            <CardDescription className="text-gray-300">服務可用性和響應時間改善情況</CardDescription>
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
                  <Line type="monotone" dataKey="可用性" stroke="#22b866" strokeWidth={2} />
                  <Line type="monotone" dataKey="響應時間" stroke="#0D99FF" strokeWidth={2} />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 shadow-lg bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl text-white">攻擊類型分佈</CardTitle>
            <CardDescription className="text-gray-300">檢測到的DDoS攻擊類型比例</CardDescription>
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

        <Card className="lg:col-span-2 shadow-lg bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl text-white">緩解時間優化</CardTitle>
            <CardDescription className="text-gray-300">攻擊檢測和緩解時間改善趨勢</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mitigationTimeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#ffffff" }} />
                  <Legend />
                  <Area type="monotone" dataKey="檢測時間" stackId="1" stroke="#0D99FF" fill="#0D99FF" />
                  <Area type="monotone" dataKey="緩解時間" stackId="1" stroke="#5591BD" fill="#5591BD" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function StatCard({ title, value, description, trend, trendType, icon }:{ title: string, value: string, description: string, trend: string, trendType: string, icon: React.ReactNode }) {
  return (
    <Card className="shadow-lg bg-gray-800 border-gray-700">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-300">{title}</p>
            <p className="text-3xl font-bold text-white mt-2">{value}</p>
            <p className="text-sm text-gray-400 mt-1">{description}</p>
          </div>
          <div className="bg-gray-700 p-3 rounded-full">{icon}</div>
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

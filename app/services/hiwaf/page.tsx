"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CheckCircle, TrendingUp, Eye, Server, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
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

export default function HiWAFPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl text-white">
          HiWAF<span style={{ color: "#0D99FF" }}>防禦</span>
        </h1>
        <p className="mt-4 text-gray-300 text-lg font-normal max-w-2xl mx-auto">中華電信HiNet WAF網站應用防火牆服務</p>
        <p className="mt-4 text-gray-400 font-normal max-w-4xl mx-auto leading-relaxed">
          透過電信等級的網站防護設備專責分析網站訊務內容(HTTP及HTTPS)，搭配中華電信資安顧問專業調校，可有效阻擋來自Internet的網站入侵攻擊，提供客戶網站安全解決方案，維持企業網站正常運作。
        </p>
      </div>

      {/* Architecture Diagram */}
      <section className="mb-16">
        <div className="flex justify-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl w-full">
            <Image
              src="/hinet-waf-architecture.jpg"
              alt="HiNet WAF服務架構圖"
              width={800}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Service Features List */}
      <section className="py-12 bg-gray-900 rounded-lg shadow-lg border border-gray-800 mb-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            服務<span style={{ color: "#0D99FF" }}>特色</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-6">
              <ServiceFeatureItem
                icon={<Award className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="行政院資安評鑑國內最頂尖SOC資安攻防專業團隊提供服務"
                description="由通過行政院資安評鑑認證的專業團隊提供服務，確保最高水準的資安防護能力"
              />
              <ServiceFeatureItem
                icon={<TrendingUp className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="隨電信費用每月出帳，租比買更經濟"
                description="採用租賃模式，無需大筆初期投資，費用隨電信帳單一併收取，財務負擔更輕鬆"
              />
              <ServiceFeatureItem
                icon={<Server className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="依實際使用量隨時加購，無須投入鉅額建置成本"
                description="彈性擴展服務規模，根據實際需求調整防護容量，避免過度投資"
              />
              <ServiceFeatureItem
                icon={<Eye className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="提供中文化線上報表，簡單易懂"
                description="完整的中文化管理介面和報表系統，讓您輕鬆掌握網站安全狀況"
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
        <HiWAFAnalytics />
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-gray-900 rounded-lg shadow-lg border border-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            HiWAF防禦<span style={{ color: "#0D99FF" }}>方案</span>
          </h2>

          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-gray-800 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-medium text-white">HiWAF防禦方案</CardTitle>
                <CardDescription className="font-normal text-gray-300">
                  中華電信專業級網站應用防火牆服務
                </CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-medium text-white">$3.5萬</span>
                  <span className="text-gray-300 font-normal text-lg">/月起</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">電信等級網站防護設備</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">HTTP/HTTPS訊務內容分析</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">資安顧問專業調校</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">阻擋Internet網站入侵攻擊</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">SOC資安攻防專業團隊</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">隨電信費用月結計費</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">彈性擴展服務容量</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">中文化線上報表系統</span>
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
              我們的專家團隊將協助您評估網站安全需求，制定最適合的WAF防護策略
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

function ServiceFeatureItem({ icon, title, description }) {
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

function HiWAFAnalytics() {
  // 模擬數據
  const attackBlockData = [
    { name: "1月", SQL注入: 145, XSS攻擊: 89, CSRF: 56, 其他: 34 },
    { name: "2月", SQL注入: 132, XSS攻擊: 76, CSRF: 48, 其他: 29 },
    { name: "3月", SQL注入: 168, XSS攻擊: 95, CSRF: 62, 其他: 41 },
    { name: "4月", SQL注入: 124, XSS攻擊: 71, CSRF: 45, 其他: 28 },
    { name: "5月", SQL注入: 108, XSS攻擊: 63, CSRF: 39, 其他: 24 },
    { name: "6月", SQL注入: 95, XSS攻擊: 55, CSRF: 33, 其他: 19 },
  ]

  const performanceData = [
    { name: "1月", 響應時間: 12, 阻擋率: 96.8 },
    { name: "2月", 響應時間: 11, 阻擋率: 97.2 },
    { name: "3月", 響應時間: 10, 阻擋率: 97.8 },
    { name: "4月", 響應時間: 9, 阻擋率: 98.1 },
    { name: "5月", 響應時間: 8, 阻擋率: 98.5 },
    { name: "6月", 響應時間: 7, 阻擋率: 98.9 },
  ]

  const threatTypeData = [
    { name: "SQL注入", value: 40, color: "#ef4444" },
    { name: "XSS攻擊", value: 30, color: "#f97316" },
    { name: "CSRF", value: 20, color: "#eab308" },
    { name: "其他攻擊", value: 10, color: "#a3a3a3" },
  ]

  const trafficData = [
    { name: "1月", 正常流量: 8500, 惡意流量: 324 },
    { name: "2月", 正常流量: 9200, 惡意流量: 285 },
    { name: "3月", 正常流量: 10500, 惡意流量: 366 },
    { name: "4月", 正常流量: 11800, 惡意流量: 268 },
    { name: "5月", 正常流量: 12500, 惡意流量: 234 },
    { name: "6月", 正常流量: 13200, 惡意流量: 202 },
  ]

  return (
    <div className="space-y-8">
      {/* 統計卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="攻擊阻擋率"
          value="98.9%"
          description="本月攻擊阻擋成功率"
          trend="+0.4%"
          trendType="positive"
          icon={<Shield className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="響應時間"
          value="7ms"
          description="平均檢測響應時間"
          trend="-12.5%"
          trendType="positive"
          icon={<TrendingUp className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="攻擊次數"
          value="202"
          description="本月檢測攻擊次數"
          trend="-13.7%"
          trendType="positive"
          icon={<Eye className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="保護網站"
          value="13,200"
          description="本月保護正常訪問"
          trend="+5.6%"
          trendType="positive"
          icon={<Server className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
      </div>

      {/* 圖表區域 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl text-white">攻擊類型阻擋統計</CardTitle>
            <CardDescription className="text-gray-300">過去6個月的攻擊類型和阻擋數量</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attackBlockData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#ffffff" }} />
                  <Legend />
                  <Bar dataKey="SQL注入" stackId="a" fill="#ef4444" />
                  <Bar dataKey="XSS攻擊" stackId="a" fill="#f97316" />
                  <Bar dataKey="CSRF" stackId="a" fill="#eab308" />
                  <Bar dataKey="其他" stackId="a" fill="#a3a3a3" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl text-white">性能優化趨勢</CardTitle>
            <CardDescription className="text-gray-300">響應時間和阻擋率改善情況</CardDescription>
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
                  <Line type="monotone" dataKey="響應時間" stroke="#ef4444" strokeWidth={2} />
                  <Line type="monotone" dataKey="阻擋率" stroke="#22b866" strokeWidth={2} />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 shadow-lg bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl text-white">威脅類型分佈</CardTitle>
            <CardDescription className="text-gray-300">檢測到的攻擊類型比例</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={threatTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {threatTypeData.map((entry, index) => (
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
            <CardTitle className="text-xl text-white">流量處理統計</CardTitle>
            <CardDescription className="text-gray-300">正常流量與惡意流量處理情況</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trafficData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#ffffff" }} />
                  <Legend />
                  <Area type="monotone" dataKey="正常流量" stackId="1" stroke="#22b866" fill="#22b866" />
                  <Area type="monotone" dataKey="惡意流量" stackId="1" stroke="#ef4444" fill="#ef4444" />
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

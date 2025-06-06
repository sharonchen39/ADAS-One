"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Users, CheckCircle, AlertTriangle, TrendingUp, Eye } from "lucide-react"
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

export default function ZeroTrustPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl text-white">
          零信任<span style={{ color: "#0D99FF" }}>安全架構</span>
        </h1>
        <p className="mt-4 text-gray-300 text-lg font-normal max-w-2xl mx-auto">
          基於「永不信任，始終驗證」的原則，為您的企業網絡提供最高級別的安全保障
        </p>
        <div className="mt-6 max-w-4xl mx-auto">
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">1.</span>
              <span className="font-normal">
                對存取您所有應用程式的使用者強制執行預設拒絕（Zero Trust 規則），比 VPN 更快速且更安全。
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">2.</span>
              <span className="font-normal">
                保護並檢查企業網際網路流量，協助防止網路釣魚、勒索軟體和其他網際網路風險。
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">3.</span>
              <span className="font-normal">
                檢查 HTTP/S 流量中是否存在敏感性資料（如 PII），並使用允許或封鎖原則防止外流。
              </span>
            </li>
          </ul>
        </div>
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
                icon={<Users className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="身份驗證"
                description="多因素身份驗證，確保每個用戶身份的真實性"
              />
              <ServiceFeatureItem
                icon={<Shield className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="設備信任"
                description="持續監控設備狀態，只允許受信任的設備訪問"
              />
              <ServiceFeatureItem
                icon={<Eye className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="行為分析"
                description="AI驅動的用戶行為分析，識別異常活動"
              />
              <ServiceFeatureItem
                icon={<Lock className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="最小權限"
                description="基於角色的訪問控制，確保最小權限原則"
              />
              <ServiceFeatureItem
                icon={<TrendingUp className="h-8 w-8" style={{ color: "#0D99FF" }} />}
                title="持續監控"
                description="24/7實時監控，即時檢測和響應安全威脅"
              />
            </ul>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-white">
          安全<span style={{ color: "#0D99FF" }}>分析</span>
        </h2>
        <ZeroTrustAnalytics />
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-gray-900 rounded-lg shadow-lg border border-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            零信任<span style={{ color: "#0D99FF" }}>方案</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 基礎版方案 */}
            <Card className="bg-gray-800 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-medium text-white">基礎版 - Access</CardTitle>
                <CardDescription className="font-normal text-gray-300">單套授權 50 users</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-medium text-white">$3萬</span>
                  <span className="text-gray-300 font-normal text-lg">/月起</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">50個用戶授權</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">Zero Trust 存取控制</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">多因素身份驗證</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">應用程式存取管理</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">基礎技術支持</span>
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
            <Card className="bg-gray-800 border-gray-700 shadow-lg ring-2 ring-blue-600">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-medium text-white">進階版 - Gateway & DLP</CardTitle>
                    <CardDescription className="font-normal text-gray-300">單套授權 50 users</CardDescription>
                  </div>
                  <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">推薦</div>
                </div>
                <div className="mt-6">
                  <span className="text-4xl font-medium text-white">$5萬</span>
                  <span className="text-gray-300 font-normal text-lg">/月起</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">包含基礎版所有功能</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">Gateway 網路安全</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">Data Loss Protection (DLP)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">網路釣魚防護</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">勒索軟體防護</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">敏感資料檢測</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: "#0D99FF" }} />
                    <span className="text-gray-300 font-normal">24/7專屬技術支持</span>
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
            <h3 className="text-2xl font-medium text-white mb-4">需要客製化方案？</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 font-normal">
              我們的專家團隊將協助您評估現有架構，制定最適合的零信任實施計劃
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

function ZeroTrustAnalytics() {
  // 模擬數據
  const securityScoreData = [
    { name: "1月", 分數: 72, 威脅阻擋: 45 },
    { name: "2月", 分數: 78, 威脅阻擋: 52 },
    { name: "3月", 分數: 85, 威脅阻擋: 38 },
    { name: "4月", 分數: 91, 威脅阻擋: 29 },
    { name: "5月", 分數: 95, 威脅阻擋: 18 },
    { name: "6月", 分數: 97, 威脅阻擋: 12 },
  ]

  const accessControlData = [
    { name: "1月", 允許: 8500, 拒絕: 1200, 可疑: 300 },
    { name: "2月", 允許: 9200, 拒絕: 980, 可疑: 250 },
    { name: "3月", 允許: 10500, 拒絕: 850, 可疑: 180 },
    { name: "4月", 允許: 11800, 拒絕: 720, 可疑: 150 },
    { name: "5月", 允許: 12500, 拒絕: 580, 可疑: 120 },
    { name: "6月", 允許: 13200, 拒絕: 450, 可疑: 90 },
  ]

  const deviceTrustData = [
    { name: "受信任", value: 78, color: "#22b866" },
    { name: "待驗證", value: 15, color: "#f97316" },
    { name: "不受信任", value: 7, color: "#ef4444" },
  ]

  const threatDetectionData = [
    { name: "1月", 惡意軟體: 25, 異常行為: 18, 未授權訪問: 12, 數據洩露: 5 },
    { name: "2月", 惡意軟體: 22, 異常行為: 15, 未授權訪問: 10, 數據洩露: 3 },
    { name: "3月", 惡意軟體: 18, 異常行為: 12, 未授權訪問: 8, 數據洩露: 2 },
    { name: "4月", 惡意軟體: 15, 異常行為: 10, 未授權訪問: 6, 數據洩露: 1 },
    { name: "5月", 惡意軟體: 12, 異常行為: 8, 未授權訪問: 4, 數據洩露: 1 },
    { name: "6月", 惡意軟體: 8, 異常行為: 5, 未授權訪問: 2, 數據洩露: 0 },
  ]

  return (
    <div className="space-y-8">
      {/* 統計卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="安全評分"
          value="97/100"
          description="本月提升 +6 分"
          trend="+6.6%"
          trendType="positive"
          icon={<Shield className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="受保護用戶"
          value="1,284"
          description="活躍用戶數"
          trend="+12.5%"
          trendType="positive"
          icon={<Users className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="威脅阻擋"
          value="12"
          description="本月阻擋威脅"
          trend="-33.3%"
          trendType="positive"
          icon={<AlertTriangle className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
        <StatCard
          title="設備信任度"
          value="78%"
          description="受信任設備比例"
          trend="+5.4%"
          trendType="positive"
          icon={<CheckCircle className="h-8 w-8" style={{ color: "#0D99FF" }} />}
        />
      </div>

      {/* 圖表區域 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl text-white">安全評分趨勢</CardTitle>
            <CardDescription className="text-gray-300">過去6個月的安全評分與威脅阻擋數量</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={securityScoreData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#ffffff" }} />
                  <Legend />
                  <Line type="monotone" dataKey="分數" stroke="#0D99FF" strokeWidth={3} />
                  <Line type="monotone" dataKey="威脅阻擋" stroke="#ef4444" strokeWidth={2} />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl text-white">訪問控制統計</CardTitle>
            <CardDescription className="text-gray-300">過去6個月的訪問請求處理情況</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={accessControlData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#ffffff" }} />
                  <Legend />
                  <Area type="monotone" dataKey="允許" stackId="1" stroke="#22b866" fill="#22b866" />
                  <Area type="monotone" dataKey="拒絕" stackId="1" stroke="#ef4444" fill="#ef4444" />
                  <Area type="monotone" dataKey="可疑" stackId="1" stroke="#f97316" fill="#f97316" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 shadow-lg bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl text-white">設備信任狀態</CardTitle>
            <CardDescription className="text-gray-300">當前設備信任度分佈</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={deviceTrustData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {deviceTrustData.map((entry, index) => (
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
            <CardTitle className="text-xl text-white">威脅檢測趨勢</CardTitle>
            <CardDescription className="text-gray-300">過去6個月的威脅類型檢測數量</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={threatDetectionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#ffffff" }} />
                  <Legend />
                  <Bar dataKey="惡意軟體" stackId="a" fill="#ef4444" />
                  <Bar dataKey="異常行為" stackId="a" fill="#f97316" />
                  <Bar dataKey="未授權訪問" stackId="a" fill="#eab308" />
                  <Bar dataKey="數據洩露" stackId="a" fill="#dc2626" />
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

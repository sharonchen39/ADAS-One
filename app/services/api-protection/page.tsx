"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Shield, Search, DollarSign, Activity, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function ApiProtectionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <Users className="h-16 w-16" style={{ color: "#0D99FF" }} />
        </div>
        <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl text-foreground mb-4">
          API <span style={{ color: "#0D99FF" }}>防護</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-normal">
          全球整合式 API 保護和監控，可自動探索、驗證和保護您的 API 端點。
        </p>
      </div>

      {/* Service Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="border-border bg-card shadow-lg">
          <CardHeader className="text-center">
            <Search className="h-12 w-12 mx-auto mb-4" style={{ color: "#0D99FF" }} />
            <CardTitle className="text-xl text-foreground">自動探索 API 端點</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground font-normal text-center">
              利用機器學習模型和啟發學習法，自動探索公用 API 端點及其結構描述。
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-border bg-card shadow-lg">
          <CardHeader className="text-center">
            <Shield className="h-12 w-12 mx-auto mb-4" style={{ color: "#0D99FF" }} />
            <CardTitle className="text-xl text-foreground">封鎖 OWASP 十大 API 安全風險</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground font-normal text-center">
              阻止常見的 API 攻擊，包括零時差漏洞利用、驗證濫用、資料遺失、DDoS 以及其他商務邏輯攻擊。
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-border bg-card shadow-lg">
          <CardHeader className="text-center">
            <DollarSign className="h-12 w-12 mx-auto mb-4" style={{ color: "#0D99FF" }} />
            <CardTitle className="text-xl text-foreground">降低成本</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground font-normal text-center">
              透過僅服務於乾淨的 API 流量來降低成本。對結構描述、驗證及合法的 API 商務邏輯驗證傳入要求，並降低 API
              託管成本。
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Protection Analysis */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
          API 防護<span style={{ color: "#0D99FF" }}>分析</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-border bg-card shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">API 端點總數</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">2,847</div>
              <p className="text-xs text-muted-foreground">+12% 較上月</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">攔截攻擊次數</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">15,234</div>
              <p className="text-xs text-muted-foreground">+8% 較上月</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">API 請求量</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">1.2M</div>
              <p className="text-xs text-muted-foreground">+25% 較上月</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">防護成功率</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">99.8%</div>
              <p className="text-xs text-muted-foreground">+0.2% 較上月</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* API Traffic Chart */}
      <div className="mb-16">
        <Card className="border-border bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">API 流量趨勢</CardTitle>
            <CardDescription className="text-muted-foreground">過去 30 天的 API 請求和攻擊趨勢</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 p-4">
              <div className="w-full h-full flex flex-col">
                {/* Y軸標籤 */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <span className="text-sm text-muted-foreground">正常流量</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span className="text-sm text-muted-foreground">攻擊流量</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">請求數 (千)</div>
                </div>

                {/* 圖表區域 */}
                <div className="flex-1 relative">
                  {/* Y軸刻度 */}
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-muted-foreground pr-2">
                    <span>100</span>
                    <span>80</span>
                    <span>60</span>
                    <span>40</span>
                    <span>20</span>
                    <span>0</span>
                  </div>

                  {/* 圖表主體 */}
                  <div className="ml-8 h-full flex items-end justify-between gap-1">
                    {[
                      { normal: 65, attack: 8 },
                      { normal: 45, attack: 12 },
                      { normal: 78, attack: 6 },
                      { normal: 52, attack: 15 },
                      { normal: 89, attack: 4 },
                      { normal: 67, attack: 9 },
                      { normal: 43, attack: 18 },
                      { normal: 76, attack: 7 },
                      { normal: 58, attack: 11 },
                      { normal: 82, attack: 5 },
                      { normal: 71, attack: 13 },
                      { normal: 94, attack: 3 },
                      { normal: 63, attack: 10 },
                      { normal: 48, attack: 16 },
                      { normal: 85, attack: 6 },
                      { normal: 72, attack: 8 },
                      { normal: 56, attack: 14 },
                      { normal: 91, attack: 4 },
                      { normal: 68, attack: 9 },
                      { normal: 74, attack: 7 },
                    ].map((data, index) => (
                      <div key={index} className="flex flex-col items-center gap-1 flex-1">
                        <div className="w-full flex flex-col items-center">
                          {/* 正常流量柱 */}
                          <div
                            className="w-4 bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-400"
                            style={{ height: `${(data.normal / 100) * 200}px` }}
                            title={`正常流量: ${data.normal}k`}
                          />
                          {/* 攻擊流量柱 */}
                          <div
                            className="w-4 bg-red-500 rounded-b transition-all duration-300 hover:bg-red-400"
                            style={{ height: `${(data.attack / 20) * 40}px` }}
                            title={`攻擊流量: ${data.attack}k`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* X軸標籤 */}
                <div className="ml-8 mt-2 flex justify-between text-xs text-muted-foreground">
                  <span>1日前</span>
                  <span>15日前</span>
                  <span>30日前</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pricing Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-foreground mb-8">
          定價<span style={{ color: "#0D99FF" }}>方案</span>
        </h2>
        <Card className="border-border bg-card shadow-lg max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground">API 防護服務</CardTitle>
            <div className="flex items-baseline justify-center gap-2 mt-4">
              <span className="text-4xl font-bold" style={{ color: "#0D99FF" }}>
                $7萬
              </span>
              <span className="text-muted-foreground">/月起</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">計價單位：(應用程式數量/請求數）</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2 text-muted-foreground text-left">
              <li className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full" style={{ backgroundColor: "#0D99FF" }} />
                自動 API 端點探索
              </li>
              <li className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full" style={{ backgroundColor: "#0D99FF" }} />
                OWASP 十大防護
              </li>
              <li className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full" style={{ backgroundColor: "#0D99FF" }} />
                即時威脅監控
              </li>
              <li className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full" style={{ backgroundColor: "#0D99FF" }} />
                成本優化分析
              </li>
              <li className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full" style={{ backgroundColor: "#0D99FF" }} />
                24/7 技術支援
              </li>
            </ul>
            <Link href="/account/purchase">
              <Button
                className="w-full text-white font-normal mt-6"
                style={{ backgroundColor: "#0D99FF", borderColor: "#0D99FF" }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0A85E9")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0D99FF")}
              >
                立即購買
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

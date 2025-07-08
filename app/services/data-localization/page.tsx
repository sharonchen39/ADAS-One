"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Shield, MapPin, Settings, CheckCircle, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function DataLocalizationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold">
          資料<span style={{ color: "#0D99FF" }}>本地化套件</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-normal">
          區域服務，能選擇邊緣節點檢查和儲存數據的位置，並保持全球網路的安全和性能優勢
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/account/purchase">
            <Button
              size="lg"
              className="text-white font-normal"
              style={{ backgroundColor: "#0D99FF", borderColor: "#0D99FF" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0A85E9")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0D99FF")}
            >
              立即開始使用
            </Button>
          </Link>
          <Link href="/login">
            <Button
              variant="outline"
              size="lg"
              className="font-normal"
              style={{ borderColor: "#0D99FF", color: "#0D99FF" }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(13, 153, 255, 0.1)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent"
              }}
            >
              聯繫我們
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">
          服務<span style={{ color: "#0D99FF" }}>特色</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-border bg-card shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8" style={{ color: "#0D99FF" }} />
                <CardTitle className="text-xl text-foreground">法規合規性</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground font-normal">
                區域服務使您能夠通過選擇解密和服務 HTTPS
                流量的數據中心來符合政策限制與法規要求。確保您的數據處理符合當地法規和企業政策。
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <MapPin className="h-8 w-8" style={{ color: "#0D99FF" }} />
                <CardTitle className="text-xl text-foreground">靈活的地理控制</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground font-normal">
                使用情境示例：可設定排除港、澳地區的節點進行HTTPS加解密及內容回應。提供精確的地理位置控制，滿足特定的業務需求。
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">
          使用<span style={{ color: "#0D99FF" }}>情境</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="border-border bg-card shadow-lg">
            <CardHeader>
              <Settings className="h-12 w-12 mb-4" style={{ color: "#0D99FF" }} />
              <CardTitle className="text-foreground">政府機關</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground font-normal">
                確保敏感政府數據僅在指定的國內數據中心進行處理，符合國家安全和數據主權要求。
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-lg">
            <CardHeader>
              <Shield className="h-12 w-12 mb-4" style={{ color: "#0D99FF" }} />
              <CardTitle className="text-foreground">金融服務</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground font-normal">
                滿足金融監管要求，確保客戶財務數據在合規的地理區域內處理，避免跨境數據傳輸風險。
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-lg">
            <CardHeader>
              <Globe className="h-12 w-12 mb-4" style={{ color: "#0D99FF" }} />
              <CardTitle className="text-foreground">跨國企業</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground font-normal">
                根據不同地區的法規要求，靈活配置數據處理位置，同時保持全球業務的連續性和性能。
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">
          核心<span style={{ color: "#0D99FF" }}>優勢</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border bg-card shadow-lg text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-12 w-12" style={{ color: "#0D99FF" }} />
                </div>
                <CardTitle className="text-lg text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground font-normal">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Analytics Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">
          數據<span style={{ color: "#0D99FF" }}>分析</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-border bg-card shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">地理分佈</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">12個</div>
              <p className="text-xs text-muted-foreground font-normal">可選擇的數據中心</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">合規率</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">99.9%</div>
              <p className="text-xs text-muted-foreground font-normal">法規合規達成率</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">性能保持</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">95%</div>
              <p className="text-xs text-muted-foreground font-normal">原始性能保持率</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">配置靈活性</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">100%</div>
              <p className="text-xs text-muted-foreground font-normal">自定義配置支持</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">
          服務<span style={{ color: "#0D99FF" }}>方案</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <Card className="border-border bg-card shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Globe className="h-16 w-16" style={{ color: "#0D99FF" }} />
              </div>
              <CardTitle className="text-2xl text-foreground">資料本地化套件</CardTitle>
              <CardDescription className="text-muted-foreground font-normal">
                完整的地理數據控制解決方案
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <div className="text-4xl font-bold mb-2" style={{ color: "#0D99FF" }}>
                  $7萬
                </div>
                <div className="text-muted-foreground font-normal">每月起</div>
                <div className="text-sm text-muted-foreground font-normal mt-1">計價單位：(應用程式數量)</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5" style={{ color: "#0D99FF" }} />
                  <span className="text-muted-foreground font-normal">靈活的地理位置選擇</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5" style={{ color: "#0D99FF" }} />
                  <span className="text-muted-foreground font-normal">法規合規保證</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5" style={{ color: "#0D99FF" }} />
                  <span className="text-muted-foreground font-normal">24/7 技術支持</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5" style={{ color: "#0D99FF" }} />
                  <span className="text-muted-foreground font-normal">實時監控和報告</span>
                </div>
              </div>

              <Link href="/account/purchase">
                <Button
                  size="lg"
                  className="w-full text-white font-normal"
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
      </section>

      {/* CTA Section */}
      <section className="text-center bg-card rounded-lg p-12 border border-border">
        <h2 className="text-3xl font-semibold mb-4 text-foreground">準備開始使用資料本地化套件？</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto font-normal">
          立即聯繫我們的專業團隊，了解如何為您的業務配置最適合的資料本地化解決方案
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/account/purchase">
            <Button
              size="lg"
              className="text-white font-normal"
              style={{ backgroundColor: "#0D99FF", borderColor: "#0D99FF" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0A85E9")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0D99FF")}
            >
              開始使用
            </Button>
          </Link>
          <Link href="/login">
            <Button
              variant="outline"
              size="lg"
              className="font-normal"
              style={{ borderColor: "#0D99FF", color: "#0D99FF" }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(13, 153, 255, 0.1)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent"
              }}
            >
              聯繫專家
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

const benefits = [
  {
    title: "法規合規",
    description: "確保數據處理符合當地法規要求，避免合規風險",
  },
  {
    title: "性能優化",
    description: "在保持合規的同時，維持最佳的網路性能表現",
  },
  {
    title: "靈活配置",
    description: "根據業務需求靈活選擇數據處理的地理位置",
  },
  {
    title: "安全保障",
    description: "提供企業級的安全保護，確保數據傳輸安全",
  },
]

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Shield, CheckCircle, BarChart3, Timer } from "lucide-react"
import Link from "next/link"

export default function WaitingRoomPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <Clock className="h-16 w-16" style={{ color: "#0D99FF" }} />
        </div>
        <h1 className="text-4xl font-bold">
          Waiting room<span style={{ color: "#0D99FF" }}>等候室</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          管理高峰流量的虛擬等待室，確保您的網站在流量激增時保持穩定運行
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/account/purchase">
            <Button
              size="lg"
              className="text-white font-normal"
              style={{ backgroundColor: "#0D99FF", borderColor: "#0D99FF" }}
            >
              立即開始使用
            </Button>
          </Link>
          <Link href="/services">
            <Button
              size="lg"
              variant="outline"
              className="font-normal"
              style={{ borderColor: "#0D99FF", color: "#0D99FF" }}
            >
              查看其他服務
            </Button>
          </Link>
        </div>
      </section>

      {/* Service Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          服務<span style={{ color: "#0D99FF" }}>特色</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <Timer className="h-12 w-12 mb-4" style={{ color: "#0D99FF" }} />
              <CardTitle className="text-foreground">智能流量管理</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                自動檢測流量激增，智能分配用戶進入等候室，確保核心服務穩定運行，避免系統崩潰。
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <Users className="h-12 w-12 mb-4" style={{ color: "#0D99FF" }} />
              <CardTitle className="text-foreground">優質用戶體驗</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                提供友善的等候介面，顯示預估等待時間和排隊位置，讓用戶了解進度，減少流失率。
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <Shield className="h-12 w-12 mb-4" style={{ color: "#0D99FF" }} />
              <CardTitle className="text-foreground">彈性配置</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                支援自定義等候室樣式、觸發條件和排隊規則，可根據業務需求靈活調整配置參數。
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Statistics */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          等候室<span style={{ color: "#0D99FF" }}>分析</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">活躍等候室</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
                <Clock className="h-8 w-8" style={{ color: "#0D99FF" }} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">排隊用戶數</p>
                  <p className="text-2xl font-bold text-foreground">1,247</p>
                </div>
                <Users className="h-8 w-8" style={{ color: "#0D99FF" }} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">平均等待時間</p>
                  <p className="text-2xl font-bold text-foreground">3.2分</p>
                </div>
                <Timer className="h-8 w-8" style={{ color: "#0D99FF" }} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">成功進入率</p>
                  <p className="text-2xl font-bold text-foreground">94.8%</p>
                </div>
                <CheckCircle className="h-8 w-8" style={{ color: "#0D99FF" }} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Traffic Flow Chart */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <BarChart3 className="h-5 w-5" style={{ color: "#0D99FF" }} />
              流量管理趨勢
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-2 p-4">
              {/* 模擬量數據 */}
              {[
                { time: "00:00", normal: 45, waiting: 5 },
                { time: "04:00", normal: 30, waiting: 2 },
                { time: "08:00", normal: 80, waiting: 15 },
                { time: "12:00", normal: 95, waiting: 25 },
                { time: "16:00", normal: 85, waiting: 20 },
                { time: "20:00", normal: 70, waiting: 12 },
              ].map((data, index) => (
                <div key={index} className="flex flex-col items-center gap-2 flex-1">
                  <div className="flex flex-col items-center gap-1 h-48">
                    <div
                      className="w-8 bg-red-500 rounded-t"
                      style={{ height: `${data.waiting * 2}px` }}
                      title={`等候室用戶: ${data.waiting}%`}
                    />
                    <div
                      className="w-8 rounded-b"
                      style={{
                        height: `${data.normal * 2}px`,
                        backgroundColor: "#0D99FF",
                      }}
                      title={`正常流量: ${data.normal}%`}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{data.time}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: "#0D99FF" }}></div>
                <span className="text-sm text-muted-foreground">正常流量</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-sm text-muted-foreground">等候室流量</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Pricing */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          定價<span style={{ color: "#0D99FF" }}>方案</span>
        </h2>
        <div className="max-w-md mx-auto">
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">Waiting room等候室</CardTitle>
              <CardDescription className="text-muted-foreground">管理高峰流量的虛擬等待室</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <span className="text-4xl font-bold" style={{ color: "#0D99FF" }}>
                  $5萬
                </span>
                <span className="text-muted-foreground ml-2">/月起</span>
                <p className="text-sm text-muted-foreground mt-2">計價單位：(應用程式數量）</p>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-5 w-5 mr-3" style={{ color: "#0D99FF" }} />
                  智能流量管理
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-5 w-5 mr-3" style={{ color: "#0D99FF" }} />
                  自定義等候室樣式
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-5 w-5 mr-3" style={{ color: "#0D99FF" }} />
                  即時流量分析
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-5 w-5 mr-3" style={{ color: "#0D99FF" }} />
                  24/7 技術支援
                </li>
              </ul>
              <Link href="/account/purchase">
                <Button
                  className="w-full text-white font-normal"
                  style={{ backgroundColor: "#0D99FF", borderColor: "#0D99FF" }}
                >
                  立即購買
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

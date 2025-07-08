"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
            帳戶<span style={{ color: "#0D99FF" }}>資訊</span>
          </h1>
          <p className="text-muted-foreground mt-2 font-normal">管理您的帳戶設置和服務訂閱</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link href="/account/purchase">
            <Button
              className="text-white font-normal"
              style={{ backgroundColor: "#0D99FF", borderColor: "#0D99FF" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0A85E9")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0D99FF")}
            >
              購買服務方案
            </Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="subscription" className="w-full">
        <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-2 bg-muted border border-border">
          <TabsTrigger
            value="subscription"
            className="data-[state=active]:text-white font-normal"
            style={
              {
                "--tw-bg-opacity": "1",
                backgroundColor: "var(--state-active, transparent)",
                "--state-active": "var(--state, transparent)",
              } as React.CSSProperties
            }
            onMouseOver={(e) => {
              if ((e.target as HTMLElement).getAttribute("data-state") !== "active") {
                ;(e.target as HTMLElement).style.setProperty("--state", "rgba(13, 153, 255, 0.1)")
              }
            }}
            onMouseOut={(e) => {
              ;(e.target as HTMLElement).style.setProperty("--state", "transparent")
            }}
          >
            服務訂閱
          </TabsTrigger>
          <TabsTrigger
            value="permissions"
            className="data-[state=active]:text-white font-normal"
            style={
              {
                "--tw-bg-opacity": "1",
                backgroundColor: "var(--state-active, transparent)",
                "--state-active": "var(--state, transparent)",
              } as React.CSSProperties
            }
            onMouseOver={(e) => {
              if ((e.target as HTMLElement).getAttribute("data-state") !== "active") {
                ;(e.target as HTMLElement).style.setProperty("--state", "rgba(13, 153, 255, 0.1)")
              }
            }}
            onMouseOut={(e) => {
              ;(e.target as HTMLElement).style.setProperty("--state", "transparent")
            }}
          >
            授權期限
          </TabsTrigger>
        </TabsList>
        <TabsContent value="subscription" className="mt-6">
          <div className="grid gap-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-medium">當前訂閱</CardTitle>
                <CardDescription>查看您當前的服務訂閱狀態</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div className="flex items-center gap-4">
                      <ShieldCheck className="h-8 w-8" style={{ color: "#0D99FF" }} />
                      <div>
                        <p className="font-medium">基礎防護方案</p>
                        <p className="text-sm text-muted-foreground font-normal">包含應用層防禦和機器人防禦</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$99/月</p>
                      <p className="text-sm text-green-500">活躍</p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-muted p-4">
                    <div className="flex justify-between mb-2">
                      <p className="text-sm text-muted-foreground font-normal">下次續費日期</p>
                      <p className="text-sm font-normal">2025年6月15日</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm text-muted-foreground font-normal">付款方式</p>
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <p className="text-sm font-normal">**** **** **** 4242</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="outline"
                      className="border-border text-muted-foreground hover:bg-muted hover:text-foreground font-normal"
                    >
                      更改方案
                    </Button>
                    <Button
                      variant="outline"
                      className="border-border text-muted-foreground hover:bg-muted hover:text-foreground font-normal"
                    >
                      更新付款方式
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="permissions" className="mt-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-medium">授權期限</CardTitle>
              <CardDescription>管理您的服務授權和使用權限</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border border-border p-4 bg-muted">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-medium">應用層防禦</p>
                      <p className="text-sm text-muted-foreground font-normal">保護您的網站和應用程式免受常見攻擊</p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400 text-sm font-normal">
                      有效
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p className="text-muted-foreground font-normal">授權開始日期</p>
                    <p className="font-normal">2025年5月15日</p>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <p className="text-muted-foreground font-normal">授權結束日期</p>
                    <p className="font-normal">2026年5月15日</p>
                  </div>
                </div>

                <div className="rounded-lg border border-border p-4 bg-muted">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-medium">機器人防禦</p>
                      <p className="text-sm text-muted-foreground font-normal">識別並阻止惡意機器人流量</p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400 text-sm font-normal">
                      有效
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p className="text-muted-foreground font-normal">授權開始日期</p>
                    <p className="font-normal">2025年5月15日</p>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <p className="text-muted-foreground font-normal">授權結束日期</p>
                    <p className="font-normal">2026年5月15日</p>
                  </div>
                </div>

                <div className="rounded-lg border border-border p-4 bg-muted">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-medium">TCP流量代理防禦</p>
                      <p className="text-sm text-muted-foreground font-normal">提供TCP層面的保護</p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-400 text-sm font-normal">
                      未啟用
                    </div>
                  </div>
                  <div className="mt-2">
                    <Link href="/account/purchase">
                      <Button
                        variant="outline"
                        className="w-full font-normal"
                        style={{ borderColor: "#0D99FF", color: "#0D99FF" }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(13, 153, 255, 0.1)"
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent"
                        }}
                      >
                        購買此服務
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-medium text-center">登入</CardTitle>
          <CardDescription className="text-center">輸入您的帳號密碼以登入系統</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">電子郵件</Label>
            <Input id="email" placeholder="name@example.com" type="email" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">密碼</Label>
              <Link href="/forgot-password" className="text-sm text-primary hover:text-primary/80">
                忘記密碼?
              </Link>
            </div>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button
            className="w-full text-white font-normal"
            style={{ backgroundColor: "#0D99FF", borderColor: "#0D99FF" }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0A85E9")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0D99FF")}
          >
            登入
          </Button>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            還沒有帳號?{" "}
            <Link href="/register" className="text-primary hover:text-primary/80 font-normal">
              立即註冊
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export function LoginDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="text-white font-normal"
          style={{ backgroundColor: "#0D99FF", borderColor: "#0D99FF" }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0A85E9")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0D99FF")}
        >
          登入
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium text-center">登入</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            輸入您的帳號密碼以登入系統
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
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
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
            >
              記住我
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Button
            className="w-full text-white font-normal"
            style={{ backgroundColor: "#0D99FF", borderColor: "#0D99FF" }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0A85E9")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0D99FF")}
            onClick={() => setOpen(false)}
          >
            登入
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            還沒有帳號?{" "}
            <Link href="/register" className="text-primary hover:text-primary/80 font-normal">
              立即註冊
            </Link>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

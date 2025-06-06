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

interface LoginDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  redirectUrl?: string;
}


export function LoginDialog({ open: controlledOpen, onOpenChange, redirectUrl }: LoginDialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
  const [account, setAccount] = useState('')
  
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : uncontrolledOpen
  const setOpen = isControlled ? onOpenChange : setUncontrolledOpen

  const setLoginState = async () => {
    try {
      await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ loginState: true, account }),
      });
      if (isControlled) {
        setOpen?.(false);
        if (redirectUrl) {
          window.location.href = redirectUrl;
        }
      } else {
        // setUncontrolledOpen(false)
        window.location.href = '/'
      }
    } catch (err) {
      console.error("Failed to fetch loginState", err)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
     {!isControlled && (
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
      )}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium text-center text-white">登入</DialogTitle>
          <DialogDescription className="text-center text-gray-400">輸入您的帳號密碼以登入系統</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            {/* <Label htmlFor="email" className="text-gray-300">
              電子郵件
            </Label> */}
            {/* <Input id="email" placeholder="name@example.com" type="email" /> */}
            <Label htmlFor="account" className="text-gray-300">
              帳號
            </Label>
            <Input 
              id="account" 
              type="account"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">密碼</Label>
              <Link href="/forgot-password" className="text-sm hover:text-blue-300" style={{ color: "#0D99FF" }}>
                忘記密碼?
              </Link>
            </div>
            <Input id="password" type="password" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400"
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
            onClick={() => {
              setLoginState();
            }}
          >
            登入
          </Button>
          <p className="text-center text-sm text-gray-400">
            還沒有帳號?{" "}
            <Link href="/register" className="hover:text-blue-300 font-normal" style={{ color: "#0D99FF" }}>
              立即註冊
            </Link>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

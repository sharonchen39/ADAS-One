import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HiWAF - Security Operation Center",
  description: "提供應用層防禦、機器人防禦、TCP流量代理防禦等服務",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <head>
        <Script src="https://unpkg.com/recharts/umd/Recharts.min.js" strategy="beforeInteractive" />
      </head>
      <body className={`${inter.className} bg-gray-950`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen bg-gray-950">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

"use client"
import { Shield, Lock, Users, TrendingUp, Eye } from "lucide-react"
import type React from "react"

export default function ZeroTrustPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
          零信任<span style={{ color: "#0D99FF" }}>安全架構</span>
        </h1>
        <p className="mt-4 text-muted-foreground text-lg font-normal max-w-2xl mx-auto">
          基於「永不信任，始終驗證」的原則，為您的企業網絡提供最高級別的安全保障
        </p>
        <div className="mt-6 max-w-4xl mx-auto">
          <ul className="space-y-4 text-muted-foreground">
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
      <section className="py-12 bg-card rounded-lg shadow-lg border-border mb-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">
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
    </div>
  )
}

function ServiceFeatureItem({
  icon,
  title,
  description,
}: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <li className="flex items-start space-x-4 p-4 rounded-lg bg-muted border border-border">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="text-lg font-medium text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground font-normal">{description}</p>
      </div>
    </li>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PurchasePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
          購買<span style={{ color: "#0D99FF" }}>服務方案</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-normal">
          選擇最適合您需求的服務方案，保護您的網站和應用程式免受各種網路威脅
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <PricingCard
          title="合規版"
          price="5萬"
          originalPrice=""
          description="基礎網站安全防護方案"
          features={["WAF 防禦", "乾淨流量1TB", "應用程式1個"]}
          buttonText="選擇合規版"
          buttonVariant="outline"
        />
        <PricingCard
          title="進階版"
          price="6萬"
          originalPrice="10萬"
          description="進階網站安全防護方案"
          features={["WAF防禦", "DNS防護", "應用層DDoS防禦", "乾淨流量5TB", "應用程式1個"]}
          buttonText="選擇進階版"
          buttonVariant="default"
          highlighted={true}
          recommended={true}
        />
        <PricingCard
          title="專業版"
          price="9萬"
          originalPrice="12萬"
          description="全方位網站安全與效能解決方案"
          features={["WAF防禦", "DNS防護", "應用層DDoS防禦", "全球CDN加速", "乾淨流量15TB", "應用程式1個"]}
          buttonText="選擇專業版"
          buttonVariant="outline"
        />
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-medium text-foreground mb-4">需要自定義方案？</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6 font-normal">
          我們提供靈活的自定義方案，以滿足您的特定需求。聯繫我們的銷售團隊，獲取專屬方案。
        </p>
        <Button
          className="text-white font-normal"
          style={{ backgroundColor: "#0D99FF", borderColor: "#0D99FF" }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0A85E9")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0D99FF")}
        >
          聯繫我們
        </Button>
      </div>
    </div>
  )
}

function PricingCard({
  title,
  price,
  originalPrice,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
  recommended = false,
}) {
  return (
    <Card className={`bg-card border-border shadow-lg ${highlighted ? "ring-2 ring-blue-600 shadow-xl" : ""}`}>
      <CardHeader className="pb-0">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-medium text-card-foreground">{title}</CardTitle>
            <CardDescription className="font-normal text-muted-foreground">{description}</CardDescription>
          </div>
          {recommended && <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">推薦</div>}
        </div>
        <div className="mt-4">
          <div className="flex items-baseline gap-1">
            <span className="text-muted-foreground font-normal">$</span>
            <span className="text-3xl font-medium text-card-foreground">{price}</span>
            <span className="text-muted-foreground font-normal">/月起</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through font-normal">原價${originalPrice}</span>
            )}
          </div>
        </div>
      </CardHeader>

      <div className="px-6 py-6">
        {buttonVariant === "default" ? (
          <Button
            className="w-full text-white font-normal"
            style={{ backgroundColor: "#0D99FF", borderColor: "#0D99FF" }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0A85E9")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0D99FF")}
          >
            {buttonText}
          </Button>
        ) : (
          <Button
            className="w-full font-normal"
            variant="outline"
            style={{ borderColor: "#0D99FF", color: "#0D99FF" }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(13, 153, 255, 0.1)"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
            }}
          >
            {buttonText}
          </Button>
        )}
      </div>

      <CardContent className="pt-0">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: "#0D99FF" }} />
              <span className="text-muted-foreground font-normal">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

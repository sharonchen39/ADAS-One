"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PurchasePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl text-white">
          購買<span style={{ color: "#0D99FF" }}>服務方案</span>
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto font-normal">
          選擇最適合您需求的服務方案，保護您的網站和應用程式免受各種網路威脅
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <PricingCard
          title="基礎方案"
          price="$99"
          description="適合小型網站和應用程式的基礎防護"
          features={["應用層防禦", "機器人防禦", "5個網站保護", "基礎技術支持", "每月報告"]}
          buttonText="選擇基礎方案"
          buttonVariant="outline"
        />
        <PricingCard
          title="專業方案"
          price="$299"
          description="適合中型企業的全面防護解決方案"
          features={[
            "應用層防禦",
            "機器人防禦",
            "TCP流量代理防禦",
            "全球CDN加速",
            "20個網站保護",
            "優先技術支持",
            "每週報告",
          ]}
          buttonText="選擇專業方案"
          buttonVariant="default"
          highlighted={true}
        />
        <PricingCard
          title="企業方案"
          price="$999"
          description="適合大型企業的高級安全解決方案"
          features={[
            "應用層防禦",
            "機器人防禦",
            "TCP流量代理防禦",
            "全球CDN加速",
            "零信任安全",
            "API (BDE) 保護",
            "無限網站保護",
            "24/7專屬技術支持",
            "每日報告",
            "專屬安全顧問",
          ]}
          buttonText="聯繫銷售"
          buttonVariant="outline"
        />
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-medium text-white mb-4">需要自定義方案？</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6 font-normal">
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

function PricingCard({ title, price, description, features, buttonText, buttonVariant, highlighted = false }) {
  return (
    <Card className={`bg-gray-800 border-gray-700 shadow-lg ${highlighted ? "ring-2 ring-blue-600 shadow-xl" : ""}`}>
      <CardHeader>
        <CardTitle className="text-xl font-medium text-white">{title}</CardTitle>
        <CardDescription className="font-normal text-gray-300">{description}</CardDescription>
        <div className="mt-4">
          <span className="text-3xl font-medium text-white">{price}</span>
          <span className="text-gray-300 font-normal">/月</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: "#0D99FF" }} />
              <span className="text-gray-300 font-normal">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
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
      </CardFooter>
    </Card>
  )
}

"use client"
<<<<<<< Updated upstream
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
=======

import { Button } from "@/components/ui/button"
import { Eye, ChevronUp, ChevronDown } from "lucide-react"
>>>>>>> Stashed changes
import { useState } from "react"

export default function TfxCdnPage() {
  const [selectedClient, setSelectedClient] = useState(null)

  const clientData = [
    {
      id: 1,
      purchaseOrder: "202502020002",
      customerName: "BeCreator Ltd.",
      customerNameChinese: "必創科技",
      dealerType: "玖錡",
      projectCode: "038TFXGEO",
      details: {
        industry: "電子商務",
        services: ["多CDN併行", "自動故障轉移", "流量負載平衡"],
        results: ["99.99%可用性", "40%效能提升", "零服務中斷"],
        description: "透過TFX CDN融合交換中心，成功整合三家主要CDN供應商，實現無縫的內容傳遞服務。",
      },
    },
    {
      id: 2,
      purchaseOrder: "202501120001",
      customerName: "HyperTech",
      customerNameChinese: "奇拓軟體",
      dealerType: "香港果核",
      projectCode: "038TFXDIG",
      details: {
        industry: "金融服務",
        services: ["CDN備援機制", "即時監控", "智能路由"],
        results: ["100%合規達成", "50%延遲降低", "24/7穩定運行"],
        description: "為金融交易系統提供多層CDN保護，確保關鍵業務的持續運營和數據安全。",
      },
    },
    {
      id: 3,
      purchaseOrder: "202411100001",
      customerName: "tencloud",
      customerNameChinese: "騰雲科技",
      dealerType: "香港果核",
      projectCode: "038TFXDIG",
      details: {
        industry: "雲端服務",
        services: ["全球CDN加速", "智能負載平衡", "即時監控"],
        results: ["99.9%可用性", "35%效能提升", "全球覆蓋"],
        description: "為雲端服務提供商提供全球CDN加速解決方案，提升用戶體驗。",
      },
    },
    {
      id: 4,
      purchaseOrder: "202411040001",
      customerName: "FuteMax",
      customerNameChinese: "富特科技",
      dealerType: "香港果核",
      projectCode: "038TFXDIG",
      details: {
        industry: "科技製造",
        services: ["CDN併行機制", "自動故障轉移", "效能優化"],
        results: ["99.95%可用性", "45%效能提升", "零停機時間"],
        description: "為製造業提供穩定的CDN服務，確保全球業務連續性。",
      },
    },
    {
      id: 5,
      purchaseOrder: "202410180001",
      customerName: "Haoran Electronic",
      customerNameChinese: "浩然電子",
      dealerType: "香港果核",
      projectCode: "038TFXDIG",
      details: {
        industry: "電子製造",
        services: ["多地區CDN", "智能路由", "即時監控"],
        results: ["99.8%可用性", "38%效能提升", "全球部署"],
        description: "為電子製造業提供全球CDN解決方案，優化供應鏈效率。",
      },
    },
    {
      id: 6,
      purchaseOrder: "202411130003",
      customerName: "SHENGBIG",
      customerNameChinese: "盛大科技",
      dealerType: "香港果核",
      projectCode: "038TFXDIG",
      details: {
        industry: "數位娛樂",
        services: ["高速CDN", "流量分配", "內容優化"],
        results: ["99.9%可用性", "42%效能提升", "用戶體驗優化"],
        description: "為數位娛樂平台提供高速CDN服務，提升內容傳遞效率。",
      },
    },
    {
      id: 7,
      purchaseOrder: "202408080002",
      customerName: "CC Co., Ltd.",
      customerNameChinese: "創新科技",
      dealerType: "香港果核",
      projectCode: "038TFXDIG",
      details: {
        industry: "軟體開發",
        services: ["CDN加速", "負載平衡", "安全防護"],
        results: ["99.85%可用性", "40%效能提升", "安全保障"],
        description: "為軟體開發公司提供穩定的CDN服務，支援全球用戶訪問。",
      },
    },
    {
      id: 8,
      purchaseOrder: "202409010002",
      customerName: "WordGod English Institute",
      customerNameChinese: "字神帝國英語學院",
      dealerType: "字神帝國英語學院",
      projectCode: "038CFWG",
      details: {
        industry: "教育培訓",
        services: ["教育CDN", "視頻加速", "全球覆蓋"],
        results: ["99.7%可用性", "50%載入提升", "學習體驗優化"],
        description: "為線上教育平台提供專業CDN服務，優化全球學習體驗。",
      },
    },
    {
      id: 9,
      purchaseOrder: "202405010001",
      customerName: "Tu88games",
      customerNameChinese: "兔八八遊戲",
      dealerType: "香港果核",
      projectCode: "038TFXDIG",
      details: {
        industry: "遊戲娛樂",
        services: ["遊戲CDN", "低延遲傳輸", "全球節點"],
        results: ["99.95%可用性", "60%延遲降低", "遊戲體驗提升"],
        description: "為線上遊戲提供專業CDN服務，確保全球玩家流暢體驗。",
      },
    },
    {
      id: 10,
      purchaseOrder: "202405050001",
      customerName: "CoolBitX Ltd.",
      customerNameChinese: "CoolBitX Ltd.",
      dealerType: "CoolBitX Ltd.",
      projectCode: "038CFCBX",
<<<<<<< Updated upstream
=======
      productName: "TFX Core Service",
      domainName: "coolbitx.com",
      contractStart: "2024/5/6",
      contractEnd: "2025/5/5",
      contractType: "",
      transactionType: "不續約",
>>>>>>> Stashed changes
      details: {
        industry: "區塊鏈科技",
        services: ["區塊鏈CDN", "安全傳輸", "分散式節點"],
        results: ["99.9%可用性", "45%效能提升", "安全性保障"],
        description: "為區塊鏈應用提供安全可靠的CDN服務，支援去中心化應用。",
      },
    },
    {
      id: 11,
      purchaseOrder: "202404300001",
      customerName: "Qituo Software",
      customerNameChinese: "奇拓軟體",
      dealerType: "玖錡",
      projectCode: "038TFXGEO",
      details: {
        industry: "軟體服務",
        services: ["企業CDN", "API加速", "全球部署"],
        results: ["99.8%可用性", "48%效能提升", "企業級服務"],
        description: "為企業軟體提供專業CDN解決方案，優化全球業務運營。",
      },
    },
  ]

  const handleViewDetails = (client) => {
    setSelectedClient(client)
  }

  const closeModal = () => {
    setSelectedClient(null)
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-12">
        {/* 客戶資訊表格 */}
        <div className="bg-muted border border-border rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-8 text-foreground">
            客戶<span style={{ color: "#0D99FF" }}>資訊</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-3 font-semibold text-foreground text-sm">採購單號</th>
                  <th className="text-left py-4 px-3 font-semibold text-foreground text-sm">客戶供商名稱</th>
                  <th className="text-left py-4 px-3 font-semibold text-foreground text-sm">客戶供商名稱(中文)</th>
                  <th className="text-left py-4 px-3 font-semibold text-foreground text-sm">經銷商or End Customer</th>
                  <th className="text-left py-4 px-3 font-semibold text-foreground text-sm">專案代碼</th>
                  <th className="text-center py-4 px-3 font-semibold text-foreground text-sm">操作</th>
                </tr>
              </thead>
              <tbody>
                {clientData.map((client) => (
                  <tr key={client.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-3 text-muted-foreground text-sm">{client.purchaseOrder}</td>
                    <td className="py-3 px-3 text-foreground font-medium text-sm">{client.customerName}</td>
                    <td className="py-3 px-3 text-foreground text-sm">{client.customerNameChinese}</td>
                    <td className="py-3 px-3 text-muted-foreground text-sm">{client.dealerType}</td>
                    <td className="py-3 px-3 text-muted-foreground text-sm">{client.projectCode}</td>
                    <td className="py-3 px-3 text-center">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewDetails(client)}
                        className="flex items-center gap-2"
                        style={{ borderColor: "#0D99FF", color: "#0D99FF" }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(13, 153, 255, 0.1)"
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent"
                        }}
                      >
                        <Eye className="h-4 w-4" />
                        查看細節
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 客戶詳情模態框 - 改為圖表展示 */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div
            className="bg-card rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">{selectedClient.customerNameChinese}</h3>
                <p className="text-muted-foreground">客戶供商：{selectedClient.customerName}</p>
                <p className="text-muted-foreground">採購單號：{selectedClient.purchaseOrder}</p>
                <p className="text-muted-foreground">專案代碼：{selectedClient.projectCode}</p>
                <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm px-3 py-1 rounded-full mt-2">
                  {selectedClient.details.industry}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeModal}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </Button>
            </div>

            {/* 圖表區域 */}
            <div className="space-y-8">
              {/* 日期和區間顯示 */}
              <div className="flex justify-end mb-4">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">
                    統計日期：
                    {new Date().toLocaleDateString("zh-TW", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </p>
                  <p className="text-sm text-muted-foreground">統計區間：2024年1月 - 2024年6月</p>
                </div>
              </div>

              {/* 地區流量分佈圖 */}
              <div className="bg-muted border border-border rounded-lg p-6">
                <h4 className="text-lg font-medium text-foreground mb-6 text-center">地區流量分佈圖</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 地區列表 */}
                  <div className="space-y-4">
                    {[
                      {
                        region: "亞太地區",
                        percentage: selectedClient.id <= 2 ? 45 : selectedClient.id <= 6 ? 50 : 42,
                        traffic: selectedClient.id <= 2 ? "6.75TB" : selectedClient.id <= 6 ? "3.5TB" : "2.1TB",
                      },
                      {
                        region: "北美地區",
                        percentage: selectedClient.id <= 2 ? 25 : selectedClient.id <= 6 ? 20 : 28,
                        traffic: selectedClient.id <= 2 ? "3.75TB" : selectedClient.id <= 6 ? "1.4TB" : "1.4TB",
                      },
                      {
                        region: "歐洲地區",
                        percentage: selectedClient.id <= 2 ? 20 : selectedClient.id <= 6 ? 22 : 20,
                        traffic: selectedClient.id <= 2 ? "3TB" : selectedClient.id <= 6 ? "1.54TB" : "1TB",
                      },
                      {
                        region: "其他地區",
                        percentage: selectedClient.id <= 2 ? 10 : selectedClient.id <= 6 ? 8 : 10,
                        traffic: selectedClient.id <= 2 ? "1.5TB" : selectedClient.id <= 6 ? "0.56TB" : "0.5TB",
                      },
                    ].map((data, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-muted-foreground">{data.region}</span>
                          <div className="text-right">
                            <span className="text-sm font-medium text-foreground">{data.percentage}%</span>
                            <span className="text-xs text-muted-foreground ml-2">({data.traffic})</span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full transition-all duration-1000 ${
                              index === 0
                                ? "bg-blue-500"
                                : index === 1
                                  ? "bg-green-500"
                                  : index === 2
                                    ? "bg-yellow-500"
                                    : "bg-purple-500"
                            }`}
                            style={{ width: `${data.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 地區分佈圓餅圖 */}
                  <div className="flex items-center justify-center">
                    <div className="relative w-48 h-48">
                      <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#e5e7eb" strokeWidth="8" />
                        {/* 亞太地區 */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke="#3b82f6"
                          strokeWidth="8"
                          strokeDasharray={`${selectedClient.id <= 2 ? 113 : selectedClient.id <= 6 ? 125 : 105} 251`}
                          strokeDashoffset="0"
                          className="transition-all duration-1000"
                        />
                        {/* 北美地區 */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke="#10b981"
                          strokeWidth="8"
                          strokeDasharray={`${selectedClient.id <= 2 ? 63 : selectedClient.id <= 6 ? 50 : 70} 251`}
                          strokeDashoffset={`-${selectedClient.id <= 2 ? 113 : selectedClient.id <= 6 ? 125 : 105}`}
                          className="transition-all duration-1000"
                        />
                        {/* 歐洲地區 */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke="#f59e0b"
                          strokeWidth="8"
                          strokeDasharray={`${selectedClient.id <= 2 ? 50 : selectedClient.id <= 6 ? 55 : 50} 251`}
                          strokeDashoffset={`-${selectedClient.id <= 2 ? 176 : selectedClient.id <= 6 ? 175 : 175}`}
                          className="transition-all duration-1000"
                        />
                        {/* 其他地區 */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke="#8b5cf6"
                          strokeWidth="8"
                          strokeDasharray={`${selectedClient.id <= 2 ? 25 : selectedClient.id <= 6 ? 20 : 25} 251`}
                          strokeDashoffset={`-${selectedClient.id <= 2 ? 226 : selectedClient.id <= 6 ? 230 : 225}`}
                          className="transition-all duration-1000"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-xl font-bold text-foreground">
                            {selectedClient.id <= 2 ? "15TB" : selectedClient.id <= 6 ? "7TB" : "5TB"}
                          </div>
                          <div className="text-xs text-muted-foreground">總流量</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 響應時間優化圖 */}
              <div className="bg-muted border border-border rounded-lg p-6">
                <h4 className="text-lg font-medium text-foreground mb-6 text-center">響應時間優化圖</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* 優化前後對比 */}
                  <div>
                    <h5 className="text-md font-medium text-foreground mb-4">優化前後對比</h5>
                    <div className="space-y-4">
                      {[
                        {
                          metric: "首頁載入時間",
                          before: selectedClient.id <= 2 ? "3.2s" : selectedClient.id <= 6 ? "2.8s" : "3.5s",
                          after: selectedClient.id <= 2 ? "1.8s" : selectedClient.id <= 6 ? "1.4s" : "1.9s",
                          improvement: selectedClient.id <= 2 ? 44 : selectedClient.id <= 6 ? 50 : 46,
                        },
                        {
                          metric: "API響應時間",
                          before: selectedClient.id <= 2 ? "450ms" : selectedClient.id <= 6 ? "380ms" : "420ms",
                          after: selectedClient.id <= 2 ? "180ms" : selectedClient.id <= 6 ? "150ms" : "170ms",
                          improvement: selectedClient.id <= 2 ? 60 : selectedClient.id <= 6 ? 61 : 60,
                        },
                        {
                          metric: "圖片載入時間",
                          before: selectedClient.id <= 2 ? "2.1s" : selectedClient.id <= 6 ? "1.9s" : "2.3s",
                          after: selectedClient.id <= 2 ? "0.8s" : selectedClient.id <= 6 ? "0.7s" : "0.9s",
                          improvement: selectedClient.id <= 2 ? 62 : selectedClient.id <= 6 ? 63 : 61,
                        },
                        {
                          metric: "視頻串流延遲",
                          before: selectedClient.id <= 2 ? "800ms" : selectedClient.id <= 6 ? "720ms" : "850ms",
                          after: selectedClient.id <= 2 ? "200ms" : selectedClient.id <= 6 ? "180ms" : "220ms",
                          improvement: selectedClient.id <= 2 ? 75 : selectedClient.id <= 6 ? 75 : 74,
                        },
                      ].map((data, index) => (
                        <div key={index} className="bg-card border border-border rounded p-3">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">{data.metric}</span>
                            <span className="text-sm font-medium text-green-600 dark:text-green-400">
                              -{data.improvement}%
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex-1">
                              <div className="text-xs text-muted-foreground mb-1">優化前</div>
                              <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-2 py-1 rounded text-xs">
                                {data.before}
                              </div>
                            </div>
                            <div className="text-muted-foreground">→</div>
                            <div className="flex-1">
                              <div className="text-xs text-muted-foreground mb-1">優化後</div>
                              <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded text-xs">
                                {data.after}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 響應時間趨勢圖 */}
                  <div>
                    <h5 className="text-md font-medium text-foreground mb-4">24小時響應時間趨勢</h5>
                    <div className="h-64 flex items-end justify-between px-2">
                      {[
                        { time: "00:00", value: selectedClient.id <= 2 ? 180 : selectedClient.id <= 6 ? 150 : 190 },
                        { time: "04:00", value: selectedClient.id <= 2 ? 165 : selectedClient.id <= 6 ? 140 : 175 },
                        { time: "08:00", value: selectedClient.id <= 2 ? 200 : selectedClient.id <= 6 ? 170 : 210 },
                        { time: "12:00", value: selectedClient.id <= 2 ? 220 : selectedClient.id <= 6 ? 190 : 230 },
                        { time: "16:00", value: selectedClient.id <= 2 ? 195 : selectedClient.id <= 6 ? 165 : 205 },
                        { time: "20:00", value: selectedClient.id <= 2 ? 185 : selectedClient.id <= 6 ? 155 : 195 },
                      ].map((data, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div
                            className="bg-gradient-to-t from-blue-500 to-blue-300 rounded-t transition-all duration-1000 w-8 mb-2"
                            style={{ height: `${(data.value / 250) * 200}px` }}
                          ></div>
                          <span className="text-xs text-muted-foreground">{data.time}</span>
                          <span className="text-xs font-medium text-foreground">{data.value}ms</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-sm text-muted-foreground">
                        平均響應時間: {selectedClient.id <= 2 ? "190ms" : selectedClient.id <= 6 ? "162ms" : "200ms"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button
                onClick={closeModal}
                style={{ backgroundColor: "#0D99FF", borderColor: "#0D99FF" }}
                className="text-white font-normal"
              >
                關閉
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

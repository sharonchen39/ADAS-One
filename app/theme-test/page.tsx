import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Palette, Type, Square, Circle, AlertTriangle, CheckCircle, Info, Zap } from "lucide-react"

export default function ThemeTestPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground flex items-center justify-center gap-3">
            <Palette className="h-10 w-10 text-primary" />
            主題顏色系統測試頁面
          </h1>
          <p className="text-xl text-muted-foreground">展示所有語義化 Tailwind 顏色類別在 Light/Dark 模式下的效果</p>
        </div>

        {/* Background Colors Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Square className="h-5 w-5" />
              背景顏色 (Background Colors)
            </CardTitle>
            <CardDescription>不同背景顏色的語義化類別展示</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-background border border-border rounded-lg p-4 space-y-2">
              <div className="font-mono text-sm text-muted-foreground">bg-background</div>
              <div className="text-foreground">主要背景顏色</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 space-y-2">
              <div className="font-mono text-sm text-muted-foreground">bg-card</div>
              <div className="text-card-foreground">卡片背景顏色</div>
            </div>

            <div className="bg-muted border border-border rounded-lg p-4 space-y-2">
              <div className="font-mono text-sm text-muted-foreground">bg-muted</div>
              <div className="text-foreground">次要背景顏色</div>
            </div>

            <div className="bg-popover border border-border rounded-lg p-4 space-y-2">
              <div className="font-mono text-sm text-muted-foreground">bg-popover</div>
              <div className="text-popover-foreground">彈出層背景</div>
            </div>
          </CardContent>
        </Card>

        {/* Text Colors Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Type className="h-5 w-5" />
              文字顏色 (Text Colors)
            </CardTitle>
            <CardDescription>不同文字顏色的語義化類別展示</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">主要文字顏色</h3>
                <div className="space-y-2">
                  <p className="text-foreground">
                    <span className="font-mono text-sm bg-muted px-2 py-1 rounded mr-2">text-foreground</span>
                    主要文字顏色 - 用於標題和重要內容
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-mono text-sm bg-muted px-2 py-1 rounded mr-2">text-muted-foreground</span>
                    次要文字顏色 - 用於描述和輔助文字
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-card-foreground">卡片文字顏色</h3>
                <div className="bg-card p-4 rounded-lg border border-border space-y-2">
                  <p className="text-card-foreground">
                    <span className="font-mono text-sm bg-muted px-2 py-1 rounded mr-2">text-card-foreground</span>
                    卡片內的主要文字
                  </p>
                  <p className="text-popover-foreground">
                    <span className="font-mono text-sm bg-muted px-2 py-1 rounded mr-2">text-popover-foreground</span>
                    彈出層文字顏色
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Border Colors Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Circle className="h-5 w-5" />
              邊框顏色 (Border Colors)
            </CardTitle>
            <CardDescription>不同邊框顏色的語義化類別展示</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-2 border-border rounded-lg p-4 space-y-2">
              <div className="font-mono text-sm text-muted-foreground">border-border</div>
              <div className="text-foreground">主要邊框顏色</div>
            </div>

            <div className="border-2 border-input rounded-lg p-4 space-y-2">
              <div className="font-mono text-sm text-muted-foreground">border-input</div>
              <div className="text-foreground">輸入框邊框顏色</div>
            </div>

            <div className="border-2 border-ring rounded-lg p-4 space-y-2">
              <div className="font-mono text-sm text-muted-foreground">border-ring</div>
              <div className="text-foreground">焦點環邊框顏色</div>
            </div>
          </CardContent>
        </Card>

        {/* Button Variants Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              按鈕變體 (Button Variants)
            </CardTitle>
            <CardDescription>不同按鈕樣式的語義化類別展示</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Primary 按鈕</h4>
                <Button className="w-full">bg-primary text-primary-foreground</Button>
                <code className="text-sm text-muted-foreground block">
                  className="bg-primary text-primary-foreground"
                </code>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Secondary 按鈕</h4>
                <Button variant="secondary" className="w-full">
                  bg-secondary text-secondary-foreground
                </Button>
                <code className="text-sm text-muted-foreground block">
                  className="bg-secondary text-secondary-foreground"
                </code>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Destructive 按鈕</h4>
                <Button variant="destructive" className="w-full">
                  bg-destructive text-destructive-foreground
                </Button>
                <code className="text-sm text-muted-foreground block">
                  className="bg-destructive text-destructive-foreground"
                </code>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Outline 按鈕</h4>
                <Button variant="outline" className="w-full">
                  border-input bg-background
                </Button>
                <code className="text-sm text-muted-foreground block">className="border-input bg-background"</code>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Ghost 按鈕</h4>
                <Button variant="ghost" className="w-full">
                  hover:bg-accent hover:text-accent-foreground
                </Button>
                <code className="text-sm text-muted-foreground block">className="hover:bg-accent"</code>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Link 按鈕</h4>
                <Button variant="link" className="w-full">
                  text-primary underline-offset-4
                </Button>
                <code className="text-sm text-muted-foreground block">className="text-primary"</code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Elements Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              互動元素 (Interactive Elements)
            </CardTitle>
            <CardDescription>表單元素和其他互動組件的顏色展示</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">輸入框</h4>
                <Input
                  placeholder="border-input bg-background text-foreground"
                  className="placeholder:text-muted-foreground"
                />
                <code className="text-sm text-muted-foreground block">
                  className="border-input bg-background text-foreground"
                </code>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">徽章 (Badges)</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default Badge</Badge>
                  <Badge variant="secondary">Secondary Badge</Badge>
                  <Badge variant="destructive">Destructive Badge</Badge>
                  <Badge variant="outline">Outline Badge</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alert Components Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              警告組件 (Alert Components)
            </CardTitle>
            <CardDescription>不同狀態的警告組件顏色展示</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                <strong>預設警告:</strong> 使用 bg-background border-border text-foreground
              </AlertDescription>
            </Alert>

            <Alert className="border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>成功訊息:</strong> 自定義藍色主題的警告框
              </AlertDescription>
            </Alert>

            <Alert className="border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>錯誤訊息:</strong> 自定義紅色主題的警告框
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Usage Guidelines */}
        <Card>
          <CardHeader>
            <CardTitle>使用指南 (Usage Guidelines)</CardTitle>
            <CardDescription>如何正確使用語義化顏色類別</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">✅ 推薦做法</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • 使用語義化類別如 <code className="bg-background px-1 rounded">bg-card</code> 而不是{" "}
                  <code className="bg-background px-1 rounded">bg-gray-800</code>
                </li>
                <li>
                  • 使用 <code className="bg-background px-1 rounded">text-foreground</code> 而不是{" "}
                  <code className="bg-background px-1 rounded">text-white</code>
                </li>
                <li>
                  • 使用 <code className="bg-background px-1 rounded">border-border</code> 而不是{" "}
                  <code className="bg-background px-1 rounded">border-gray-700</code>
                </li>
                <li>• 讓 Tailwind 的主題系統自動處理 Light/Dark 模式切換</li>
              </ul>
            </div>

            <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg">
              <h4 className="font-semibold text-destructive mb-3">❌ 避免做法</h4>
              <ul className="space-y-2 text-destructive/80">
                <li>
                  • 避免硬編碼顏色如 <code className="bg-background px-1 rounded">bg-gray-800</code>
                </li>
                <li>
                  • 避免手動添加 <code className="bg-background px-1 rounded">dark:</code> 前綴（語義化類別會自動處理）
                </li>
                <li>
                  • 避免使用固定的顏色值如 <code className="bg-background px-1 rounded">#ffffff</code>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Separator />

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-muted-foreground">
            🎨 這個測試頁面展示了完整的語義化顏色系統，請切換 Light/Dark 模式查看效果！
          </p>
        </div>
      </div>
    </div>
  )
}

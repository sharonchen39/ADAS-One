import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function ApiProtectionLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section Skeleton */}
      <div className="text-center mb-16">
        <Skeleton className="h-16 w-16 mx-auto mb-6 rounded-full" />
        <Skeleton className="h-12 w-96 mx-auto mb-4" />
        <Skeleton className="h-6 w-[600px] mx-auto" />
      </div>

      {/* Service Features Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="border-gray-700 bg-gray-800">
            <CardHeader className="text-center">
              <Skeleton className="h-12 w-12 mx-auto mb-4 rounded-full" />
              <Skeleton className="h-6 w-48 mx-auto" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-16 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Stats Cards Skeleton */}
      <div className="mb-16">
        <Skeleton className="h-8 w-64 mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="border-gray-700 bg-gray-800">
              <CardHeader>
                <Skeleton className="h-4 w-24" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16 mb-2" />
                <Skeleton className="h-3 w-20" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Chart Skeleton */}
      <div className="mb-16">
        <Card className="border-gray-700 bg-gray-800">
          <CardHeader>
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-64" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-80 w-full" />
          </CardContent>
        </Card>
      </div>

      {/* Pricing Skeleton */}
      <div className="text-center">
        <Skeleton className="h-8 w-32 mx-auto mb-8" />
        <Card className="border-gray-700 bg-gray-800 max-w-md mx-auto">
          <CardHeader>
            <Skeleton className="h-8 w-48 mx-auto mb-4" />
            <Skeleton className="h-12 w-32 mx-auto" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
              <Skeleton className="h-10 w-full mt-6" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

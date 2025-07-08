import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function WaitingRoomLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section Skeleton */}
      <section className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 bg-gray-700 rounded animate-pulse"></div>
        </div>
        <div className="h-10 bg-gray-700 rounded mx-auto mb-4 max-w-md animate-pulse"></div>
        <div className="h-6 bg-gray-700 rounded mx-auto mb-8 max-w-2xl animate-pulse"></div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="h-12 w-32 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-12 w-32 bg-gray-700 rounded animate-pulse"></div>
        </div>
      </section>

      {/* Service Features Skeleton */}
      <section className="mb-16">
        <div className="h-8 bg-gray-700 rounded mx-auto mb-12 max-w-xs animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="h-12 w-12 bg-gray-700 rounded mb-4 animate-pulse"></div>
                <div className="h-6 bg-gray-700 rounded animate-pulse"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Statistics Skeleton */}
      <section className="mb-16">
        <div className="h-8 bg-gray-700 rounded mx-auto mb-12 max-w-xs animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-700 rounded w-20 animate-pulse"></div>
                    <div className="h-8 bg-gray-700 rounded w-16 animate-pulse"></div>
                  </div>
                  <div className="h-8 w-8 bg-gray-700 rounded animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <div className="h-6 bg-gray-700 rounded w-40 animate-pulse"></div>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-700 rounded animate-pulse"></div>
          </CardContent>
        </Card>
      </section>

      {/* Pricing Skeleton */}
      <section className="mb-16">
        <div className="h-8 bg-gray-700 rounded mx-auto mb-12 max-w-xs animate-pulse"></div>
        <div className="max-w-md mx-auto">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="text-center">
              <div className="h-8 bg-gray-700 rounded mx-auto mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-700 rounded mx-auto animate-pulse"></div>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <div className="h-12 bg-gray-700 rounded mx-auto mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded mx-auto animate-pulse"></div>
              </div>
              <div className="space-y-3 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-4 bg-gray-700 rounded animate-pulse"></div>
                ))}
              </div>
              <div className="h-12 bg-gray-700 rounded animate-pulse"></div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

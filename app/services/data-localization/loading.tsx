export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="animate-pulse">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-6"></div>
          <div className="h-12 bg-gray-700 rounded w-96 mx-auto mb-4"></div>
          <div className="h-6 bg-gray-700 rounded w-2/3 mx-auto mb-8"></div>
          <div className="flex justify-center gap-4">
            <div className="h-12 bg-gray-700 rounded w-32"></div>
            <div className="h-12 bg-gray-700 rounded w-32"></div>
          </div>
        </div>

        {/* Features Section Skeleton */}
        <div className="mb-16">
          <div className="h-10 bg-gray-700 rounded w-64 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-700 rounded"></div>
                  <div className="h-6 bg-gray-700 rounded w-32"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section Skeleton */}
        <div className="mb-16">
          <div className="h-10 bg-gray-700 rounded w-64 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="w-12 h-12 bg-gray-700 rounded mb-4"></div>
                <div className="h-6 bg-gray-700 rounded w-24 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics Section Skeleton */}
        <div className="mb-16">
          <div className="h-10 bg-gray-700 rounded w-64 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <div className="h-4 bg-gray-700 rounded w-16"></div>
                  <div className="w-4 h-4 bg-gray-700 rounded"></div>
                </div>
                <div className="h-8 bg-gray-700 rounded w-12 mb-2"></div>
                <div className="h-3 bg-gray-700 rounded w-20"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section Skeleton */}
        <div className="mb-16">
          <div className="h-10 bg-gray-700 rounded w-64 mx-auto mb-12"></div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-700 rounded mx-auto mb-4"></div>
                <div className="h-8 bg-gray-700 rounded w-48 mx-auto mb-4"></div>
                <div className="h-12 bg-gray-700 rounded w-24 mx-auto mb-8"></div>
                <div className="space-y-4 mb-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-6 bg-gray-700 rounded w-64 mx-auto"></div>
                  ))}
                </div>
                <div className="h-12 bg-gray-700 rounded w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

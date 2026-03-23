const FoodDetailsSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 animate-pulse">
      
      {/* Back Button */}
      <div className="h-10 w-24 bg-gray-300 rounded mb-6"></div>

      {/* Main Card */}
      <div className="grid md:grid-cols-2 gap-8 bg-white shadow-lg rounded-2xl overflow-hidden">
        
        {/* Image Skeleton */}
        <div className="w-full h-[300px] md:h-full bg-gray-300"></div>

        {/* Content Skeleton */}
        <div className="p-6 flex flex-col justify-between space-y-4">
          
          <div className="space-y-3">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            <div className="h-6 bg-gray-300 rounded w-1/4"></div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <div className="h-12 bg-gray-300 rounded w-1/2"></div>
            <div className="h-12 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </div>

      {/* Video Skeleton */}
      <div className="mt-10">
        <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
        <div className="w-full aspect-video bg-gray-300 rounded-xl"></div>
      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;
import React from 'react';

const ReviewCardSkeleton = () => {
    return (
         <div className="p-4 border rounded-2xl bg-white shadow-sm animate-pulse space-y-4">
            
            {/* User Section */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>

                <div className="space-y-2">
                <div className="h-3 w-24 bg-gray-300 rounded"></div>
                <div className="h-2 w-16 bg-gray-200 rounded"></div>
                </div>
            </div>

            {/* Review Text */}
            <div className="space-y-2">
                <div className="h-3 w-full bg-gray-300 rounded"></div>
                <div className="h-3 w-5/6 bg-gray-300 rounded"></div>
                <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center pt-2">
                <div className="h-2 w-20 bg-gray-200 rounded"></div>
                <div className="h-6 w-14 bg-gray-300 rounded-full"></div>
            </div>
        </div>
    );
};

export default ReviewCardSkeleton;
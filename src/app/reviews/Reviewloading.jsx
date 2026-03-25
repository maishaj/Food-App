import ReviewCardSkeleton from '@/components/skeletons/ReviewCardSkeleton';
import React from 'react';

const Reviewloading = () => {
    return (
       <div className='grid grid-cols-4 my-5 gap-5'>
         {
            [...Array(12)].map((_,index)=><ReviewCardSkeleton key={index}></ReviewCardSkeleton>)
         }
       </div>
    );
};

export default Reviewloading;
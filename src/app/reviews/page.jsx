import React from 'react';
import ReviewsPage from './ReviewsPage';

export const metadata={
    title:"All Reviews",
    description: "Best FastFood shop in Noakhali",
}

const page = () => {
    return (
        <div>
            <ReviewsPage></ReviewsPage>
        </div>
    );
};

export default page;
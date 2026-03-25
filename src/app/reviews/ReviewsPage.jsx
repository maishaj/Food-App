"use client"
import ReviewCard from '@/components/cards/ReviewCard';
import React, { useEffect, useState } from 'react';
import Reviewloading from './Reviewloading';
import { Anek_Bangla } from 'next/font/google';

const anek=Anek_Bangla({
    weight:["400"]
})

const ReviewsPage = () => {

    const [review,setReview]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch('https://taxi-kitchen-api.vercel.app/api/v1/reviews')
        .then((res)=>res.json())
        .then((data)=>{
            setReview(data.reviews);
            setLoading(false);
        });
    },[])

    if(loading){
        return <Reviewloading></Reviewloading>
    }

    return (
         <div className={`${anek.className}`}>
            <h2 className='text-4xl font-bold'>Total <span className='text-yellow-500'>{review.length}</span> found!</h2>
            <div className='grid grid-cols-4 my-5 gap-5'>
                {
                   review.map(rev => <ReviewCard key={rev.id} rev={rev} />)
                }
            </div>
        </div>
    );
};

export default ReviewsPage;
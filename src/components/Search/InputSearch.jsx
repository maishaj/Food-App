"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const InputSearch = () => {

    const router=useRouter();
    const params=useSearchParams();
    //console.log(params.toString());

    const handleSubmit=(e)=>{

       e.preventDefault();
       const form=e.target;
       const value=form.search.value;

       const newParams=new URLSearchParams(params.toString());
       newParams.set("search",value);
       
       router.push(`?${newParams.toString()}`);
       
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='search' type="text" className='p-2 border w-2xl rounded mr-3' placeholder='Search by food name...' />
                <button className='px-4 py-2 bg-yellow-500 text-black cursor-pointer rounded'>Search</button>
            </form>
        </div>
    );
};

export default InputSearch;
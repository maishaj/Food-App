"use client"
import { CartContext } from '@/context/CartProvider';
import React, { use, useState } from 'react';

const CartButton = ({food}) => {

    const [inCart,setInCart]=useState(false);
    const {add2Cart}=use(CartContext);

    const handleAdd2Cart=()=>{
        add2Cart(food);
        setInCart(true);
    }
    

    return (
        <button onClick={handleAdd2Cart} disabled={inCart} className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition disabled:bg-gray-500">
         {
            inCart? "Added":"Add to Cart"
         }
        </button>
    );
};

export default CartButton;
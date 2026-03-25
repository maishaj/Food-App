"use client"
import React, { createContext, useState } from 'react';

export const CartContext=createContext();

const CartProvider = ({children}) => {

    const [cart,setCart]=useState([]);

    const add2Cart=(item)=>{
        setCart([item,...cart]);
    }

    const cartInfo={
        add2Cart,
        cart
    }

    return <CartContext value={cartInfo}>{children}</CartContext>
};

export default CartProvider;
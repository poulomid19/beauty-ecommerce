import { createContext, useEffect, useState } from "react";
import popular from '../../components/popular/product'
import best from '../../components/Bestseller/best'
import hair from '../../components/categories/haircare'
import skin from '../../components/categories/skincare'
import makeup from '../../components/categories/makeup' 



const ShopContext = createContext(null)


export const ShopContextProvider=({children})=>{
     const all_product = [...popular,...best,...makeup,...hair,...skin] 

      const getDefaultCart=()=>{
        const storedCart =JSON.parse(localStorage.getItem("cart"))
        if(storedCart) return storedCart
        let cart ={}
        for(let i=0;i<all_product.length;i++){
          cart[all_product[i].id]=0
        }
        return  cart;
    }
     const resetCart = () => {
    let cart = {}
    for (let i = 0; i < all_product.length; i++) {
      cart[all_product[i].id] = 0
    }
    setCartItem(cart)
    localStorage.removeItem("cart")
  }
    const[cartItem, setCartItem] = useState(getDefaultCart())

    useEffect(()=>{
      localStorage.setItem("cart", JSON.stringify(cartItem))
    },[cartItem])

    //  console.log(cartItem)
    const addTocart = (itemId, quantity = 1) => {
  setCartItem((prev) => ({
    ...prev,
    [itemId]: prev[itemId] + quantity
  }))
}
      const removeFromcart=(itemId)=>{
      setCartItem((prev)=>({...prev, [itemId]:prev[itemId]-1}))
     }
     const getTotalCartItems=()=>{
      let total = 0;
      for(let item in cartItem){
        total += cartItem[item]
      }
      return total;
     }
     const contextvalue = {all_product, cartItem,addTocart,removeFromcart, getTotalCartItems,resetCart }
    return(
        <ShopContext.Provider value={contextvalue}>
          {children}
        </ShopContext.Provider>
    )
}

export  default ShopContext
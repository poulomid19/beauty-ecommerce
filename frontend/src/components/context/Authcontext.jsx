import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import ShopContext from "./ShopContext";

const AuthContext = createContext()

export const AuthProvider =({children})=>{
    const {resetCart} = useContext(ShopContext)
    useEffect(()=>{
     const savedUser = localStorage.getItem("User")
     if(savedUser){
        setUser(JSON.parse(savedUser))
     }
    },[])
    const [user,setUser]= useState()
    const login =(userData)=>{
        setUser(userData)
        localStorage.setItem("User", JSON.stringify(userData))
    }
const logout =()=>{
    setUser(null)
    resetCart()
    localStorage.removeItem("User")
}

return (
    <AuthContext.Provider value={{login,logout,user}}>
        {children}
    </AuthContext.Provider>
)
}

export const useAuth =()=>useContext(AuthContext)
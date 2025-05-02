import { useState } from "react"
import {create} from 'zustand'
import axiosInstance from './lib/axios.js'

export const useAuthStore=create((set,get)=>({
    isSigningUp:false,
    isLoggingIn:false,
    isAuthenticated:false,
    user:null,
    signup: async ({fullName,email,password})=>{
        set({isSigningUp:true})
        try{
            const res =await axiosInstance.post('/api/auth/signup',{
                fullName,
                email,
                password,
            });
            const user=res.data.user;
            set({user,isAuthenticated:true})
            return {success:true,user}
        }catch(error){
            console.error(error.response?.data?.message)
            return {success:false,error:error.response?.data?.message}
        }finally{
            set({isSigningUp:false})
        }
    }

}

)
)

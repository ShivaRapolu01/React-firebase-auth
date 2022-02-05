import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
}  from 'firebase/auth'

//TODO establish forgot password functinality . can use sendPasswordResetEmail from 'firebase/auth'
import {auth} from '../firebase-config'


const userAuthContext=createContext(); 

export function UserAuthContextProvider({children}){
  const [user,setUser]=useState(""); 
   function signUp(email,password){
       return createUserWithEmailAndPassword(auth,email,password); 
   }
   function logIn(email,password){
    return signInWithEmailAndPassword(auth,email,password); 
   }

   function logOut(){
       return signOut(auth); 
   }
   
   function googleSignIn(){
       const googleAuthProvider=new GoogleAuthProvider(); 
       return signInWithPopup(auth,googleAuthProvider);
   }

   useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
        setUser(currentuser); 
     });
     return ()=>{
         unsubscribe(); 
     }

   },[])

   return (
       <userAuthContext.Provider value={{user, signUp,logIn,logOut,googleSignIn}}>
           {children}
       </userAuthContext.Provider>
   )
}


export function useUserAuth(){
    return useContext(userAuthContext);
}
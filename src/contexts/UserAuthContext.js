import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    GithubAuthProvider,
    TwitterAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
}  from 'firebase/auth'

//TODO establish forgot password functinality . can use sendPasswordResetEmail from 'firebase/auth'
import {auth} from '../firebase-config'


const userAuthContext=createContext(); 

export function UserAuthContextProvider({children}){
  const [user,setUser]=useState(""); 
   const signUp=async(email,password,name)=>{
       return  await createUserWithEmailAndPassword(auth,email,password).then(()=>updateProfile(auth.currentUser,{
           displayName:name,
       })
       );
   }
   function logIn(email,password){
    return signInWithEmailAndPassword(auth,email,password); 
   }

   function logOut(){
       return signOut(auth); 
   }
   function forgotPassword(email){
        return sendPasswordResetEmail(auth,email);
   }
   
   function googleSignIn(){
       const googleAuthProvider=new GoogleAuthProvider(); 
       return signInWithPopup(auth,googleAuthProvider);
   }
   function githubSignIn(){
    const githubAuthProvider=new GithubAuthProvider(); 
    return signInWithPopup(auth,githubAuthProvider);
   }
   function twitterSignIn(){
    const twitterAuthProvider=new TwitterAuthProvider(); 
    return signInWithPopup(auth,twitterAuthProvider);
   }
   //TODO NOTE THAT githubSignIn,twitterSignIn are not presently avaiable since they need URL domain

   useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
        setUser(currentuser); 
     });
     return ()=>{
         unsubscribe(); 
     }

   },[])
 
   const contextValue={
    user, signUp,logIn,logOut,googleSignIn,githubSignIn,twitterSignIn,forgotPassword
   }
   return (
       <userAuthContext.Provider value={contextValue}>
           {children}
       </userAuthContext.Provider>
   )
}


export function useUserAuth(){
    return useContext(userAuthContext);
}
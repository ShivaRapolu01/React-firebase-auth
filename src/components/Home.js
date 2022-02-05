import React,{useState} from 'react';
import { Button ,Alert} from 'react-bootstrap';
import { useUserAuth } from '../contexts/UserAuthContext';
import {useNavigate} from 'react-router-dom'


function Home() {

  const {user,logOut}=useUserAuth(); 
  const [error, setError]=useState(""); 
   const navigate=useNavigate(); 



  const handlelogOut=async ()=>{
        try{
          await logOut(); 
          navigate("/signup");
        }catch(err){
         setError(err); 
        }
  }

  return (
      <>
       <div className='p-4 box mt-3 text-center'> Welcome! {user && user.email} You are at Home</div>
       {error && <Alert>{error}</Alert>}
       <div className='d-grid gap-2'>
           <Button variant='primary' onClick={handlelogOut}>Log out</Button>
       </div>
      </>
  )
}

export default Home;

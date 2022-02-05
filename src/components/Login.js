import React, { useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../contexts/UserAuthContext';

function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(""); 
  const {logIn,googleSignIn}=useUserAuth();
 
  const navigate=useNavigate(); 

  const handlelogIn= async (e)=>{
      e.preventDefault(); 
      setError("");
      try{
          await logIn(email,password);
          navigate("/home");
      }catch(err){
         setError(err.message);
      }
  }
  
  const handleGoogleSignIn= async(e)=>{
    e.preventDefault(); 
    try{
     await googleSignIn(); 
     navigate("/home"); 
    }catch(err){
     setError(err.message); 
    }
  }
  return (
    <>
      <Card>
          <Card.Body >
            <h2 className='text-center mb-4'>Firebase Auth Login</h2>
            {error && <Alert>{error}</Alert> }
            <Form className='mb-4' onSubmit={handlelogIn}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Control type="email" placeholder='Email address'  required onChange={(e)=>setEmail(e.target.value)} ></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Control type="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}></Form.Control>
                </Form.Group>

                
                    <Button className='w-100' variant="primary" type="Submit">
                        Log In
                    </Button>
            </Form>
            
                <GoogleButton onClick={handleGoogleSignIn} className='g-btn w-100' type='dark'/>
           
           
          </Card.Body>
      </Card>
       <div className='w-100 text-center mt-2'>
           Don't have an Account?<Link to="/signup" >Sign Up</Link>
       </div>
     </>
      
  )
}

export default Login;

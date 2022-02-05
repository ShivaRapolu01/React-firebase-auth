import React, { useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../contexts/UserAuthContext';
import googlelogo from '../assets/google-66.png'
import githublogo from '../assets/github-66.png'
import twitterlogo from '../assets/twitter-66.png'
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
      <Card className='auth-box'>
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

                  <div className='d-flex w-100 justify-content-center'>
                    <Button className='w-50' variant="primary" type="Submit">
                            Log In
                        </Button>
                  </div>
            </Form>
             <div className='buttons'>
                <Button onClick={handleGoogleSignIn} variant='light'><img src={googlelogo}/></Button>
                <Button onClick={handleGoogleSignIn} variant='light'><img src={githublogo}/></Button>
                <Button onClick={handleGoogleSignIn} variant='light'><img src={twitterlogo}/></Button>
             </div>

             <div className='w-100 text-center mt-2'>
               Don't have an Account?<Link to="/signup" > Sign Up</Link>
            </div>
          </Card.Body>
      </Card>
      
     </>
      
  )
}

export default Login;

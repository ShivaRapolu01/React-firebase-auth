import React, { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../contexts/UserAuthContext';
import googlelogo from '../assets/google-66.png'
import githublogo from '../assets/github-66.png'
import twitterlogo from '../assets/twitter-66.png'
function Login() {
  const emailRef=useRef(); 
  const passwordRef=useRef(); 

const [passwordSent,setpasswordSent]=useState("");
  const [error,setError]=useState(""); 
  const {logIn,googleSignIn,forgotPassword}=useUserAuth();
 
  const navigate=useNavigate(); 

  const handlelogIn= async (e)=>{
      e.preventDefault(); 
      setError("");
      setpasswordSent("");
      const email=emailRef.current.value;
      const password=passwordRef.current.value;
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


  const handleforgotPassword=()=>{
      console.log("adhsfjka");
    const email=emailRef.current.value;
      if(email!==""){

          forgotPassword(email).then(()=>{emailRef.current.value="";passwordRef.current.value="";setpasswordSent("Check your mail")}).catch((err)=>{console.log(err);setError(err.message);});
      }
  }

  return (
    <>
      <Card className='auth-box'>
          <Card.Body >
            <h2 className='text-center mb-4'>Firebase Auth Login</h2>
            {error && <Alert>{error}</Alert> }
            {passwordSent && <Alert variant='success'>{passwordSent}</Alert> }
            <Form className='mb-4' onSubmit={handlelogIn}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Control type="email" placeholder='Email address'  required ref={emailRef} ></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Control type="password" placeholder="Password" required ref={passwordRef}></Form.Control>
                </Form.Group>

                  <div className='d-flex w-100 justify-content-center'>
                    <Button className='w-50' variant="primary" type="Submit">
                            Log In
                        </Button>
                  </div>
            </Form>
             <div className='buttons'>
                <Button onClick={handleGoogleSignIn} variant='light'><img src={googlelogo} alt="Google"/></Button>
                <Button onClick={handleGoogleSignIn} variant='light'><img src={githublogo} alt="github"/></Button>
                <Button onClick={handleGoogleSignIn} variant='light'><img src={twitterlogo} alt="twitter"/></Button>
             </div>
             <p style={{cursor:'pointer',textAlign:'center',marginTop:'4px'}} onClick={handleforgotPassword} >Forgot Password?</p>
             <div className='w-100 text-center mt-2'>
               Don't have an Account?<Link to="/signup" > Sign Up</Link>
            </div>
          </Card.Body>
      </Card>
      
     </>
      
  )
}

export default Login;

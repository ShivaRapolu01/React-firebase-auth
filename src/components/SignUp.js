import React, { useState ,useRef} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {Form,Button, Card, Alert} from 'react-bootstrap';
import { useUserAuth } from '../contexts/UserAuthContext';

function SignUp() {

   const nameRef=useRef();
   const emailRef=useRef(); 
   const passwordRef=useRef(); 


   const [error,setError]=useState(""); 
   const {signUp}=useUserAuth();
   const navigate=useNavigate(); 

   const handleSubmit= async (e)=>{
       e.preventDefault(); 
       setError("");
       try{
           const email=emailRef.current.value; 
           const password=passwordRef.current.value; 
           const name=nameRef.current.value; 
           await signUp(email,password,name);
           navigate("/");
       }catch(err){
          setError(err.message);
       }
   }
  return (
      <>
         <Card className='auth-box'>
             <Card.Body>
             <h2 className="mb-3 text-center">Firebase Auth Signup</h2>
             {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                type="text"
                placeholder="Name"
               ref={nameRef}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                type="email"
                placeholder="Email address"
                ref={emailRef}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordRef}
                />
            </Form.Group>

            <Form.Group className="mb-3" id="password-confirm">
              <Form.Control type="password" placeholder='Confirm password' required />
            </Form.Group>
            
                <Button className='w-100' variant="primary" type="Submit">
                Sign up
                </Button>
        
            </Form>
            <div className="p-4 box mt-3 text-center">
                Already have an account? <Link to="/">Log In</Link>
            </div> 
             </Card.Body>
         </Card>
       

      </>
     
  )
}

export default SignUp;

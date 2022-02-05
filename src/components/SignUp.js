import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {Form,Button, Card, Alert} from 'react-bootstrap';
import { useUserAuth } from '../contexts/UserAuthContext';

function SignUp() {
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
   const [error,setError]=useState(""); 
   const {signUp}=useUserAuth();
   const navigate=useNavigate(); 

   const handleSubmit= async (e)=>{
       e.preventDefault(); 
       setError("");
       try{
           await signUp(email,password);
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e)=>setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
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

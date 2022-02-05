import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <Card>
          <Card.Body >
            <h2 className='text-center mb-4'>Firebase Auth Login</h2>
            <Form className='mb-4'>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Control type="email" placeholder='Email address' required></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Control type="password" placeholder="Password" required></Form.Control>
                </Form.Group>

                
                    <Button className='w-100' variant="primary" type="Submit">
                        Log In
                    </Button>
            </Form>
            
                <GoogleButton className='g-btn w-100' type='dark'/>
           
           
          </Card.Body>
      </Card>
       <div className='w-100 text-center mt-2'>
       Don't have an Account?<Link to="/signup" >Sign Up</Link>
     </div>
     </>
      
  )
}

export default Login;

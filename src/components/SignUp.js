import React from 'react';
import {Link} from 'react-router-dom';
import {Form,Button, Card} from 'react-bootstrap';
function SignUp() {
  return (
      <>
         <Card >
             <Card.Body>
             <h2 className="mb-3">Firebase Auth Signup</h2>
            <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                type="email"
                placeholder="Email address"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                type="password"
                placeholder="Password"
                />
            </Form.Group>

            <Form.Group className="mb-3" id="password-confirm">
              <Form.Control type="password" placeholder='Confirm password' required />
            </Form.Group>
            
                <Button className='w-100' variant="primary" type="Submit">
                Sign up
                </Button>
        
            </Form>
             </Card.Body>
         </Card>
         <div className="p-4 box mt-3 text-center">
                Already have an account? <Link to="/">Log In</Link>
            </div> 

      </>
     
  )
}

export default SignUp;

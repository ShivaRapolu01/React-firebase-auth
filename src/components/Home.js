import React from 'react';
import { Button } from 'react-bootstrap';

function Home() {
  return (
      <>
       <div className='p-4 box mt-3 text-center'>Hello Welcome You are at Home</div>
       <div className='d-grid gap-2'>
           <Button variant='primary'>Log out</Button>
       </div>
      </>
  )
}

export default Home;

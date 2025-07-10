import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='d-flex justify-content-center my-3'>
      <div className='border rounded text-center p-4'>
        <h1 className='display-1 text-muted'>404</h1>
        <h2 className='mb-4'>Page not found</h2>
        <p className='text-muted mb-4'>
          The page you are looking for doesn't exist.
        </p>
        <Button as={Link} to='/' variant='primary'>
          Go to Home
        </Button>
      </div>
    </div>
  );
}

export default NotFound;

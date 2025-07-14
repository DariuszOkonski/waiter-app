import React from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Error({ message }) {
  return (
    <div className='d-flex justify-content-center my-3'>
      <div style={{ maxWidth: '500px', width: '100%' }}>
        <Alert variant='danger' className='text-center'>
          <Alert.Heading>Error</Alert.Heading>
          <p className='mb-3'>
            {message || 'Something went wrong. Please try again.'}
          </p>
          <Button as={Link} to='/' variant='outline-danger'>
            Go to Home
          </Button>
        </Alert>
      </div>
    </div>
  );
}

export default Error;

import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NoTables() {
  return (
    <div className='d-flex justify-content-center my-3'>
      <div
        className='border rounded text-center p-4'
        style={{ maxWidth: '500px' }}
      >
        <h1 className='display-4 text-primary mb-4'>No Tables Available</h1>
        <h2 className='mb-4'>Restaurant is currently empty</h2>
        <p className='text-muted mb-4'>
          There are no tables to display at the moment. Please check back later
          or contact the restaurant staff.
        </p>
        <Button as={Link} to='/about' variant='primary'>
          Go to About page
        </Button>
      </div>
    </div>
  );
}

export default NoTables;

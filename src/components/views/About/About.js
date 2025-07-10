import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='d-flex justify-content-center my-3'>
      <div className='border rounded text-center p-4'>
        <h1 className='display-4 text-primary mb-4'>About</h1>
        <h2 className='mb-4'>Welcome to Waiter.app</h2>
        <p className='text-muted mb-4'>
          This is a simple waiter application to help manage restaurant tables
          and orders efficiently.
        </p>
        <p className='text-muted mb-4'>
          <strong>Author:</strong> Dariusz Okoński
        </p>
        <Button as={Link} to='/' variant='primary'>
          Go to Home
        </Button>
      </div>
    </div>
  );
}

export default About;

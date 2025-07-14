import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function Table() {
  const { id } = useParams();

  console.log(id);

  return (
    <div className='d-flex justify-content-center my-3'>
      <div className='border rounded text-start p-4'>
        {' '}
        <h1 className='display-4 text-primary mb-4'>Table 1</h1>
        <div className='d-flex align-items-center mb-3'>
          <InputGroup className='w-auto' style={{ minWidth: '15%' }}>
            <Form.Label className='me-3 mb-0 fw-bold'>Status:</Form.Label>
          </InputGroup>

          <InputGroup>
            <Form.Select>
              <option value=''>Select status</option>
              <option value='free'>Free</option>
              <option value='busy'>Busy</option>
              <option value='reserved'>Reserved</option>
              <option value='cleaning'>Cleaning</option>
            </Form.Select>
          </InputGroup>
        </div>
        <div className='d-flex align-items-center mb-3'>
          <InputGroup className='w-auto' style={{ minWidth: '15%' }}>
            <Form.Label className='me-3 mb-0 fw-bold'>People:</Form.Label>
          </InputGroup>
          <InputGroup>
            <Form.Control type='number' />
            <InputGroup.Text>/</InputGroup.Text>
            <Form.Control type='number' />
          </InputGroup>
        </div>
        <div className='d-flex align-items-center mb-3'>
          <InputGroup className='w-auto' style={{ minWidth: '15%' }}>
            <Form.Label className='me-3 mb-0 fw-bold'>Bill:</Form.Label>
          </InputGroup>
          <InputGroup>
            <Form.Control type='number' />
          </InputGroup>
        </div>
        <Button as={Link} to='/' variant='primary'>
          Go to Home
        </Button>
      </div>
    </div>
  );
}

export default Table;

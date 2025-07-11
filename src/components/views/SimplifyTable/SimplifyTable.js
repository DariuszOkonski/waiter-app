import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../../utils/utils';

function SimplifyTable({ tableName, status, id }) {
  return (
    <div className='d-flex align-items-center mb-2 pb-2 border-bottom'>
      <InputGroup>
        <Form.Label className='me-3 mb-0 fw-bold'>{tableName}</Form.Label>
        <Form.Label className='me-3 mb-0 fw-bold'>Status: </Form.Label>
        <Form.Label className='me-3 mb-0'>
          {capitalizeFirstLetter(status)}
        </Form.Label>
      </InputGroup>

      <InputGroup className='justify-content-end'>
        <Button as={Link} to={`/table/${id}`} variant='primary'>
          Show more
        </Button>
      </InputGroup>
    </div>
  );
}

export default SimplifyTable;

import { Alert } from 'react-bootstrap';

function Error({ message }) {
  return (
    <div className='d-flex justify-content-center my-3'>
      <div style={{ maxWidth: '500px', width: '100%' }}>
        <Alert variant='danger' className='text-center'>
          <Alert.Heading>Error</Alert.Heading>
          <p className='mb-3'>
            {message || 'Something went wrong. Please try again.'}
          </p>
        </Alert>
      </div>
    </div>
  );
}

export default Error;

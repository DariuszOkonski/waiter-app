import { Spinner } from 'react-bootstrap';

function Loading() {
  return (
    <div
      className='position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 9999,
      }}
    >
      <Spinner animation='border' variant='light' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;

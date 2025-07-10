import React from 'react';
import SimplifyTable from '../../views/SimplifyTable/SimplifyTable';

function Home() {
  return (
    <div className='my-3'>
      <div className='border rounded text-start p-4'>
        <h1 className='display-4 text-primary mb-4'>All tables</h1>
        <SimplifyTable />
        <SimplifyTable />
        <SimplifyTable />
      </div>
    </div>
  );
}

export default Home;

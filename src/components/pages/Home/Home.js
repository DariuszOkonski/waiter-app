import React from 'react';
import NoTables from '../../views/NoTables/NoTables';
import SimplifyTable from '../../views/SimplifyTable/SimplifyTable';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';

function Home() {
  const tables = useSelector(getAllTables);

  const renderTables = () => {
    return tables.map((table) => (
      <SimplifyTable
        key={table.id}
        tableName={table.name}
        status={table.status}
        id={table.id}
      />
    ));
  };

  const renderNoTables = () => {
    return <NoTables />;
  };

  return (
    <div className='my-3'>
      <div className='border rounded text-start p-4'>
        {tables.length ? (
          <React.Fragment>
            <h1 className='display-4 text-primary mb-4'>All tables</h1>
            {renderTables()}
          </React.Fragment>
        ) : (
          renderNoTables()
        )}
      </div>
    </div>
  );
}

export default Home;

import { useSelector } from 'react-redux';
import SimplifyTable from '../../views/SimplifyTable/SimplifyTable';
import { getAllTables } from '../../../redux/tablesRedux';

function Home() {
  const tables = useSelector(getAllTables);

  console.log(tables);

  return (
    <div className='my-3'>
      <div className='border rounded text-start p-4'>
        <h1 className='display-4 text-primary mb-4'>All tables</h1>
        {tables.map((table) => (
          <SimplifyTable
            key={table.id}
            tableName={table.name}
            status={table.status}
            id={table.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

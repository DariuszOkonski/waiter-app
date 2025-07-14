import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getAllStatuses } from '../../../redux/statusesRedux';
import {
  getSingleTable,
  updateSingleTableStore,
} from '../../../redux/tablesRedux';
import Error from '../../views/Error/Error';

function Table() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const table = useSelector((state) => getSingleTable(state, id));
  const statuses = useSelector(getAllStatuses);

  if (!table) {
    return (
      <Error message={`Table with id:${id} does not exists`} isGoHomeVisible />
    );
  }

  const handleStatus = async (e) => {
    const newTable = { ...table, status: e.target.value };
    dispatch(updateSingleTableStore(newTable));
  };

  return (
    <div className='d-flex justify-content-center my-3'>
      <div className='border rounded text-start p-4'>
        {' '}
        <h1 className='display-4 text-primary mb-4'>{table.name}</h1>
        <div className='d-flex align-items-center mb-3'>
          <InputGroup className='w-auto' style={{ minWidth: '15%' }}>
            <Form.Label className='me-3 mb-0 fw-bold'>Status:</Form.Label>
          </InputGroup>

          <InputGroup>
            <Form.Select value={table.status} onChange={handleStatus}>
              {statuses.map((status) => (
                <option value={status.name}>{status.name}</option>
              ))}
            </Form.Select>
          </InputGroup>
        </div>
        <div className='d-flex align-items-center mb-3'>
          <InputGroup className='w-auto' style={{ minWidth: '15%' }}>
            <Form.Label className='me-3 mb-0 fw-bold'>People:</Form.Label>
          </InputGroup>
          <InputGroup>
            <Form.Control type='number' value={table.people} />
            <InputGroup.Text>/</InputGroup.Text>
            <Form.Control type='number' value={table.people} />
          </InputGroup>
        </div>
        {table.status === 'busy' && (
          <div className='d-flex align-items-center mb-3'>
            <InputGroup className='w-auto' style={{ minWidth: '15%' }}>
              <Form.Label className='me-3 mb-0 fw-bold'>Bill:</Form.Label>
            </InputGroup>
            <InputGroup>
              <Form.Control type='number' value={table.bill} />
            </InputGroup>
          </div>
        )}
        <Button as={Link} to='/' variant='primary'>
          Update
        </Button>
      </div>
    </div>
  );
}

export default Table;

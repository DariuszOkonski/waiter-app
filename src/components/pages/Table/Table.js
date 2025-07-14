import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getAllStatuses } from '../../../redux/statusesRedux';
import {
  getSingleTable,
  updateSingleTableStore,
} from '../../../redux/tablesRedux';
import Error from '../../views/Error/Error';
import { getPeople } from '../../../redux/peopleRedux';

function Table() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const table = useSelector((state) => getSingleTable(state, id));
  const statuses = useSelector(getAllStatuses);
  const people = useSelector(getPeople);

  if (!table) {
    return (
      <Error message={`Table with id:${id} does not exists`} isGoHomeVisible />
    );
  }

  const handleMaxPeople = (e) => {
    const maxPeople = parseInt(e.target.value);
    let tablePeople = parseInt(table.people);

    if (maxPeople < people.min || maxPeople > people.max) {
      return alert(
        `Max People can not be less than ${people.min} and more than ${people.max}`
      );
    }

    if (tablePeople > maxPeople) {
      tablePeople = maxPeople;
    }

    dispatch(
      updateSingleTableStore({
        ...table,
        people: tablePeople.toString(),
        maxPeople: maxPeople.toString(),
      })
    );
  };

  const handleBill = (e) => {
    dispatch(updateSingleTableStore({ ...table, bill: e.target.value }));
  };

  const handleNumberOfPeople = (e) => {
    const numberOfPeople = parseInt(e.target.value);

    if (numberOfPeople < people.min || numberOfPeople > table.maxPeople) {
      return alert(
        `People can not be less than ${people.min} and more than ${table.maxPeople}`
      );
    }

    dispatch(updateSingleTableStore({ ...table, people: e.target.value }));
  };

  const handleStatus = async (e) => {
    console.log('e.target.value: ', e.target.value);
    const newTable = { ...table, status: e.target.value };

    if (e.target.value === 'cleaning' || e.target.value === 'free') {
      newTable.people = '0';
    }

    if (e.target.value === 'busy') {
      newTable.bill = '0';
    }

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
            <Form.Control
              type='number'
              value={table.people}
              onChange={handleNumberOfPeople}
            />
            <InputGroup.Text>/</InputGroup.Text>
            <Form.Control
              type='number'
              value={table.maxPeople}
              onChange={handleMaxPeople}
            />
          </InputGroup>
        </div>
        {table.status === 'busy' && (
          <div className='d-flex align-items-center mb-3'>
            <InputGroup className='w-auto' style={{ minWidth: '15%' }}>
              <Form.Label className='me-3 mb-0 fw-bold'>Bill:</Form.Label>
            </InputGroup>
            <InputGroup>
              <Form.Control
                type='number'
                value={table.bill}
                onChange={handleBill}
                min={0}
              />
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

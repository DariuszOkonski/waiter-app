import { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getPeople } from '../../../redux/peopleRedux';
import { getAllStatuses } from '../../../redux/statusesRedux';
import { getSingleTable } from '../../../redux/tablesRedux';
import useSaveTable from '../../../hooks/useSaveTable';
import Loading from '../../common/Loading/Loading';
import Error from '../../views/Error/Error';

function Table() {
  const { id } = useParams();
  const [localTable, setLocalTable] = useState({});
  const navigate = useNavigate();

  const [isLoading, error, saveTableData] = useSaveTable();

  const table = useSelector((state) => getSingleTable(state, id));
  const statuses = useSelector(getAllStatuses);
  const people = useSelector(getPeople);

  useEffect(() => {
    if (table) {
      setLocalTable(table);
    }
  }, [table]);

  if (!table) {
    return <Navigate to='/' replace />;
  }

  const handleMaxPeople = (e) => {
    const maxPeople = parseInt(e.target.value);
    let tablePeople = parseInt(localTable.people);
    if (maxPeople < people.min || maxPeople > people.max) {
      return alert(
        `Max People can not be less than ${people.min} and more than ${people.max}`
      );
    }
    if (tablePeople > maxPeople) {
      tablePeople = maxPeople;
    }
    setLocalTable({
      ...localTable,
      people: tablePeople.toString(),
      maxPeople: maxPeople.toString(),
    });
  };

  const handleBill = (e) => {
    setLocalTable({ ...localTable, bill: e.target.value });
  };

  const handleNumberOfPeople = (e) => {
    const numberOfPeople = parseInt(e.target.value);
    if (numberOfPeople < people.min || numberOfPeople > localTable.maxPeople) {
      return alert(
        `People can not be less than ${people.min} and more than ${localTable.maxPeople}`
      );
    }
    setLocalTable({ ...localTable, people: e.target.value });
  };

  const handleStatus = async (e) => {
    const newTable = { ...localTable, status: e.target.value };
    if (e.target.value === 'cleaning' || e.target.value === 'free') {
      newTable.people = '0';
    }
    if (e.target.value === 'busy') {
      newTable.bill = '0';
    }

    setLocalTable(newTable);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await saveTableData(localTable);
    navigate('/tables');
  };

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <div className='d-flex justify-content-center my-3'>
      {isLoading && <Loading />}
      <div className='border rounded text-start p-4'>
        {' '}
        <h1 className='display-4 text-primary mb-4'>{table.name}</h1>
        <Form onSubmit={handleSubmit}>
          <div className='d-flex align-items-center mb-3'>
            <InputGroup className='w-auto' style={{ minWidth: '15%' }}>
              <Form.Label className='me-3 mb-0 fw-bold'>Status:</Form.Label>
            </InputGroup>

            <InputGroup>
              <Form.Select value={localTable.status} onChange={handleStatus}>
                {statuses.map((status) => (
                  <option key={status.id} value={status.name}>
                    {status.name}
                  </option>
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
                value={localTable.people}
                onChange={handleNumberOfPeople}
              />
              <InputGroup.Text>/</InputGroup.Text>
              <Form.Control
                type='number'
                value={localTable.maxPeople}
                onChange={handleMaxPeople}
              />
            </InputGroup>
          </div>
          {localTable.status === 'busy' && (
            <div className='d-flex align-items-center mb-3'>
              <InputGroup className='w-auto' style={{ minWidth: '15%' }}>
                <Form.Label className='me-3 mb-0 fw-bold'>Bill:</Form.Label>
              </InputGroup>
              <InputGroup>
                <Form.Control
                  type='number'
                  value={localTable.bill}
                  onChange={handleBill}
                  min={0}
                />
              </InputGroup>
            </div>
          )}
          <Button type='submit' variant='primary'>
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Table;

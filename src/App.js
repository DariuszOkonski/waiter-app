import { Container, Table } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import NotFound from './components/views/NotFound/NotFound';

function App() {
  return (
    <div>
      <h1 className='text-danger bg-success text-center'>Waiter App</h1>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/table/:id' element={<Table />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

// TODO: to modify data on json-server
// const options = {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     id: '1',
//     status: 'busy',
//     peopleAmount: 3,
//     maxPeopleAmount: 4,
//     bill: 45
//   }),
// };

// fetch('http://localhost:3131/tables/1', options)

// const options = {
//   method: 'PATCH',

//   headers: {
//     'Content-Type': 'application/json'
//   },

//   body: JSON.stringify({
//     status: 'busy'
//   })
// };

// fetch('http://localhost:3131/tables/1', options)

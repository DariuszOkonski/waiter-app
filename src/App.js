import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Table from './components/pages/Table/Table';
import About from './components/views/About/About';
import Footer from './components/views/Footer/Footer';
import Header from './components/views/Header/Header';
import NotFound from './components/views/NotFound/NotFound';
import Loading from './components/common/Loading/Loading';
import { fetchTables } from './redux/tablesRedux';
import { fetchStatuses } from './redux/statusesRedux';
import { fetchPeople } from './redux/peopleRedux';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // setIsLoading(true);
    const fetchData = async () => {
      try {
        await dispatch(fetchTables());
        await dispatch(fetchStatuses());
        await dispatch(fetchPeople());
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      {isLoading && <Loading />}
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/table/:id' element={<Table />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;

// TODO: to modify data on json-server, 13:00
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

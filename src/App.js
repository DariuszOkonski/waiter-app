import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Table from './components/pages/Table/Table';
import About from './components/views/About/About';
import Footer from './components/views/Footer/Footer';
import Header from './components/views/Header/Header';
import NotFound from './components/views/NotFound/NotFound';
import useSetAllData from './hooks/useSetAllData';
import Loading from './components/common/Loading/Loading';
import Error from './components/views/Error/Error';

function App() {
  const [isLoading, error] = useSetAllData();

  if (error) {
    return <Error message={error.message} />;
  }

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

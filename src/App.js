import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/common/Loading/Loading';
import Home from './components/pages/Home/Home';
import Table from './components/pages/Table/Table';
import About from './components/views/About/About';
import Error from './components/views/Error/Error';
import Footer from './components/views/Footer/Footer';
import Header from './components/views/Header/Header';
import NotFound from './components/views/NotFound/NotFound';
import useSetAllData from './hooks/useSetAllData';

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

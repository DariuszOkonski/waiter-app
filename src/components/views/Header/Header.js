import { Container } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';

function Header() {
  return (
    <div className='bg-primary'>
      <Container>
        <NavBar />
      </Container>
    </div>
  );
}

export default Header;

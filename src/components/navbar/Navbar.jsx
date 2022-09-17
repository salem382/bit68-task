import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { faMagnifyingGlass, faBars, faSuitcase} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './navbar.scss';
import {Link} from 'react-router-dom';


function BasicExample() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Link id="RouterNavLink" to='/'>
          <Navbar.Brand>
              <img src='/imgs/header/logo.svg' alt=''/>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <FontAwesomeIcon className='text-white fs-3' icon={faBars}/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#link">Mac</Nav.Link>
            <Nav.Link href="#link">iPad</Nav.Link>
            <Nav.Link href="#link">iPhone</Nav.Link>
            <Nav.Link href="#link">Watch</Nav.Link>
            <Nav.Link href="#link">TV</Nav.Link>
            <Nav.Link href="#link">Accessories</Nav.Link>
            <Nav.Link href="#link">Offers</Nav.Link>
            <Nav.Link href="#link" className='support'>Support</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
            <Nav.Link href="#link" className='me-5'>Location</Nav.Link>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faMagnifyingGlass}/></Nav.Link>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faUser}/></Nav.Link>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faSuitcase} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Features from './Features';
import Contact from './Contact';

function App() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary ">
    <Container>
      <Navbar.Brand className='text-primary'> <h2> <Link to={'/'} className='text-black text-decoration-none'>Restaurant</Link> </h2> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav " className='justify-content-end'>
        <Nav >
          <Nav.Link  > <Link to={'/'} className='text-black text-decoration-none'>Home</Link> </Nav.Link>
          <Nav.Link  > <Link to={'/about'} className='text-black text-decoration-none'>About</Link> </Nav.Link>
          <Nav.Link  > <Link to={'/menu'} className='text-black text-decoration-none'>Menu</Link> </Nav.Link>
          <Nav.Link  > <Link to={'/features'} className='text-black text-decoration-none'>Features</Link> </Nav.Link>
          <Nav.Link  > <Link to={'/contact'} className='text-black text-decoration-none'>Contact</Link> </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/menu' element={<Menu />} />
    <Route path='/features' element={<Features />} />
    <Route path='/contact' element={<Contact />} />
    
  </Routes>
  </>
  );
}

export default App;

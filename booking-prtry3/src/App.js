import './Css/App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import  Home from "./Components/Pages/Home";
import  ArtistPage from "./Components/Pages/ArtistPage";
import SearchArtist from "./Components/Pages/SearchArtist";
import AboutUs from "./Components/Pages/AboutUs";
import SignUp from "./Components/Pages/SignUp";
import LogIn from "./Components/Pages/LogIn";
import NavBar from './Components/NavBar';
import Footer from './Components/Pages/Footer';


function App() {
  //const IsLoggedIn = false;
  return (
    <>
    {/* <div className='App'> */}
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchArtist />} />
          <Route path="/artistpage/:id" element={<ArtistPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="*" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
    {/* {[false].map((expand) => (
      <Navbar  bg="dark" variant="dark" key={expand} expand={expand} className=''>
        <Container fluid>
          <Navbar.Brand href='/'>BOOKING PR</Navbar.Brand>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav className="me-auto">
            <Nav.Link href="search">Search</Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                BOOKING PR
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                <LinkContainer to='/'onClick={() => (this.expand = '')}>
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                <LinkContainer id="OC_signup" to='/signup'onClick={() => (this.expand = '')}>
                    <Nav.Link>Sign up</Nav.Link>
                  </LinkContainer>
                  <LinkContainer id="OC_login" to='/login'onClick={() => (this.expand = '')}>
                    <Nav.Link>Log in</Nav.Link>
                  </LinkContainer>
                  <LinkContainer  to='/aboutus'onClick={() => (this.expand = '')}>
                    <Nav.Link>About Us</Nav.Link>
                  </LinkContainer>
                  <LinkContainer  to='/'onClick={() => (this.expand = '')}>
                    <Nav.Link>Sign out</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
      </Navbar>
      ))} */}
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchArtist />} />
          <Route path="/artistpage/:id" element={<ArtistPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="*" element={<Home />} />
      </Routes> */}
      {/* </div> */}
    </>
  );
}

export default App;

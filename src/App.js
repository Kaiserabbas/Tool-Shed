import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Headline from './components/Headline';
import FetchActivity from './components/FetchActivity';
import FetchIP from './components/FetchIP';
import QuoteDisplay from './components/QuoteDisplay';
import RandomPasswordGenerator from './components/GeneratePassword';
import WordDefinitions from './components/Dictionary';
import WeatherComponent from './components/Weather';
import ZipCodeInfo from './components/ZipCode';
import ContactPage from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.png';
import './components/App.css';

function App() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="navbar">
        <button type="button" className="refresh-button" onClick={refreshPage}>
          <i className="material-icons">refresh</i> Refresh
        </button>
        <Navbar.Brand as={Link} to="/" className="nav-brand">
          Home
        </Navbar.Brand>
        <Link to="/contact" className="contact">
          Contact
        </Link>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="mr-auto">
            <NavDropdown title="Find Tools" id="navbarNavDropdown">
              <NavDropdown.Item as={Link} to="/fetchActivity">
                Random Activity Challenge
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/fetchIp">
                Find Your IP
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/quote">
                Amazing Quotes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/randomPassword">
                Random Password Generator
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dictionary">
                Dictionary
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/weather">
                Find Weather Updates
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/zipCode">
                ZipCode Details
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <img src={logo} alt="Logo" className="logo" />
      </Navbar>
      <Routes>
        <Route path="/" element={<Headline />} />
        <Route path="/fetchActivity" element={<FetchActivity />} />
        <Route path="/fetchIp" element={<FetchIP />} />
        <Route path="/quote" element={<QuoteDisplay />} />
        <Route path="/randomPassword" element={<RandomPasswordGenerator />} />
        <Route path="/dictionary" element={<WordDefinitions />} />
        <Route path="/weather" element={<WeatherComponent />} />
        <Route path="/zipCode" element={<ZipCodeInfo />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;

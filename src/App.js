import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Headline from './components/Headline';
import FetchActivity from './components/FetchActivity';
import FetchIP from './components/FetchIP';
import QuoteDisplay from './components/QuoteDisplay';
import RandomPasswordGenerator from './components/GeneratePassword';
import WordDefinitions from './components/Dictionary';
import './components/App.css';

function App() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <nav className="nav">
        <Link className="nav-link active" to="/">
          Home
        </Link>
        <Link className="nav-link" to="fetchActivity">
          Random Activity Challenge
        </Link>
        <Link className="nav-link" to="fetchIp">
          Find Your IP
        </Link>
        <Link className="nav-link" to="quote">
          Random Quote
        </Link>
        <Link className="nav-link" to="randomPassword">
          Generate Random Passwords
        </Link>
        <Link className="nav-link" to="dictionary">
          {' '}
          Dictionary{' '}
        </Link>
        <button className="refresh-button" onClick={refreshPage}>
          <i className="material-icons">refresh</i> Refresh
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Headline />} />
        <Route path="/fetchActivity" element={<FetchActivity />} />
        <Route path="/fetchIp" element={<FetchIP />} />
        <Route path="/quote" element={<QuoteDisplay />} />
        <Route path="/randomPassword" element={<RandomPasswordGenerator />} />
        <Route path="/dictionary" element={<WordDefinitions />} />
      </Routes>
    </>
  );
}

export default App;

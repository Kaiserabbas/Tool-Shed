import React, { useState } from 'react';

function ZipCodeInfo() {
  const [zipCode, setZipCode] = useState('');
  const [info, setInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchZipInfo = async () => {
    try {
      setErrorMessage('');
      const response = await fetch(`http://api.zippopotam.us/us/${zipCode}`);
      if (response.status === 404) {
        setErrorMessage('Invalid zip code. Please enter a valid zip code.');
        setInfo(null);
        return;
      }
      const data = await response.json();
      setInfo(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="zipcode">
      <h2>Zip Code Information</h2>
      <input
        type="text"
        placeholder="Enter zip code"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />
      <button onClick={fetchZipInfo}>Fetch Info</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {info && (
        <div>
          <p>Post Code: {info['post code']}</p>
          <p>Country: {info.country}</p>
          <p>Country Abbreviation: {info['country abbreviation']}</p>
          <p>Place Name: {info.places[0]['place name'] || 'N/A'}</p>
          <p>State: {info.places[0].state || 'N/A'}</p>
          <p>
            State Abbreviation: {info.places[0]['state abbreviation'] || 'N/A'}
          </p>
          <p>Latitude: {info.places[0].latitude || 'N/A'}</p>
          <p>Longitude: {info.places[0].longitude || 'N/A'}</p>
        </div>
      )}
    </div>
  );
}

export default ZipCodeInfo;

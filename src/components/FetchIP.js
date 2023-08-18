import React, { useState } from 'react';

function FetchIP() {
  const [ip, setIp] = useState(null);

  const fetchIp = () => {
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((ipData) => {
        const userIP = ipData.ip;
        fetch(
          `http://api.ipstack.com/${userIP}?access_key=4126daf377ad8e9e9cf89c98900625ae`
        )
          .then((response) => response.json())
          .then((apiData) => {
            setIp({
              ip: apiData.ip,
              hostname: apiData.hostname,
              continent_name: apiData.continent_name,
              country_name: apiData.country_name,
              region_name: apiData.region_name,
              city_name: apiData.city,
              country_flag: apiData.location.country_flag,
              language: apiData.location.languages[0].name,
              timezone: apiData.time_zone ? apiData.time_zone.code : 'N/A',
              currency: apiData.currency
                ? apiData.currency.symbol_native
                : 'N/A',
              connection: apiData.connection ? apiData.connection.isp : 'N/A', // Check for connection existence
            });
          });
      });
  };

  return (
    <div className="ip">
      <h3>Fetch your IP Address:</h3>
      <button type="button" onClick={fetchIp}>
        Fetch IP
      </button>
      {ip ? (
        <p>
          {' '}
          <strong>IP Address:</strong> {ip.ip}
        </p>
      ) : null}
      {ip ? (
        <p>
          {' '}
          <strong>Hostname:</strong> {ip.hostname}
        </p>
      ) : null}
      {ip ? (
        <p>
          {' '}
          <strong>Continent Name: </strong>
          {ip.continent_name}
        </p>
      ) : null}
      {ip && ip.country_flag ? (
        <p>
          <strong>Country Flag:</strong>{' '}
          <img src={ip.country_flag} alt="Country Flag" />
        </p>
      ) : null}
      {ip ? (
        <p>
          {' '}
          <strong>Country:</strong> {ip.country_name}
        </p>
      ) : null}
      {ip ? (
        <p>
          {' '}
          <strong>Region:</strong> {ip.region_name}
        </p>
      ) : null}
      {ip ? (
        <p>
          {' '}
          <strong>City:</strong> {ip.city_name}
        </p>
      ) : null}
      {ip ? (
        <p>
          {' '}
          <strong>Language:</strong> {ip.language}
        </p>
      ) : null}
      {ip ? (
        <p>
          {' '}
          <strong>Timezone:</strong> {ip.timezone}
        </p>
      ) : null}
      {ip ? (
        <p>
          {' '}
          <strong>Currency: </strong>
          {ip.currency}
        </p>
      ) : null}
      {ip ? (
        <p>
          {' '}
          <strong>Connection:</strong> {ip.connection}
        </p>
      ) : null}
    </div>
  );
}

export default FetchIP;

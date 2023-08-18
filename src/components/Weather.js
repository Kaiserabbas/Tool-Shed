import React, { useState, useEffect } from 'react';

const unsplashAccessKey = 'XgK8K70K3KIJdzJUlEQRm-GgqODayfcdNLPnOtjo81o';

const WeatherComponent = () => {
  const [city, setCity] = useState('');
  const [units, setUnits] = useState('metric');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = '0fd89f3c751f217b80034bb11909263a';

  const capitalizeFLetter = (city) => {
    return city[0].toUpperCase() + city.slice(1);
  };

  const setBackgroundFromUnsplash = (city) => {
    const query = encodeURIComponent(`${city} city`);
    const unsplashUrl = `https://api.unsplash.com/photos/random?query=${query}&client_id=${unsplashAccessKey}`;

    fetch(unsplashUrl)
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.urls.regular;
        document.body.style.backgroundImage = `url(${imageUrl})`;
      })
      .catch((error) => {
        console.error('Error fetching background image:', error);
      });
  };

  const getWeather = async (city, units) => {
    try {
      const capitalizedCity = capitalizeFLetter(city);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${capitalizedCity}&appid=${apiKey}&units=${units}`;
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
        setBackgroundFromUnsplash(city);
      } else {
        setWeatherData(null);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  const temperatureColor = (temperature) => {
    if (temperature > 30) {
      return 'red';
    } if (temperature <= 30 && temperature >= 10) {
      return 'green';
    }
    return 'blue';
  };

  useEffect(() => {
    if (city && weatherData) {
      setBackgroundFromUnsplash(city);
    }
  }, [city, weatherData]);
  return (
    <div className="weather">
      <h2>Weather Information</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          getWeather(city, units);
        }}
      >
        <input
          placeholder="Enter Your City"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <div className="units">
          <input
            type="checkbox"
            checked={units === 'metric'}
            onChange={() => setUnits('metric')}
          />
          Metric
          <input
            type="checkbox"
            checked={units === 'imperial'}
            onChange={() => setUnits('imperial')}
          />
          Imperial
        </div>
        <button type="submit">Fetch Weather</button>
      </form>
      {weatherData ? (
        <div>
          <p>
            Temperature: {weatherData.main.temp}°{getUnitSymbol(units)}
          </p>
          <p style={{ color: temperatureColor(weatherData.main.temp) }}>
            {weatherData.weather[0].description}
          </p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <img
            className="icon"
            src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].description}
          />
        </div>
      ) : (
        <p>Error fetching weather data. Please try again later.</p>
      )}
    </div>
  );
};

function getUnitSymbol(units) {
  switch (units) {
    case 'metric':
      return 'C';
    case 'imperial':
      return 'F';
    default:
      return '';
  }
}

export default WeatherComponent;

import './index.css';
import { TailSpin } from 'react-loader-spinner'
import { useEffect, useState } from 'react';
import CurrentWeatherSection from '../CurrentWeatherSection';
import ForeCastSection from '../ForeCastSection';

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
};

function WeatherDashBoard() {
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const [cityName, setCityName] = useState('new york');
  const [unit, setUnit] = useState('metric');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentCityName, setCurrentCityName] = useState('');
  const [forecast, setForecast] = useState(null);

  // Fetch weather data on initial render
  useEffect(() => {
    getWeatherData();
  }, [unit]);

  const getWeatherData = async () => {
    setApiStatus(apiStatusConstants.inProgress);

    const apiKey = 'b9204471b2c3b1127d17c57d322527bc';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${unit}`;
    const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json', 
        },
      };
      
    try {
      const response = await fetch(apiUrl, options);
      if (response.ok) {
        const fetchedData = await response.json();
        setApiStatus(apiStatusConstants.success);
        setCurrentCityName(fetchedData.city.name);
        setCurrentWeather(fetchedData.list[0]);
        setForecast(fetchedData.list);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
      setApiStatus(apiStatusConstants.failure);
    }
  };

  // Filter forecast data based on the time of the first forecast object
  const filteredForecastByFirstObjTime = (forecastDataList) => {
    if (!forecastDataList) {
      return [];
    }
    const firstObjTime = forecastDataList[0].dt_txt.split(' ')[1];
    const filteredObj = forecastDataList.filter(data => data.dt_txt.includes(firstObjTime));
    return filteredObj;
  };

  // Toggle unit
  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  // Handle form submission for city search
  const onSubmitData = (event) => {
    event.preventDefault();
    getWeatherData();
  };

  // Render the current weather and forecast view
  const renderWeatherView = () => {
    const filteredForecast = filteredForecastByFirstObjTime(forecast);
    return (
      <>
        <CurrentWeatherSection currentCityName={currentCityName} currentWeather={currentWeather} unit={unit} />
        <ForeCastSection filteredForeCast={filteredForecast} unit={unit} />
      </>
    );
  };

  // Render failure view
  const renderWeatherFailureView = () => (
    <div className="failure-container">
      <img src="https://i.ibb.co/GswLjyh/data-search-found-illustration-concept-108061-574.jpg" alt="request failed" />
      <h1>Request Failed</h1>
      <p>Ensure the city name</p>
    </div>
  );

  // Render loading view
  const renderLoadingView = () => (
    <div className="weather-loader-container">
      <TailSpin type="ThreeDots" color="#0b69ff" height={50} width={50} />
    </div>
  );

  // Render the dashboard based on API status
  const renderDashboard = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderWeatherView();
      case apiStatusConstants.failure:
        return renderWeatherFailureView();
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      default:
        return null;
    }
  };

  return (
    <div className="bg-container">
      <div className="dashboard-container" onSubmit={onSubmitData}>
        <div className="weather-header">
          <h1 className="weather-dash-heading">Weather Dashboard</h1>
          <div className="switch">
            {unit === 'metric' ? (
              <div className="switch-celsius" onClick={toggleUnit}>
                <div className="switch-toggle"></div>
                <p>C</p>
              </div>
            ) : (
              <div className="switch-fahrenheit" onClick={toggleUnit}>
                <p>F</p>
                <div className="switch-toggle"></div>
              </div>
            )}
          </div>
        </div>
        <form className="search-container">
          <input
            type="search"
            placeholder="Enter the city name..."
            value={cityName}
            className="search-field"
            onChange={(e) => setCityName(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        {renderDashboard()}
      </div>
    </div>
  );
}

export default WeatherDashBoard;

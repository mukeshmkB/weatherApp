import "./index.css";

// Mapping weather icons based on weather codes
const weatherIcons = {
  "01d": "https://i.ibb.co/Sv7NfpZ/sunny-img.png",
  "01n": "https://i.ibb.co/SX5npVx/pngwing-com-10.png",
  "02d": "https://i.ibb.co/BKmxYdf/pngwing-com-1.png",
  "02n": "https://i.ibb.co/TPRrC9k/pngwing-com-2.png",
  "03d": "https://i.ibb.co/0CbzTL0/218706.png",
  "03n": "https://i.ibb.co/0CbzTL0/218706.png",
  "04d": "https://i.ibb.co/CMrdQ01/85502.png",
  "04n": "https://i.ibb.co/CMrdQ01/85502.png",
  "09d": "https://i.ibb.co/n7wn5xp/pngwing-com-6.png",
  "09n": "https://i.ibb.co/n7wn5xp/pngwing-com-6.png",
  "10d": "https://i.ibb.co/t3QXNDK/rain-with-sun-img.png",
  "10n": "https://i.ibb.co/LvmCyjt/pngwing-com-8.png",
  "11d": "https://i.ibb.co/y0qRTPZ/pngwing-com-4.png",
  "11n": "https://i.ibb.co/y0qRTPZ/pngwing-com-4.png",
  "13d": "https://i.ibb.co/8cBmNcs/pngwing-com-5.png",
  "13n": "https://i.ibb.co/8cBmNcs/pngwing-com-5.png",
  "15d": "https://i.ibb.co/rGPBFnd/pngwing-com-11.png",
  "15n": "https://i.ibb.co/rGPBFnd/pngwing-com-11.png"
};

const CurrentWeatherSection = ({ currentWeather, currentCityName, unit }) => {
  return (
    <div className="current-weather-info">
      <div className="main-content">
        <h1 className="city-name">Current Weather in {currentCityName}</h1>
        <p className="current-temp">{Math.ceil(currentWeather.main.temp)}&deg;{unit === 'metric' ? 'C' : 'F'}</p>
        <p className="weather-description">{currentWeather.weather[0].description}</p>
      </div>
      <div className="weather-icon-container">
        <img src={weatherIcons[currentWeather.weather[0].icon]} alt="Weather Icon" />
        <p className="current-temp icon-temp">{Math.ceil(currentWeather.main.temp)}&deg;{unit === 'metric' ? 'C' : 'F'}</p>
      </div>
    </div>
  );
};

export default CurrentWeatherSection;

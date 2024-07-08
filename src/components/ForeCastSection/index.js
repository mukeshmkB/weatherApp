import './index.css';

const ForeCastSection = ({ filteredForeCast, unit }) => {

 const renderForeCastCard = (data) => {

    const date = new Date(data.dt_txt);
    const day = date.toLocaleDateString("en-IN", { weekday: "short" });
    const highTemp = Math.ceil(data.main.temp_max);
    const lowTemp = Math.ceil(data.main.temp_min);

    return (
      <li className="forecast-card" key={data.dt}>
        <h2 className="day">{day}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="Weather Icon"
        />
        <div className="temp-container">
          <p className="high-temp">High: {highTemp}&deg;{unit === 'metric' ? 'C' : 'F'}</p>
          <p className="low-temp">Low: {lowTemp}&deg;{unit === 'metric' ? 'C' : 'F'}</p>
        </div>
      </li>
    );
  }


  return (
    <div className="forecast-section">
      <h1>5-Day Forecast</h1>
      <ul className="fc-card-items">
        {filteredForeCast.map(data => renderForeCastCard(data))}
      </ul>
    </div>
  );
};

export default ForeCastSection;

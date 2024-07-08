# Weather Dashboard Application

This is a web application that displays current weather and 5-day forecast for a specified city using data from OpenWeatherMap API.

## Features

- Displays current weather information including temperature, description, and city name.
- Shows a 5-day forecast with high and low temperatures for each day.
- Supports toggling between Celsius and Fahrenheit units.
- Provides visual indicators for weather conditions using icons.
- Includes loading indicators and error messages for API request status.

## Technologies Used

- **React**: Frontend JavaScript library for building user interfaces.
- **React Hooks**: Functional components and state management.
- **Fetch API**: For making HTTP requests to the OpenWeatherMap API.
- **CSS**: Styling and layout design.
- **react-loader-spinner**: Library for displaying loading spinners.
- **OpenWeatherMap API**: Provides weather data used in the application.


### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)]
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)]
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)]

</details>


### Set Up Instructions
## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js (https://nodejs.org)
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd weather-dashboard


<summary>API Requests & Responses</summary>
<br/>

**OpenWeatherMap API**

#### API: `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${unit}`

#### Method: `GET`

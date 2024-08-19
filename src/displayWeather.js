import { addElement } from "./dom";

const displayWeather = (weatherData) => {
  console.log(weatherData)
  // Display main information for current weather data
  const weatherContainer = document.querySelector('.weatherContainer');
  weatherContainer.innerText = '';
  const mainWeatherDataDiv = document.createElement('div');
  mainWeatherDataDiv.className = 'mainData';
  addElement(weatherContainer, mainWeatherDataDiv, 'Current Weather', 'p', '1rem');
  addElement(weatherContainer, mainWeatherDataDiv, weatherData.resolvedAddress, 'p', '2rem');

  const midDiv = document.createElement('div');
  midDiv.className = 'currentWeatherData';
  addElement(mainWeatherDataDiv, midDiv, `${weatherData.currentConditions.temp}°F`, 'p');
  addElement(mainWeatherDataDiv, midDiv, weatherData.currentConditions.conditions, 'p');
  addElement(weatherContainer, mainWeatherDataDiv, `H:${weatherData.days[0].tempmax}°F L:${weatherData.days[0].tempmin}°F`, 'p', '1rem')

  // Display hourly weather information
  const currentHour = new Date().getHours();
  console.log(currentHour);
}

export { displayWeather }
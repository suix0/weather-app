import { addElement, displayHourlyData } from "./dom";
import { changeTimeFormat, filterHours } from "./weatherFunctions";
import { format } from 'date-fns';

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
  const currentHour = format(new Date(), 'h a'); // Get current time and format
  const hourlyWeatherData = weatherData.days[0].hours;

  // Format the time in the hourly date of current date
  hourlyWeatherData.map((hourlyObjects) => {
    changeTimeFormat(hourlyObjects, 'HH:mm:ss', 'h a');
  })

  // Filter the array and return only the hours from
  // Current hour until 6 hours later
  const filteredHours = filterHours(currentHour, hourlyWeatherData);

  // Display hourly data cards
  const hourlyWeatherDataDiv = document.createElement('div');
  hourlyWeatherDataDiv.className = 'hourlyData';
  displayHourlyData(currentHour, weatherContainer, hourlyWeatherDataDiv, filteredHours);
 }

export { displayWeather }
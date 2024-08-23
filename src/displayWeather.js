import { addElement, displayWeatherData } from "./dom";
import { changeTimeFormat, changeDateFormat, displayWeatherIcon, returnCurrentMeasurement, filterHours, filterDates } from "./weatherFunctions";
import { format } from 'date-fns';

const currentHour = format(new Date(), 'h a'); // Get current time and format

const displayWeather = (weatherData) => {
  // Display main information for current weather data
  const weatherContainer = document.querySelector('.weatherContainer');
  weatherContainer.innerText = '';
  const mainWeatherDataDiv = document.createElement('div');
  mainWeatherDataDiv.className = 'mainData';
  addElement(weatherContainer, mainWeatherDataDiv, `Today , ${changeDateFormat(weatherData.days[0].datetime)}`, 'p', '1rem'); // Add current date
  addElement(weatherContainer, mainWeatherDataDiv, weatherData.resolvedAddress, 'p', '2rem'); // Add the location 

  const midDiv = document.createElement('div');
  midDiv.className = 'currentWeatherData';
  const weatherMainTemp = document.createElement('span');
  weatherMainTemp.style.fontSize = '4rem';
  midDiv.appendChild(weatherMainTemp);
  weatherMainTemp.classList.add(returnCurrentMeasurement());
  weatherMainTemp.classList.add('mainTemp')
  weatherMainTemp.textContent =  returnCurrentMeasurement() === 'us' ? `${weatherData.currentConditions.temp}°F` : `${weatherData.currentConditions.temp}°C`;
  mainWeatherDataDiv.appendChild(midDiv);
  addElement(weatherContainer, mainWeatherDataDiv, weatherData.currentConditions.conditions, 'p', '2rem'); // Add weather conditions

  // Add and display appropriate weather icon
  const weatherImage = document.createElement('img');
  weatherImage.className = 'mainImage';
  weatherImage.src = displayWeatherIcon(weatherData.days[0].icon);
  midDiv.appendChild(weatherImage);
  addElement(weatherContainer, mainWeatherDataDiv, `Max Temperature: ${weatherData.days[0].tempmax}°F`, 'p', '1rem') 
  addElement(weatherContainer, mainWeatherDataDiv, `Min Temperature: ${weatherData.days[0].tempmin}°F`, 'p', '1rem') 
  // Display hourly weather information
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
  displayWeatherData('hourly', weatherContainer, hourlyWeatherDataDiv, filteredHours);

  // Display daily data cards
  // Get an array of 4 days worth of data
  const datesToDisplay = filterDates(weatherData.days);
  const dailyWeatherDataDiv = document.createElement('div');
  dailyWeatherDataDiv.className = 'dailyData';
  displayWeatherData('daily', weatherContainer, dailyWeatherDataDiv, datesToDisplay);

 }

export { displayWeather, currentHour }
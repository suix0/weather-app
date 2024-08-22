import { currentHour } from "./displayWeather";
import { changeDateFormat, displayWeatherIcon } from "./weatherFunctions";

let currentMeasurement = 'farenheit';

const addElement = (mainContainer, miniContainer, val, elementType, fontSize) => {
  const element = document.createElement(elementType);
  if (fontSize) {
    element.style.fontSize = fontSize;
  }
  if (val) {
    element.textContent = val;
  }
  miniContainer.appendChild(element);
  mainContainer.appendChild(miniContainer);
}

const displayWeatherData = (type, mainContainer, weatherContainer, array) => {
  // Create the display for each hours
  const weatherDataDomArrays = array.map((weatherData) => {
    const currentDiv = document.createElement('div');

    // Weather Time
    const weatherDateTime = document.createElement('p');
    if (weatherData.datetime === currentHour) {
      weatherDateTime.textContent = 'Now';
    } else {
      if (type === 'hourly') {
        weatherDateTime.style.fontSize = '1rem';
        weatherDateTime.textContent = weatherData.datetime;
      } else {
        weatherDateTime.style.fontSize = '1.5rem';
        weatherDateTime.textContent = changeDateFormat(weatherData.datetime);
      }
    }
    currentDiv.appendChild(weatherDateTime);

    // Weather Icon
    const weatherIconPlaceholder = document.createElement('img');
    weatherIconPlaceholder.className = type === 'hourly' ? 'iconsForHourly' : 'iconsForDaily'
    weatherIconPlaceholder.src = displayWeatherIcon(weatherData.icon);  
    currentDiv.appendChild(weatherIconPlaceholder);

    // Weather Temperature
    const weatherTemp = document.createElement('span');
    weatherTemp.className = currentMeasurement;
    weatherTemp.style.fontSize = type === 'hourly' ? '1.5rem' : '3rem';;
    weatherTemp.textContent = currentMeasurement === 'farenheit' ? `${weatherData.temp}°F` : `${weatherData.temp}°F`;
    currentDiv.appendChild(weatherTemp);

    // Weather Condition
    const weatherDescription = document.createElement('p');
    weatherDescription.style.fontSize = '1rem';
    weatherDescription.textContent = `${weatherData.conditions}`;
    currentDiv.appendChild(weatherDescription);

    return currentDiv;
  })

  // Append each transformed divs to the hourly container
  weatherDataDomArrays.forEach((weatherData) => {
    weatherContainer.appendChild(weatherData);
  })

  // Append the hourly data container to the main container
  mainContainer.appendChild(weatherContainer);
}

export { addElement, displayWeatherData, currentMeasurement };
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

const displayHourlyData = (currentHour, mainContainer, hourlyContainer, array) => {
  // Create the display for each hours
  const hourlyDataDomArrays = array.map((hourlyData) => {
    const currentDiv = document.createElement('div');

    // Weather Time
    const weatherTime = document.createElement('p');
    if (hourlyData.datetime === currentHour) {
      weatherTime.textContent = 'Now';
    } else {
      weatherTime.textContent = hourlyData.datetime;
    }
    weatherTime.style.fontSize = '1rem';
    currentDiv.appendChild(weatherTime);

    // Weather Icon
    const weatherIconPlaceholder = document.createElement('img');
    currentDiv.appendChild(weatherIconPlaceholder);

    // Weather Temperature
    const weatherTemp = document.createElement('p');
    weatherTemp.style.fontSize = '2rem';
    weatherTemp.textContent = `${hourlyData.temp}°F`;
    currentDiv.appendChild(weatherTemp);

    // Weather Condition
    const weatherDescription = document.createElement('p');
    weatherDescription.style.fontSize = '1rem';
    weatherDescription.textContent = `${hourlyData.conditions}`;
    currentDiv.appendChild(weatherDescription);

    return currentDiv;
  })

  // Append each transformed divs to the hourly container
  hourlyDataDomArrays.forEach((hourlyData) => {
    hourlyContainer.appendChild(hourlyData);
  })

  // Append the hourly data container to the main container
  mainContainer.appendChild(hourlyContainer);
}

export { addElement, displayHourlyData };
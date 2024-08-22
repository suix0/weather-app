import { format, parse } from "date-fns";
import snow from './resources/WeatherIcons/SVG/1st-set/snow.svg';
import snowShowersDay from './resources/WeatherIcons/SVG/1st-set/snow-showers-day.svg';
import snowShowersNight from './resources/WeatherIcons/SVG/1st-set/snow-showers-night.svg';
import thunderRain from './resources/WeatherIcons/SVG/1st-set/thunder-rain.svg';
import thunderShowersDay from './resources/WeatherIcons/SVG/1st-set/thunder-showers-day.svg';
import thunderShowersNight from './resources/WeatherIcons/SVG/1st-set/thunder-showers-night.svg';
import rain from './resources/WeatherIcons/SVG/1st-set/rain.svg';
import showersDay from './resources/WeatherIcons/SVG/1st-set/showers-day.svg';
import showersNight from './resources/WeatherIcons/SVG/1st-set/showers-night.svg';
import fog from './resources/WeatherIcons/SVG/1st-set/fog.svg';
import wind from './resources/WeatherIcons/SVG/1st-set/wind.svg';
import cloudy from './resources/WeatherIcons/SVG/1st-set/cloudy.svg';
import partlyCloudyDay from './resources/WeatherIcons/SVG/1st-set/partly-cloudy-day.svg';
import partlyCloudyNight from './resources/WeatherIcons/SVG/1st-set/partly-cloudy-night.svg';
import clearDay from './resources/WeatherIcons/SVG/1st-set/clear-day.svg';
import clearNight from './resources/WeatherIcons/SVG/1st-set/clear-night.svg';


// Parse and format raw hour string to hour am/pm 
const changeTimeFormat = (object, oldFormat, changeFormat) => {
  const parsedTime = parse(object.datetime, oldFormat, new Date());
  const newFormat = format(parsedTime, changeFormat);
  object.datetime = newFormat;
}

// Parse and format raw date string to MMMM d, yyyy
const changeDateFormat = (date) => {
  const parsedDate = parse(date, 'yyyy-MM-dd', new Date());
  const formatDate = format(parsedDate, 'MMMM d, yyyy');
  return formatDate;
}

// Function to return appropriate weather icon
const displayWeatherIcon = (iconType) => {
  let svgPath;
  if (iconType === 'snow') {
    svgPath = snow;
  } else if (iconType === 'snow-showers-day') {
    svgPath = snowShowersDay;
  } else if (iconType === 'snow-showers-night') {
    svgPath = snowShowersNight;
  } else if (iconType === 'thunder-rain') {
    svgPath = thunderRain;
  } else if (iconType === 'thunder-showers-day') {
    svgPath = thunderShowersDay;
  } else if (iconType === 'thunder-showers-night') {
    svgPath = thunderShowersNight;
  } else if (iconType === 'rain') {
    svgPath = rain;
  } else if (iconType === 'showers-day') {
    svgPath = showersDay;
  } else if (iconType === 'showers-night') {
    svgPath = showersNight;
  } else if (iconType === 'fog') {
    svgPath = fog;
  } else if (iconType === 'wind') {
    svgPath = wind;
  } else if (iconType === 'cloudy') {
    svgPath = cloudy;
  } else if (iconType === 'partly-cloudy-day') {
    svgPath = partlyCloudyDay;
  } else if (iconType === 'partly-cloudy-night') {
    svgPath = partlyCloudyNight;
  } else if (iconType === 'clear-day') {
    svgPath = clearDay;
  } else if (iconType === 'clear-night') {
    svgPath = clearNight;
  }
  return svgPath;
}  

// Return a subarray of the number of hourly weather data we want
const filterHours = (start, object) => {
  let filteredArr = [];
  for (let i = 0; i < object.length; i++) {
    if (object[i].datetime === start) {
      let counter = 0; 
      // Get only 12 hour weather data 
      while (counter < 14) {
        filteredArr.push(object[i]);
        i++;
        counter++;
        // Restart i to strart when reaching max to include data in beginning
        if (i === object.length) {
          i = 0;
        }
      }
      return filteredArr;
    }
  }
}

const filterDates = (dates) => {
  const newDates = [];
  // Get dates starting from four tomorrows haha
  for (let i = 1; i < 7; i++) {
    newDates.push(dates[i]);
  }
  return newDates;
}

export { changeTimeFormat, changeDateFormat, displayWeatherIcon, filterHours, filterDates };
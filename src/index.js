import './style.css'
import fetchWeatherData from './fetch';
import { convertTemperatureMeasurement } from './weatherFunctions';

const searchBar = document.querySelector('#search');
const switchTempMeasurement = document.querySelector('a');
searchBar.addEventListener('search', fetchWeatherData);
switchTempMeasurement.addEventListener('click', convertTemperatureMeasurement);
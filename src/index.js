import './style.css'
import fetchWeatherData from './fetch';

const searchBar = document.querySelector('#search');

searchBar.addEventListener('search', fetchWeatherData);
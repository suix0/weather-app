import { displayWeather } from "./displayWeather";

const fetchWeatherData = async () => {
  try {
    
    const searchValue = document.querySelector('#search').value;
    const weatherData = await fetch((`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchValue}?key=LWRVFYS6Q6DM4NLPB3AVZT4GB&iconSet=icons2`), {mode: "cors"});
    const weatherDataJson = await weatherData.json();
    displayWeather(weatherDataJson);
  }
  catch (error) {
    console.log(error);
  }
}


export default fetchWeatherData;
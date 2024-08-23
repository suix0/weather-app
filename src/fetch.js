import { displayWeather } from "./displayWeather";
import { returnCurrentMeasurement } from "./weatherFunctions";

const fetchWeatherData = async () => {
  try {
    const searchValue = document.querySelector('#search').value;
    const weatherData = await fetch((`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchValue}?key=LWRVFYS6Q6DM4NLPB3AVZT4GB&unitGroup=${returnCurrentMeasurement()}&iconSet=icons2`), {mode: "cors"});
    const weatherDataJson = await weatherData.json();
    console.log(weatherDataJson);
    displayWeather(weatherDataJson);
  }
  catch (error) {
    console.log(error);
  }
}


export default fetchWeatherData;
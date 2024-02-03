/**
 * Fetch weather data from OpenWeather.
 * - Store your API key in ./settings.js
 * - API reference: https://openweathermap.org/appid
 * References:
 * - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 * - https://developer.mozilla.org/en-US/docs/Web/API/fetch
 */

import settings from "../settings.js";

const tempField = document.querySelector(".getTemp");
const windSpeed = document.querySelector(".getWSpeed");
const windDir = document.querySelector(".getWDir");


const displayData = () => {
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=burnaby,us&appid=${settings.appid}&units=${settings.units}`
).then( function (res) {
 return res.json()})
.then( function (data) {
   console.log(data)
tempField.innerHTML = `${data.main.temp}°C`;
windSpeed.innerHTML = `${data.wind.speed} m/s`;
windDir.innerHTML = `${data.wind.deg}°`;
})

}

displayData();
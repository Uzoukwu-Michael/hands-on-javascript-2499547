/**
 * Create a component to display weather data.
 * - Use the new component in the ./components folder
 * - Modify the fetch query to call the component.
 * - Convert the temperature to metric and fahrenheit
 */

import settings from "../settings.js";
import weatherCard from "../components/weatherCard.js";
const tempField = document.querySelector(".getTemp");
const windSpeed = document.querySelector(".getWSpeed");
const windDir = document.querySelector(".getWDir");

const displayData = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${settings.location}&appid=${settings.appid}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelectorAll(".main-content").innerHTML = weatherCard(data);
    });
};

displayData();

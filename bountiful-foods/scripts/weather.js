const todayTemp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#iconWeather");
const humidity = document.querySelector("#humidity");
const captionDesc = document.querySelector("#description");
const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=cd340e96558cd2ff39752be9a97dc73f";
const forecast3 =
  "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=carlsbad&appid=cd340e96558cd2ff39752be9a97dc73f";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData) {
  todayTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  humidity.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}

apiFetch();

//Forecast
async function apiFetchForecast() {
  try {
    const response = await fetch(forecast3);
    if (response.ok) {
      const dataForecast = await response.json();
      console.log(dataForecast); // this is for testing the call
      displayResults(dataForecast);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetchForecast();

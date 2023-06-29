const todayTemp = document.querySelector('#temp');
const windToday = document.querySelector('#speed');
const weatherIcon = document.querySelector('#iw');
const captionDesc = document.querySelector('#iwh3');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Saltillo&units=metric&appid=cd340e96558cd2ff39752be9a97dc73f';

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
  
    windToday.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
  
    const tTemp = weatherData.main.temp.toFixed(0);
    const wSpeed = weatherData.wind.speed.toFixed(0);
  
    let formula = 35.74 + 0.6215 * tTemp - 35.75 * wSpeed ** 0.16 + 0.4275 * tTemp * wSpeed ** 0.16;
  
    if (tTemp <= 10 && wSpeed > 4.8) {
      F = formula.toFixed(1);
    } else {
      F = "N/A";
    }
  
    document.querySelector("#windchill").innerHTML = F;
  }
  
  apiFetch();

 let button = document.getElementById("checkBtn");
let result = document.getElementById("result");
let scoreInput = document.getElementById("scoreInput"); // I bada kiya

console.log("JS Ready Hai");

function checkLPA(){
    let score = scoreInput.value;

    if (score === ""){
        result.innerText = "Bhai Pehle score to daal 🤣";
        return;
    }

    score = Number(score);

    if(score > 90){
        result.innerText = "A+ Grade - Tu NASA Jaega!  Score:  " + score;
    }else if (score > 70){
        result.innerText = "A Grade - 10LPA Pakka!  Score:   " + score;
    }else{
        result.innerText = "Mehnat Kar Bhai Score:  "  + score;
    }
}

button.addEventListener("click", checkLPA);

let cityInput = document.getElementById("cityInput");
let weatherBtn = document.getElementById("weatherBtn");
let weatherResult = document.getElementById("weatherResult");

// ← YE WALA getWeather SIRF EK BAAR HAI. ANDAR WALA HATA DIYA
 
   async function getWeather() {
  let city = cityInput.value.trim();
  if (city === "") {
    weatherResult.innerText = "Bhai city to daal 😂";
    return;
  }

  weatherResult.innerText = "Fetching weather... ⏳";

  try {
    let geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;
    let geoResponse = await fetch(geoUrl);
    let geoData = await geoResponse.json();

    if (!geoData.results) {
      weatherResult.innerText = "Bhai ye city nahi mili. Spelling check kar 😅";
      return;
    }

    let lat = geoData.results[0].latitude;
    let lon = geoData.results[0].longitude;
    let cityName = geoData.results[0].name;

    let weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    let weatherResponse = await fetch(weatherUrl);
    let weatherData = await weatherResponse.json();

    let temp = weatherData.current_weather.temperature;
    let windspeed = weatherData.current_weather.windspeed;

    weatherResult.innerText = `${cityName}: ${temp}°C | Wind: ${windspeed} km/h 🌤️`;

  } catch (error) {
    console.log("Error:", error);
    weatherResult.innerText = "Bhai CORS ya Net error aaya 😴";
  }
}


weatherBtn.addEventListener("click", getWeather);
let h2 = document.querySelector("h2");

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
h2.innerHTML = ` ${day},  ${hours}: ${minutes}`;

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#serch-text-input");
  let h1 = document.querySelector("#city");
  let cityValue = searchInput.value;
  h1.innerHTML = `${cityValue}`;
}

let form = document.querySelector("form");
form.addEventListener("submit", searchCity);

function showCurrentTemp(response) {
  console.log(response);
  let newTemperature = document.querySelector("#temperature");
  newTemperature.innerHTML = Math.round(response.data.main.temp);
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#wind");
  wind.innerHTML = response.data.wind.speed;
}

function updateLocation(event) {
  event.preventDefault();
  let input = document.querySelector("#serch-text-input");
  let city = input.value;
  let apiKey = "c9a19e3b50cdba4a995a8e756cc2f76f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(city);
  console.log(apiUrl);
  axios.get(apiUrl).then(showCurrentTemp);
}

//navigator.geolocation.getCurrentPosition(showPosition);
let formNew = document.querySelector("form");
formNew.addEventListener("submit", updateLocation);

//function changeTempFahr() {
//let temperature = document.querySelector(".temperature");
//temperature.innerHTML = `44`;
//}
//let fahTem = document.querySelector("#fahrenheit-link");
//fahTem.addEventListener("click", changeTempFahr);

//function changeTempCels() {
// let temperature = document.querySelector(".temperature");
//temperature.innerHTML = `7`;
//}
//let celsTem = document.querySelector("#celsius-link");
//.addEventListener("click", changeTempCels);

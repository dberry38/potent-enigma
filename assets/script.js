var currentTime = moment();



const userCitySearch = document.querySelector('#cityname')
const userForm = document.querySelector('#user-form')
const recentList = document.querySelector("#recent-list")
const resultsFor = document.querySelector("#results-for")
const currentConditions = document.querySelector("#current-conditions")
const currentTemp = document.querySelector("#current-temp")
const currentFeel = document.querySelector("#current-feel")
const todayHigh = document.querySelector("#today-high")
const todayLow = document.querySelector("#today-low")
const todayHum = document.querySelector("#today-humidity")
const currentSkyCond = document.querySelector("#current-sky-cond")
const currentWindSpd = document.querySelector("#current-wind-spd")
const currentWindDir = document.querySelector("#current-wind-dir")
const fiveDay = document.querySelector("#five-day")
const apiKey = "f22e02f6379f4d799e50d6593eecd302"
// const openWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


var formSubmitHandler = function (event) {
    event.preventDefault();

    var cityName = userCitySearch.value;

    if (cityName) {
        newQuery(cityName);

        userCitySearch.value = '';
    } else {
        alert("WHOOPS");
    }
};



var newQuery = function (cityName) {
    apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    resultsFor.innerHTML = data.name;
                    currentTemp.innerHTML = (data.main.temp - 273.15) * (9/5) + 32 + " F";
                    currentFeel.innerHTML = (data.main.feels_like - 273.15) * (9/5) + 32 + " F";
                    todayHigh.innerHTML = (data.main.temp_max - 273.15) * (9/5) + 32 + " F";
                    todayLow.innerHTML = (data.main.temp_min - 273.15) * (9/5) + 32 + " F";
                    todayHum.innerHTML = data.main.humidity + "/ 100";
                    currentSkyCond.innerHTML = data.clouds.all;
                    currentWindSpd.innerHTML = data.wind.speed;
                    currentWindDir.innerHTML = data.wind.deg + " deg";
 
                    displayWeather(data, cityName);
                });
            } else {
                alert("I can't believe you've done this.");
            }
        });

        };


var displayWeather = function (data, cityName) {
    
};





userForm.addEventListener("submit", formSubmitHandler);
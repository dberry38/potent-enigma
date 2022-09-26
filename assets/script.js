const userSearch = document.querySelector('#cityname')
const searchButton = document.querySelector('#user-form')
const recentList = document.querySelector("#recent-list")
const resultsFor = document.querySelector("#results-for")
const currentConditions = document.querySelector("#current-conditions")
const fiveDay = document.querySelector("#five-day")
const apiKey = "f22e02f6379f4d799e50d6593eecd302"
// const openWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


var formSubmitHandler = function (event) {
    event.preventDefault();

    var cityName = userSearch.value;

    if (cityName) {
        newQuery(cityName);

        userSearch.value = '';
    } else {
        alert("I can't believe you've done this");
    }
};



var newQuery = function (cityName) {
    apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    displayWeather(data, cityName);
                });
            } else {
                alert("I can't believe you've done this.");
            }
        });

        };






searchButton.addEventListener("submit", formSubmitHandler);
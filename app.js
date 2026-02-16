const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const dateTime = document.getElementById("dateTime");
const weatherDisplay = document.getElementById("weatherDisplay");
const errorMessage = document.getElementById("errorMessage");
const loading = document.getElementById("loading");


const API_KEY = `2403aaf3c9be07229a28656287b5832e`;

function getWeather(){
    const  city = cityInput.value.trim();
    const now = new Date();
    dateTime.textContent = now.toLocaleString();
    if (city ===""){
        alert("Please enter a city name!");
        return;
    }
    loading.classList.remove("hidden");
    errorMessage.classList.add("hidden");
    weatherDisplay.classList.add("hidden");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response =>{
            console.log("response is:", response);
            if (!response.ok){
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data =>{
            console.log("Weather data:", data)
            loading.classList.add("hidden");
            displayWeather(data);
        })
        .catch(error =>{
            console.error("Error:", error);
            loading.classList.add("hidden");
            showError(error.message)
        });
    
    cityInput.value = "";

}

function displayWeather(data){
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const humidity = document.getElementById("humidity");
    const windspeed = document.getElementById("windspeed");
    const weatherIcon = document.getElementById("weatherIcon");

    cityName.textContent = data.name;
    temperature.textContent = Math.round(data.main.temp);
    description.textContent = data.weather[0].description;
    humidity.textContent = "Humidity:" + data.main.humidity + "%";
    windspeed.textContent = "Wind Speed: " + data.wind.speed + " m/s";
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
//                                                           

    weatherDisplay.classList.remove("hidden");
    errorMessage.classList.add("hidden");

}

function showError(message){
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
    weatherDisplay.classList.add("hidden");
}


searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keydown",(e) =>{
    if (e.key ==="Enter"){
        getWeather();
    }
})
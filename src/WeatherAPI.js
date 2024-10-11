class WeatherAPI {

    async fetchWeatherData(city) {
        const url = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fcbe43ccf4ab713f9a3b640bbd239d3a&units=metric');
        const response = await fetch(url);
        return response.json();
    }

    async fetchForecastData(city) {
        const url = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=fcbe43ccf4ab713f9a3b640bbd239d3a&units=metric');
        const response = await fetch(url);
        return response.json();
    }
}

export default WeatherAPI;
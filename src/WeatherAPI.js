class WeatherAPI {

    constructor(apiKey) {
  
      this.apiKey = apiKey;
  
    }
    

    async fetchWeatherData(city) {
        const url = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric');
        const response = await fetch(url);
        return response.json();
    }

    async fetchForecastData(city) {
        const url = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.apiKey}&units=metric');
        const response = await fetch(url);
        return response.json();
    }
}

export default WeatherAPI;
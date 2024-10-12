import React, { useState, useEffect } from 'react';
import { fetch } from 'cross-fetch';

const useWeatherAPI = (apiKey) => {
    const [weatherData, setWeatherData] = useState({});
    const [forecastData, setForecastData] = useState({});
    const [city, setCity] = useState('Prague');
    const [searchCity, setSearchCity] = useState(' ');


    useEffect(() => {
        const fetchWeatherData = async () => {
            const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric';
            const response = await fetch(url);
            const data = await response.json();
            setWeatherData(data);
        };

        const fetchForecastData = async () => {
            const url = 'https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.apiKey}&units=metric';
            const response = await fetch(url);
            const data = await response.json();
            setForecastData(data);
        };

        fetchWeatherData();
        fetchForecastData();
    }, [city, apiKey]);

    const handleSearchCity = (event) => {
        setSearchCity(event.target.value);
    };

    const handleSearch = () => {
        setCity(searchCity);
    };
    return {
        weatherData, forecastData, city, searchCity, handleSearchCity, handleSearch
    };

}


export default useWeatherAPI;
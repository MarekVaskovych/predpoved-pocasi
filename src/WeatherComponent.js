import React from "react";
import moment from 'moment';
import useWeatherAPI from "./useWeatherAPI";

const WeatherComponent = () => {
    const apiKey = 'fcbe43ccf4ab713f9a3b640bbd239d3a';
    const { weatherData, forecastData, searchCity, handleSearchCity, handleSearch } = useWeatherAPI(apiKey);

    const formatDay = (day) => {
        return moment(day).format('dddd');
    }

    const formatDate = (date) => {
        return moment(date).format('DD.MM.YY');
    }
    const formatTime = (time) => {
        return moment(time).format('HH:MM');
    }

    return (
        <div className="app">
            <div className="search">
                <input type="text" value={searchCity} onChange={handleSearchCity} placeholder="Zadejte město"></input>
                <button onClick={handleSearch}>Hledej!</button>
            </div>

            <div className='container'>
                <div className='header'>
                    <div className='location'>
                        <h2>{weatherData.name}</h2>
                    </div>
                    <div className='temp'>
                        <h1>{weatherData.main && weatherData.main.temp.toFixed()}°C</h1>
                    </div>
                    <div className='description'>
                        <p>{weatherData.weather && weatherData.weather[0].main}</p>
                    </div>
                </div>
                <div>
                    <div className='forecast'>
                        <ul>
                            {forecastData.list && forecastData.list.map((forecast, index) => (
                                <li className='bottom' key={index}>
                                    <div className='date'>
                                        <p className="bold">{formatDay(forecast.dt * 1000)}</p>
                                        <p className="date">{formatDate(forecast.dt * 1000)}</p>
                                    </div>
                                    <div className='forecast-temp'>
                                        <p className='bold'>{forecast.main.temp.toFixed()}°C</p>
                                        <p>Teplota</p>
                                    </div>
                                    <div className='hummidity'>
                                        <p className='bold'>{forecast.main.humidity}%</p>
                                        <p>Vlhkost</p>
                                    </div>
                                    <div className='forecast-description'>
                                        <p className='bold'>{forecast.weather[0].main}</p>
                                        <p>Stav</p>
                                    </div>
                                    <div className='feeling'>
                                        <p className='bold'>{forecast.main.feels_like.toFixed()}°C</p>
                                        <p>Pocitová</p>
                                    </div>
                                </li>
                            ))};

                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default WeatherComponent;


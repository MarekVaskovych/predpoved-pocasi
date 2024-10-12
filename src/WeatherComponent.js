import React from "react";
import moment from 'moment';
import useWeatherAPI from "./useWeatherAPI";

const WeatherComponent = () => {
    const apiKey = 'fcbe43ccf4ab713f9a3b640bbd239d3a';
    const { weatherData, forecastData, city, searchCity, handleSearchCity, handleSearch } = useWeatherAPI(apiKey);

    const formatDate = (date) => {
        return moment(date).format('dddd, MMMM, Do YYYY');
    }

    return (
        <div className="app">
            <div className="search">
                <input type="text" value={searchCity} onChange={handleSearchCity} placeholder="Zadejte město" />
                <button onClick={handleSearch}>Hledej!</button>
            </div>

            <div className='container'>
                <div className='header'>
                    <div className='location'>
                        <h2>Prague</h2>
                    </div>
                    <div className='temp'>
                        <h1>23°C</h1>
                    </div>
                    <div className='description'>
                        <p>Oblačno</p>
                    </div>
                </div>
                <div>
                    <div className='forecast'>
                        <ul >

                            <li className='bottom'>
                                <h2>Pondělí</h2>
                                <div className='date'>
                                </div>
                                <div className='forecast-temp'>
                                    <p className='bold'>23°C</p>
                                    <p>Teplota</p>
                                </div>
                                <div className='hummidity'>
                                    <p className='bold'>90%</p>
                                    <p>Vlhkost</p>
                                </div>
                                <div className='forecast-description'>
                                    <p className='bold'>Oblačno</p>
                                    <p>Stav</p>
                                </div>
                                <div className='feeling'>
                                    <p className='bold'>25°C</p>
                                    <p>Pocitová</p>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default WeatherComponent;


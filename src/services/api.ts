import {ForecastPayload, WeatherPayload} from "../application/types";

export function get5day3hourIntervalForecast(): Promise<ForecastPayload> {
    return new Promise((resolve, reject) => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Paris&APPID=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch(reject)
    })
}

export function getCurrentWeather(): Promise<WeatherPayload> {
    return new Promise((resolve, reject) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then(response => response.json())
            .then(resolve)
            .catch(reject)
    })
}
import {useEffect, useState} from "react";
import {getFromLocalStorage, saveToLocalStorage} from "./helpers";
import {get5day3hourIntervalForecast, getCurrentWeather} from "../services/api";
import {Forecast} from "./types";

export function useApiResource<T>(name: string, apiResource: () => Promise<T>) {
    const [data, setData] = useState<T | null>(null)
    useEffect(() => {
        const storedData = getFromLocalStorage(name)
        if (storedData) {
            setData(storedData)
        } else {
            apiResource().then(setData)
        }
    }, [])

    return data
}

interface CurrentWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
    speed: number;
    deg: number;
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
}

export function useCurrentWeather(): CurrentWeather | null {
    const currentWeather = useApiResource('currentWeather', getCurrentWeather)

    if (!currentWeather) {
        return null
    }
    const [weather] = currentWeather?.weather

    return {
        ...currentWeather?.main,
        ...currentWeather?.wind,
        ...weather
    }
}

interface SanitizedForecast {
    [date: string]: Forecast[]
}

export function useForecast(): SanitizedForecast | null {
    const name = `forecast - ${new Date().toDateString()}`
    const forecast = useApiResource(name, get5day3hourIntervalForecast)

    if (!forecast) {
        return null
    }

    saveToLocalStorage(name, forecast)

    return forecast.list.reduce<SanitizedForecast>((acc, item) => {
        const date = new Date(item.dt_txt).toDateString()
        if (!acc[date]) {
            acc[date] = []
        }
        acc[date].push(item)
        return acc
    }, {})

}
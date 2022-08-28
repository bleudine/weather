export interface Weather {
    id: number
    main: string;
    description: string;
    icon: string;
}

export interface WeatherPayload {
    weather: Weather[];
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
    };
    wind: {
        speed: number;
        deg: number;
    }
}

export interface Forecast extends WeatherPayload {
    dt_txt: string;
}

export interface ForecastPayload {
    list: Forecast[];
}
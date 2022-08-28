import {ReactElement} from "react";
import {useCurrentWeather} from "../application/hooks";
import {Box, Typography} from "@mui/material";
import {DIRECTIONS} from "../application/constants";

export default function WeatherDetails(): ReactElement | null {
    const weather = useCurrentWeather()
    if (!weather) {
        return null
    }
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem'}}>
            <Box sx={{display: 'flex', flexFlow: 'row wrap', margin: 'auto', justifyContent: 'center', marginBottom: '2rem'}}>
                <Box sx={{width: '200px', height: '200px'}}>
                    <img style={{display: 'block', width: '100%', height: 'auto', margin: 'auto'}}
                         src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}/>
                </Box>
                <Box>
                    <Typography sx={{textAlign: 'center'}} variant="h2">Paris</Typography>
                    <Typography sx={{textAlign: 'center'}} variant="h3">{weather.main}</Typography>
                    <Typography sx={{textAlign: 'center'}} variant="h4">{weather.description}</Typography>
                </Box>

            </Box>
            <Typography variant="subtitle1">Température : {Math.round(weather.temp)}°C</Typography>
            <Typography variant="subtitle1">Ressentie : {Math.round(weather.feels_like)}°C</Typography>
            <Typography variant="subtitle1">Minimale : {Math.round(weather.temp_min)}°C</Typography>
            <Typography variant="subtitle1">Maximale : {Math.round(weather.temp_max)}°C</Typography>
            <Typography variant="subtitle1">Humidité : {Math.round(weather.humidity)}%</Typography>
            <Typography variant="subtitle1">Vent (vitesse) : {Math.round(weather.speed * 3.6)}km/h</Typography>
            <Typography variant="subtitle1">Vent (direction) : {DIRECTIONS[Math.round(weather.deg / 45)]}</Typography>
        </Box>
    )
}
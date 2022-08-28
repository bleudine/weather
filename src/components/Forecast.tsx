import {ReactElement} from "react";
import {useForecast} from "../application/hooks";
import {List, Typography, Box} from "@mui/material";
import ForecastedDay from "./ForecastedDay";

export default function Forecast(): ReactElement {
    const forecast = useForecast();
    return (
       <Box>
           <Typography variant="h6" sx={{textAlign: 'center'}}>Prévisions pour la ville de Paris</Typography>
           <List sx={{maxWidth: '80rem', margin: 'auto'}}>
               {forecast && Object.entries(forecast).map(([key, data]) => {
                   return <ForecastedDay key={key} title={key} data={data}/>
               })}
           </List>
       </Box>
    )
}
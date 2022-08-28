import {Forecast as ForecastType} from "../application/types";
import {ReactElement, useState} from "react";
import {Avatar, Collapse, List, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

interface ForecastedDayProps {
    title: string;
    data: ForecastType[];
}

export default function ForecastedDay({title, data}: ForecastedDayProps): ReactElement {
    const [open, setOpen] = useState(false);

    function collapse() {
        setOpen(previous => !previous)
    }

    return (
        <>
            <ListItemButton onClick={collapse}>
                <ListItemText data-testid="forecasted-title" primary={title}/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List disablePadding>
                    {data.map(({weather: [weather], main: {temp}, dt_txt}) => {
                        return (
                            <ListItem key={dt_txt}>
                                <ListItemAvatar>
                                    <Avatar src={`https://openweathermap.org/img/wn/${weather?.icon}@2x.png`}/>
                                </ListItemAvatar>
                                <ListItemText data-testid="forecasted-temp" primary={`${Math.round(temp)}°C`}/>
                                <ListItemText primary={`${new Date(dt_txt).getHours()}h`} sx={{textAlign: 'end'}}/>
                            </ListItem>
                        )
                    })}
                </List>
            </Collapse>
        </>
    )
}
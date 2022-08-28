import {ReactElement, SyntheticEvent, useState} from "react";
import {
    ThemeProvider,
    createTheme,
    Tabs,
    Tab,
    Box,
} from "@mui/material";
import {
    cyan,
    deepOrange
} from "@mui/material/colors";

import TabPanel from "./components/TabPanel";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";

import './index.css'

const theme = createTheme({
    palette: {
        primary: {
            main: deepOrange[500],
        },
        secondary: {
            main: cyan[50],
        },
    },
});


export default function App(): ReactElement {
    const [tabIndex, setTabIndex] = useState(0)

    function switchTab(event: SyntheticEvent, value: number) {
        setTabIndex(value)
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{minHeight: '100vh', width: '100%', backgroundColor: 'secondary.dark'}}>
                <Tabs value={tabIndex} onChange={switchTab} centered>
                    <Tab label="Aujourd'hui" value={0}/>
                    <Tab label="Prévisions" value={1}/>
                </Tabs>
                <TabPanel value={tabIndex} index={0}>
                    <WeatherDetails/>
                </TabPanel>
                <TabPanel value={tabIndex} index={1}>
                    <Forecast/>
                </TabPanel>
            </Box>
        </ThemeProvider>
    )
}
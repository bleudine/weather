import React from 'react'
import {render, fireEvent, screen } from "@testing-library/react";
import ForecastedDay from "../components/ForecastedDay";


const mockData = [{
    weather: [
        {"id":800,"main":"Clear","description":"clear sky","icon":"01d"}
    ],
    main: {"temp":26.18,"feels_like":26.18,"temp_min":24.65,"temp_max":27.92,"pressure":1016,"humidity":47},
    wind: {"speed":3.6,"deg":50},
    dt_txt: "2022-08-29 15:00:00"
}]

describe('ForecastedDay', () => {
    it('renders without crash', () => {
        render(<ForecastedDay title="test-title" data={mockData}/>);
        expect(screen.getByTestId('forecasted-title')).toBeInTheDocument()
    })
    it('should not render the list of temperatures if the list is collapsed', () => {
        render(<ForecastedDay title="test-title" data={mockData}/>);
        expect(screen.queryByTestId('forecasted-temp')).not.toBeInTheDocument()
    })

    it('should render the list of temperatures once button is clicked', () => {
        render(<ForecastedDay title="test-title" data={mockData} />)
        const button = screen.getByTestId('forecasted-title')
        fireEvent.click(button)
        expect(screen.getByTestId('forecasted-temp')).toBeInTheDocument()
        expect(screen.getByText('26°C')).toBeInTheDocument()
    })
})
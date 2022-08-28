import WeatherDetails from "../components/WeatherDetails";
import {render, screen} from "@testing-library/react";

jest.mock('../application/hooks', () => ({
    useCurrentWeather: () => {
        return {
            icon: 'icon',
            main: 'title',
            description: 'description',
            temp: 24,
        }
    }
}))

describe('WeatherDetails', () => {
    it('renders without crash', () => {
        render(<WeatherDetails />)
        expect(screen.getByText('title')).toBeInTheDocument()
        expect(screen.getByText('description')).toBeInTheDocument()
        expect(screen.getByText('Température : 24°C')).toBeInTheDocument()
    })
})
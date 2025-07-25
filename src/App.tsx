import { useEffect } from 'react';
import ForecastByDays from './components/ForecastByDays/ForecastByDays';
import ForecastByHours from './components/ForecastByHours/ForecastByHours';
import ForecastToday from './components/ForecastToday/ForecastToday';
import Header from './components/Header/Header';
import forecastStore from './store/forecastStore';
import { observer } from 'mobx-react-lite';
import locationStore from './store/locationStore';

const App = observer(() => {
    const {
        forecast,
        displayDay,
        loading: forecastLoading,
        error: forecastError,
    } = forecastStore;

    const { loading: locationLoading, error: LocationError } = locationStore;

    useEffect(() => {
        locationStore.getLocation();
    }, []);

    useEffect(() => {
        if (locationStore.cords) forecastStore.getForecast(locationStore.cords);
    }, [locationStore.cords]);

    return (
        <>
            <Header />
            {(forecastLoading || locationLoading) && (
                <div className="app-loader">
                    <div className="loader"></div>
                </div>
            )}
            {(forecastError || LocationError) && (
                <div className="app-error">
                    {forecastError && (
                        <div className="note note_error">{forecastError}</div>
                    )}
                    {LocationError && (
                        <div className="note note_warning">
                            {LocationError} <br />
                            <b>
                                Please use the search to find your city manually
                            </b>
                        </div>
                    )}
                </div>
            )}
            {forecast && (
                <section className="center-content">
                    <ForecastToday data={forecast} displayDay={displayDay} />
                    <ForecastByHours data={forecast} displayDay={displayDay} />
                </section>
            )}
            {forecast && (
                <ForecastByDays data={forecast} displayDay={displayDay} />
            )}
        </>
    );
});

export default App;

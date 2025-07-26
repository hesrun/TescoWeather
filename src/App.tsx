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
        loading: forecastLoading,
        error: forecastError,
    } = forecastStore;

    const { loading: locationLoading, error: LocationError } = locationStore;

    useEffect(() => {
        locationStore.getLocation();
    }, []);

    useEffect(() => {
        if (forecast) {
            locationStore.error = null;
        }
    }, [forecast]);

    const { lat, lon } = locationStore.cords ?? {};

    useEffect(() => {
        if (lat !== undefined && lon !== undefined) {
            forecastStore.getForecast({ lat, lon });
        }
    }, [lat, lon]);

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
                            <b>{LocationError}</b> <br />
                            Please enable location services in your browser or
                            <br />
                            use the search to find your city manually.
                        </div>
                    )}
                </div>
            )}
            {forecast && (
                <section className="center-content">
                    <ForecastToday />
                    <ForecastByHours />
                </section>
            )}
            {forecast && <ForecastByDays />}
        </>
    );
});

export default App;

import { useEffect } from 'react';
import ForecastByDays from './components/ForecastByDays/ForecastByDays';
import ForecastByHours from './components/ForecastByHours/ForecastByHours';
import ForecastToday from './components/ForecastToday/ForecastToday';
import Header from './components/Header/Header';
import forecastStore from './store/forecastStore';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
    useEffect(() => {
        forecastStore.getForecast({ lat: 50.217, lon: 12.9 });
    }, []);

    const { forecast, displayDay, location, loading, error } = forecastStore;

    return (
        <>
            <Header />
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

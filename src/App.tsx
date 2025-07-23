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
    return (
        <>
            <Header />
            <section className="center-content">
                <ForecastToday />
                <ForecastByHours />
            </section>
            {forecastStore.forecast && <ForecastByDays />}
        </>
    );
});

export default App;

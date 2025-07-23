import ForecastByDays from './components/ForecastByDays/ForecastByDays';
import ForecastByHours from './components/ForecastByHours/ForecastByHours';
import ForecastToday from './components/ForecastToday/ForecastToday';
import Header from './components/Header/Header';

function App() {
    return (
        <>
            <Header />
            <section className="center-content">
                <ForecastToday />
                <ForecastByHours />
            </section>
            <ForecastByDays />
        </>
    );
}

export default App;

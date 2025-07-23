import { WiDayCloudy } from 'react-icons/wi';

const ForecastByDays = () => {
    return (
        <div className="forecast-by-day">
            <div className="forecast-title">Forecast by Days</div>
            <ul className="forecast-by-day__list">
                {Array(10)
                    .fill('')
                    .map((_, index) => (
                        <li key={index} className="forecast-by-day__list-item">
                            <button
                                className={`forecast-day-button ${index === 0 ? `forecast-day-button_active` : ''}`}
                                title="forecast day"
                            >
                                <span className="forecast-day-button__date">
                                    17 April 2025
                                </span>
                                <span className="forecast-day-button__icon">
                                    <WiDayCloudy />
                                </span>
                                <span className="forecast-day-button__temp">
                                    26° C
                                </span>
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default ForecastByDays;

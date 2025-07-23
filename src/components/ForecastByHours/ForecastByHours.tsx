import { WiDayCloudy } from 'react-icons/wi';

const ForecastByHours = () => {
    return (
        <div className="forecast-by-hours">
            <ul className="forecast-by-hours__list">
                {Array(24)
                    .fill('')
                    .map((_, index) => (
                        <li
                            key={index}
                            className="forecast-by-hours__list-item"
                        >
                            <span className="forecast-by-hours__time">
                                1:00
                            </span>
                            <div className="forecast-by-hours__icon">
                                <WiDayCloudy />
                            </div>
                            <span className="forecast-by-hours__temp">
                                26°C
                            </span>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default ForecastByHours;

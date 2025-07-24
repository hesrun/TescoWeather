import type { DisplayDayProps } from '../../types';
import timeFormat from '../../utils/timeFormatter';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

const ForecastByHours = ({ data, displayDay }: DisplayDayProps) => {
    const day = displayDay ? data[displayDay] : null;
    return (
        <div className="forecast-by-hours">
            <ul className="forecast-by-hours__list">
                {day &&
                    day.map(({ dt_txt, main, weather }) => (
                        <li
                            key={dt_txt}
                            className="forecast-by-hours__list-item"
                        >
                            <span className="forecast-by-hours__time">
                                {timeFormat(dt_txt)}
                            </span>
                            <div className="forecast-by-hours__icon">
                                <WeatherIcon
                                    name={weather[0].main ?? 'Clear'}
                                />
                            </div>
                            <span className="forecast-by-hours__temp">
                                {Math.round(main.temp)}°C
                            </span>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default ForecastByHours;

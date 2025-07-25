import type { ForecastDay } from '../../types';
import timeFormat from '../../utils/timeFormatter';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

const ForecastList = ({ day }: { day: ForecastDay[] }) => {
    return (
        <ul className="forecast-by-hours-list">
            {day.map(({ dt_txt, main, weather }, index) => (
                <li
                    key={dt_txt}
                    className="forecast-by-hours-list__item"
                    style={{ '--delay': index } as React.CSSProperties}
                >
                    <span className="forecast-by-hours-list__time">
                        {timeFormat(dt_txt)}
                    </span>
                    <div className="forecast-by-hours-list__icon">
                        <WeatherIcon name={weather[0].main ?? 'Clear'} />
                    </div>
                    <span className="forecast-by-hours-list__temp">
                        {Math.round(main.temp)}°C
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default ForecastList;

import forecastStore from '../../store/forecastStore';
import type { DisplayDayProps } from '../../types';
import formatDate from '../../utils/dateFormatter';
import getTimeOfDate from '../../utils/getTimeOfDate';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

const ForecastByDays = ({ data, displayDay }: DisplayDayProps) => {
    const handleChangeDay = (day: string) => {
        forecastStore.changeDisplayDay(day);
    };

    return (
        <div className="forecast-by-day">
            <div className="forecast-title">Forecast by Days</div>
            <ul className="forecast-by-day__list">
                {Object.entries(data).map(([date, dayIntervals]) => {
                    const day = getTimeOfDate(dayIntervals);
                    return (
                        <li key={date} className={'forecast-by-day__list-item'}>
                            <button
                                onClick={() => handleChangeDay(date)}
                                className={`forecast-day-button ${date === displayDay ? `forecast-day-button_active` : ''}`}
                                title="forecast day"
                            >
                                <span className="forecast-day-button__date">
                                    {formatDate(date, 'dayMonth')}
                                </span>
                                <span className="forecast-day-button__icon">
                                    <WeatherIcon
                                        name={day?.weather[0].main ?? 'Clear'}
                                    />
                                </span>
                                <span className="forecast-day-button__temp">
                                    {Math.round(day?.main.temp ?? 0)} °C
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ForecastByDays;

import { observer } from 'mobx-react-lite';
import forecastStore from '../../store/forecastStore';
import formatDate from '../../utils/dateFormatter';
import getTimeOfDate from '../../utils/getTimeOfDate';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

const ForecastByDays = observer(() => {
    const { forecast, displayDay } = forecastStore;

    const handleChangeDay = (day: string) => {
        forecastStore.changeDisplayDay(day);
    };

    return (
        <>
            {forecast && (
                <div className="forecast-by-day">
                    <div className="forecast-title">Forecast by Days</div>
                    <ul className="forecast-by-day-list">
                        {Object.entries(forecast).map(
                            ([date, dayIntervals]) => {
                                const day = getTimeOfDate(dayIntervals);
                                return (
                                    <li
                                        key={date}
                                        className={'forecast-by-day-list__item'}
                                    >
                                        <button
                                            onClick={() =>
                                                handleChangeDay(date)
                                            }
                                            className={`forecast-day-button ${date === displayDay ? `forecast-day-button_active` : ''}`}
                                        >
                                            <span className="forecast-day-button__date">
                                                {formatDate(date, 'dayMonth')}
                                            </span>
                                            <span className="forecast-day-button__icon">
                                                <WeatherIcon
                                                    name={
                                                        day?.weather[0].main ??
                                                        'Clear'
                                                    }
                                                />
                                            </span>
                                            <span className="forecast-day-button__temp">
                                                {Math.round(
                                                    day?.main.temp ?? 0
                                                )}{' '}
                                                °C
                                            </span>
                                        </button>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>
            )}
        </>
    );
});

export default ForecastByDays;

import { WiBarometer, WiHumidity, WiWindy } from 'react-icons/wi';
import type { DisplayDayProps } from '../../types';
import getTimeOfDate from '../../utils/getTimeOfDate';
import formatDate from '../../utils/dateFormatter';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import Compass from '../Compass/Compass';

const ForecastToday = ({ data, displayDay }: DisplayDayProps) => {
    const day = displayDay ? getTimeOfDate(data[displayDay]) : null;
    return (
        <div className="forecast-today">
            <div className="forecast-title">Today's Weather forecast</div>
            <div className="forecast-today__info">
                <div className="forecast-today__main">
                    <div className="forecast-today__today">
                        {displayDay && formatDate(displayDay)}
                    </div>
                    <div className="forecast-today__weather">
                        <div className="forecast-today__icon">
                            <WeatherIcon
                                name={day?.weather[0].main ?? 'Clear'}
                            />
                        </div>
                        <div className="forecast-today__current-temp">
                            {day && Math.round(day.main.temp)} <sup>°C</sup>
                        </div>
                    </div>
                    <div className="forecast-today__feels-temp">
                        Feels {day && Math.round(day.main.feels_like)}
                        <sup>°C</sup>
                    </div>
                </div>
                <div className="forecast-today__secondary">
                    <Compass angle={day && day.wind.deg} />

                    <div className="forecast-today__props">
                        <div className="forecast-today__props-item">
                            <WiBarometer className="forecast-today__props-icon" />
                            Pressure: {day && Math.round(day.main.pressure)} hPa
                        </div>

                        <div className="forecast-today__props-item">
                            <WiWindy className="forecast-today__props-icon" />
                            Wind: {day && Math.round(day.wind.speed)} M/S
                        </div>
                        <div className="forecast-today__props-item">
                            <WiHumidity className="forecast-today__props-icon" />
                            Humidity: {day && Math.round(day.main.humidity)} %
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForecastToday;

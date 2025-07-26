import WiBarometer from '../../assets/icons/wi-barometer.svg?react';
import WiHumidity from '../../assets/icons/wi-humidity.svg?react';
import WiWindy from '../../assets/icons/wi-windy.svg?react';
import getTimeOfDate from '../../utils/getTimeOfDate';
import formatDate from '../../utils/dateFormatter';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import Compass from '../Compass/Compass';
import { observer } from 'mobx-react-lite';
import forecastStore from '../../store/forecastStore';

const ForecastToday = observer(() => {
    const { forecast, displayDay } = forecastStore;

    const day =
        displayDay && forecast ? getTimeOfDate(forecast[displayDay]) : null;

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
                    <Compass angle={day ? day.wind.deg : 0} />

                    <div className="forecast-today__props">
                        <div className="forecast-today__props-item">
                            <div className="forecast-today__props-icon">
                                <WiBarometer className="WIcon" />
                            </div>
                            Pressure: {day && Math.round(day.main.pressure)} hPa
                        </div>

                        <div className="forecast-today__props-item">
                            <div className="forecast-today__props-icon">
                                <WiWindy className="WIcon" />
                            </div>
                            Wind: {day && Math.round(day.wind.speed)} M/S
                        </div>
                        <div className="forecast-today__props-item">
                            <div className="forecast-today__props-icon">
                                <WiHumidity className="WIcon" />
                            </div>
                            Humidity: {day && Math.round(day.main.humidity)} %
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ForecastToday;

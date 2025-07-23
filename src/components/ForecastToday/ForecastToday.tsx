import { WiBarometer, WiDayCloudy, WiHumidity, WiWindy } from 'react-icons/wi';

const ForecastToday = () => {
    return (
        <div className="forecast-today">
            <div className="forecast-title">Today's Weather forecast</div>
            <div className="forecast-today__info">
                <div className="forecast-today__main">
                    <div className="forecast-today__today">
                        Wednesday, July 12, 12:00
                    </div>
                    <div className="forecast-today__current-temp">
                        26<sup>°C</sup>
                    </div>
                    <div className="forecast-today__feels-temp">
                        Feels 30<sup>°C</sup>
                    </div>
                </div>
                <div className="forecast-today__secondary">
                    <div className="forecast-today__icon">
                        <WiDayCloudy />
                    </div>
                    <div className="forecast-today__props">
                        <div className="forecast-today__props-item">
                            <WiBarometer className="forecast-today__props-icon" />
                            Pressure: 29 inHg
                        </div>
                        <div className="forecast-today__props-item">
                            <WiHumidity className="forecast-today__props-icon" />
                            Humidity: 30 %
                        </div>
                        <div className="forecast-today__props-item">
                            <WiWindy className="forecast-today__props-icon" />
                            Wind: 18 km/h
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForecastToday;

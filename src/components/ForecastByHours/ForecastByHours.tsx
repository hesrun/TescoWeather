import { useState } from 'react';
import ForecastList from './ForecastList';
import ForecastChart from './ForecastChart';
import forecastStore from '../../store/forecastStore';
import { observer } from 'mobx-react-lite';

const ForecastByHours = observer(() => {
    const [activeTab, setActiveTab] = useState('1');
    const { forecast, displayDay } = forecastStore;

    const day = displayDay && forecast ? forecast[displayDay] : null;

    return (
        <div className="forecast-by-hours">
            <div className="forecast-by-hours__tab-btns">
                <button
                    onClick={() => setActiveTab('1')}
                    className={`forecast-by-hours__tabs-btn ${activeTab === '1' ? 'forecast-by-hours__tabs-btn_active' : ''}`}
                >
                    List
                </button>
                <button
                    onClick={() => setActiveTab('2')}
                    className={`forecast-by-hours__tabs-btn ${activeTab === '2' ? 'forecast-by-hours__tabs-btn_active' : ''}`}
                >
                    Chart
                </button>
            </div>
            {activeTab === '1' && (
                <div className="forecast-by-hours__tab-content">
                    {day && <ForecastList day={day} />}
                </div>
            )}
            {activeTab === '2' && (
                <div className="forecast-by-hours__tab-content">
                    {day && <ForecastChart day={day} />}
                </div>
            )}
        </div>
    );
});

export default ForecastByHours;

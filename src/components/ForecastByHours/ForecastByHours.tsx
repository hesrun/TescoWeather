import { LuChartLine, LuColumns2 } from 'react-icons/lu';
import type { DisplayDayProps } from '../../types';

import { useState } from 'react';
import ForecastList from './ForecastList';
import ForecastChart from './ForecastChart';

const ForecastByHours = ({ data, displayDay }: DisplayDayProps) => {
    const [activeTab, setActiveTab] = useState('1');
    const day = displayDay ? data[displayDay] : null;
    return (
        <div className="forecast-by-hours">
            <div className="forecast-by-hours__tab-btns">
                <button
                    onClick={() => setActiveTab('1')}
                    className={`forecast-by-hours__tabs-btn ${activeTab === '1' ? 'forecast-by-hours__tabs-btn_active' : ''}`}
                >
                    <LuColumns2 />
                    List
                </button>
                <button
                    onClick={() => setActiveTab('2')}
                    className={`forecast-by-hours__tabs-btn ${activeTab === '2' ? 'forecast-by-hours__tabs-btn_active' : ''}`}
                >
                    <LuChartLine />
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
};

export default ForecastByHours;

import { LuChartLine, LuColumns2 } from 'react-icons/lu';
import type { ChartData, DisplayDayProps } from '../../types';
import timeFormat from '../../utils/timeFormatter';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from 'recharts';
import { useState } from 'react';

const ForecastByHours = ({ data, displayDay }: DisplayDayProps) => {
    const [activeTab, setActiveTab] = useState('1');

    const day = displayDay ? data[displayDay] : null;
    let chartData: ChartData[] = [];
    if (day) {
        chartData = day.map((item) => ({
            dt_txt: timeFormat(item.dt_txt),
            temp: item.main.temp,
        }));
    }

    return (
        <>
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
                        {day && (
                            <ul className="forecast-by-hours__list">
                                {day.map(({ dt_txt, main, weather }) => (
                                    <li
                                        key={dt_txt}
                                        className="forecast-by-hours__list-item"
                                    >
                                        <span className="forecast-by-hours__time">
                                            {timeFormat(dt_txt)}
                                        </span>
                                        <div className="forecast-by-hours__icon">
                                            <WeatherIcon
                                                name={
                                                    weather[0].main ?? 'Clear'
                                                }
                                            />
                                        </div>
                                        <span className="forecast-by-hours__temp">
                                            {Math.round(main.temp)}°C
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
                {activeTab === '2' && (
                    <div className="forecast-by-hours__tab-content">
                        {chartData.length > 0 && (
                            <div className="forecast-by-hours__chart">
                                <ResponsiveContainer>
                                    <LineChart data={chartData}>
                                        <CartesianGrid stroke="rgb(255,255,255,0.1)" />
                                        <Line
                                            type="monotone"
                                            dataKey="temp"
                                            stroke="rgb(255,255,255,0.1)"
                                            strokeWidth={1}
                                        />
                                        <XAxis
                                            tick={{
                                                fontSize: 12,
                                                fill: '#fff',
                                            }}
                                            dataKey="dt_txt"
                                            stroke="#fff"
                                            strokeWidth={1}
                                        />
                                        <YAxis
                                            tick={{
                                                fontSize: 12,
                                                fill: '#fff',
                                            }}
                                            stroke="#fff"
                                            strokeWidth={1}
                                            width="auto"
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default ForecastByHours;

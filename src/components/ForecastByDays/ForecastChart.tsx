import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from 'recharts';
import timeFormat from '../../utils/timeFormatter';
import type { ChartData, ForecastDay } from '../../types';

const ForecastChart = ({ day }: { day: ForecastDay[] }) => {
    let chartData: ChartData[] = [];
    if (day) {
        chartData = day.map((item) => ({
            dt_txt: timeFormat(item.dt_txt),
            temp: item.main.temp,
        }));
    }
    return (
        <div className="forecast-chart">
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
    );
};

export default ForecastChart;

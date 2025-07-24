import type { ForecastDay } from '../types';

const getTimeOfDate = (dayIntervals: ForecastDay[]): ForecastDay | null => {
    if (dayIntervals.length === 0) return null;
    const dayTimeForecast = dayIntervals.find((interval) =>
        interval.dt_txt.includes('12:00:00')
    );
    return dayTimeForecast || dayIntervals[0];
};
export default getTimeOfDate;

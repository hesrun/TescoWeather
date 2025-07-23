import { makeAutoObservable, runInAction } from 'mobx';
import { API_KEY, WEATHER_BASE_URL } from '../constants/constants';
import type { Cords, Forecast, Location, ForecastGrouped } from '../types';

function makeUrl(cords: Cords): string {
    return `${WEATHER_BASE_URL}?lat=${cords.lat}&lon=${cords.lon}&appid=${API_KEY}`;
}

class ForecastStore {
    location: Location | null = null;
    forecast: ForecastGrouped | null = null;
    displayDay: string | null = null;
    loading: boolean = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    async getForecast(cords: Cords) {
        this.loading = true;
        this.error = null;
        try {
            const response = await fetch(makeUrl(cords));
            const data: Forecast = await response.json();

            const groupByDay: ForecastGrouped = {};

            data.list.forEach((item) => {
                const date = item.dt_txt.split(' ')[0];
                if (!groupByDay[date]) {
                    groupByDay[date] = [];
                }
                groupByDay[date].push(item);
            });

            console.log(this.forecast, this.location);

            runInAction(() => {
                this.location = data.city;
                this.forecast = groupByDay;
                this.loading = false;
            });
        } catch (error: unknown) {
            runInAction(() => {
                this.error =
                    error instanceof Error ? error.message : String(error);
                this.loading = false;
            });
        }
    }
}

const forecastStore = new ForecastStore();

export default forecastStore;

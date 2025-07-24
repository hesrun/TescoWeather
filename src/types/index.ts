export interface Cords {
    lat: number;
    lon: number;
}

export interface City {
    name: string;
    lat: number;
    lon: number;
    country: string;
    state: string;
}
export interface Location {
    name: string;
    country: string;
    sunrise: number;
    sunset: number;
}
export interface WeatherProps {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}
export interface WeatherDescr {
    main: string;
}
export interface ForecastDay {
    dt: number;
    main: WeatherProps;
    weather: WeatherDescr[];
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    dt_txt: string;
}
export interface ForecastGrouped {
    [date: string]: ForecastDay[];
}
export interface Forecast {
    list: ForecastDay[];
    city: Location;
}

export interface DisplayDayProps {
    data: ForecastGrouped;
    displayDay: string | null;
}

export interface ChartData {
    dt_txt: string;
    temp: number;
}

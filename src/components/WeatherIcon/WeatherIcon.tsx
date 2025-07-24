import {
    WiDaySunny,
    WiCloud,
    WiCloudy,
    WiRain,
    WiShowers,
    WiThunderstorm,
    WiSnow,
    WiFog,
    WiSmoke,
    WiDust,
    WiTornado,
    WiStrongWind,
} from 'react-icons/wi';

type WeatherIconProps = {
    name: string;
    className?: string;
};

const MAIN_ICON_MAP: Record<string, React.ComponentType> = {
    Clear: WiDaySunny,
    Clouds: WiCloudy,
    Rain: WiRain,
    Drizzle: WiShowers,
    Thunderstorm: WiThunderstorm,
    Snow: WiSnow,
    Mist: WiFog,
    Smoke: WiSmoke,
    Haze: WiFog,
    Dust: WiDust,
    Fog: WiFog,
    Sand: WiDust,
    Ash: WiDust,
    Squall: WiStrongWind,
    Tornado: WiTornado,
};

const WeatherIcon = ({ name, className }: WeatherIconProps) => {
    const IconComponent = MAIN_ICON_MAP[name] || WiCloud;
    return <IconComponent className={className} />;
};

export default WeatherIcon;

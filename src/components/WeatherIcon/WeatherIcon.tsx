import WiDaySunny from '../../assets/icons/wi-day-sunny.svg?react';
import WiCloudy from '../../assets/icons/wi-cloudy.svg?react';
import WiRain from '../../assets/icons/wi-rain.svg?react';
import WiShowers from '../../assets/icons/wi-showers.svg?react';
import WiThunderstorm from '../../assets/icons/wi-thunderstorm.svg?react';
import WiSnow from '../../assets/icons/wi-snow.svg?react';
import WiFog from '../../assets/icons/wi-fog.svg?react';
import WiSmoke from '../../assets/icons/wi-smoke.svg?react';
import WiDust from '../../assets/icons/wi-dust.svg?react';
import WiTornado from '../../assets/icons/wi-tornado.svg?react';
import WiStrongWind from '../../assets/icons/wi-strong-wind.svg?react';
import WiCloud from '../../assets/icons/wi-cloud.svg?react';

type WeatherIconProps = {
    name: string;
    className?: string;
};
const MAIN_ICON_MAP: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
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
    return <IconComponent className="WIcon" />;
};

export default WeatherIcon;

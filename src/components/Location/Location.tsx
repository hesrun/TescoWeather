import LuMapPin from '../../assets/icons/map-pin.svg?react';
import { observer } from 'mobx-react-lite';
import forecastStore from '../../store/forecastStore';

const Location = observer(() => {
    return (
        <div className="location">
            {forecastStore.location && (
                <>
                    <div className="location__icon">
                        <LuMapPin />
                    </div>
                    <span className="location__name">
                        {forecastStore.location.name},{' '}
                        {forecastStore.location.country}
                    </span>
                </>
            )}
        </div>
    );
});

export default Location;

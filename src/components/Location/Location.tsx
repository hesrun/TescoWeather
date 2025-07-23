import { observer } from 'mobx-react-lite';
import { LuMapPin } from 'react-icons/lu';
import forecastStore from '../../store/forecastStore';

const Location = observer(() => {
    return (
        <div className="location">
            {forecastStore.location && (
                <>
                    <LuMapPin className="location__icon" />
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

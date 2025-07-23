import { LuMapPin } from 'react-icons/lu';

const Location = () => {
    return (
        <div className="location">
            <LuMapPin className="location__icon" />
            <span className="location__name">Karlovy vary</span>
        </div>
    );
};

export default Location;

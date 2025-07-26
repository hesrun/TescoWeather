import { useState } from 'react';
import LuLocateFixed from '../../assets/icons/locate-fixed.svg?react';
import { GEO_BASE_URL, API_KEY } from '../../constants/constants';
import type { City, Cords } from '../../types';
import useSearch from '../../hooks/useSearch';
import useDebounce from '../../hooks/useDebounce';
import locationStore from '../../store/locationStore';

function makeUrl(city: string, limit: number = 10): string {
    return `${GEO_BASE_URL}?q=${city}&limit=${limit}&appid=${API_KEY}`;
}

const Search = () => {
    const [serchTerm, setSerchTerm] = useState('');
    const debouncedSerchTerm = useDebounce(serchTerm, 300);
    const searchUrl = debouncedSerchTerm ? makeUrl(debouncedSerchTerm) : '';
    const { results, loading, error } = useSearch<City>(searchUrl);

    const handleSetCords = (cords: Cords) => {
        locationStore.setCords(cords);
        setSerchTerm('');
    };

    const handleGetGeoLocation = () => {
        locationStore.getLocation();
    };

    return (
        <div className="search">
            <input
                className="search__input"
                type="text"
                placeholder="Search city..."
                value={serchTerm}
                onChange={(e) => setSerchTerm(e.target.value)}
            />
            {loading && <div className="search__loader loader"></div>}

            <button
                className="search__geo"
                title="Get location"
                onClick={handleGetGeoLocation}
            >
                <LuLocateFixed />
            </button>
            {debouncedSerchTerm && (
                <div className="search__drop">
                    {error && (
                        <div className="note note_error">
                            Search Error: {error}
                        </div>
                    )}
                    {!loading &&
                        !error &&
                        (results.length > 0 ? (
                            <ul className="search__result">
                                {results.map((city) => (
                                    <li
                                        key={`${city.lat}_${city.lon}`}
                                        className="search__result-item"
                                    >
                                        <button
                                            className="search__result-button"
                                            onClick={() =>
                                                handleSetCords({
                                                    lat: city.lat,
                                                    lon: city.lon,
                                                })
                                            }
                                        >
                                            {city.name}, {city.country}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="note note_info">
                                No results found
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default Search;

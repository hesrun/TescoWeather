import { LuLocateFixed } from 'react-icons/lu';

const Search = () => {
    return (
        <div className="search">
            <input
                className="search__input"
                type="text"
                placeholder="Search location"
            />
            <button className="search__geo" title="Get location">
                <LuLocateFixed />
            </button>
            <div className="search__drop">
                <ul className="search__result">
                    <li className="search__result-item">
                        <button className="search__result-button">
                            City 1
                        </button>
                    </li>
                    <li className="search__result-item">
                        <button className="search__result-button">
                            City 1
                        </button>
                    </li>
                    <li className="search__result-item">
                        <button className="search__result-button">
                            City 1
                        </button>
                    </li>
                    <li className="search__result-item">
                        <button className="search__result-button">
                            City 1
                        </button>
                    </li>
                    <li className="search__result-item">
                        <button className="search__result-button">
                            City 1
                        </button>
                    </li>
                    <li className="search__result-item">
                        <button className="search__result-button">
                            City 1
                        </button>
                    </li>
                    <li className="search__result-item">
                        <button className="search__result-button">
                            City 1
                        </button>
                    </li>
                    <li className="search__result-item">
                        <button className="search__result-button">
                            City 1
                        </button>
                    </li>
                    <li className="search__result-item">
                        <button className="search__result-button">
                            City 1
                        </button>
                    </li>
                    <li className="search__result-item">
                        <button className="search__result-button">
                            City 1
                        </button>
                    </li>
                    <li className="search__result-item">
                        <button className="search__result-button">
                            City 1
                        </button>
                    </li>
                    <li className="search__result-item">
                        <button className="search__result-button">
                            City 1
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Search;

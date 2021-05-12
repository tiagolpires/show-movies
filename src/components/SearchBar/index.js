import './style.css'
import SearchBarMovie from '../SearchBarMovie'

const index = ({ isSearchBarActive, setIsSearchBarActive }) => {

    return (
        <div className={`search-bar-container ${isSearchBarActive && 'on'}`}>
            <div className="search-bar">
                <input type="text" placeholder="Digite aqui..."/>
                <div className="search-bar-movies-container">
                    <SearchBarMovie/>
                </div>
            </div>
        </div>
    )
}

export default index
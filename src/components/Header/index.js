import './style.css'
import { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import searchIcon from './icons/search.svg'
import SearchBar from '../SearchBar'

const Index = () => {
    const [isSearchBarActive, setIsSearchBarActive] = useState(false)
                   
    return (
        <header className="main-header">
            <div className="main-header-container">
                <div className="main-header-logo">
                    <span>SUNO <b>MOVIES</b></span>
                </div>
                <div className="main-header-menu">
                    <nav className="main-header-nav">
                        <div className="main-header-nav-item selected">
                            <Link to="/">INÍCIO</Link>
                        </div>
                        <div className="main-header-nav-item selected">
                            <Link to="/#catalog">CATÁLOGO</Link>
                        </div>
                    </nav>
                    <img 
                        src={searchIcon} 
                        alt="search" 
                        className={'main-header-search-icon ' + isSearchBarActive}
                        onClick={() => setIsSearchBarActive(!isSearchBarActive)}
                    />
                </div>
            </div>
            <SearchBar isSearchBarActive={isSearchBarActive} setIsSearchBarActive={setIsSearchBarActive}/>
        </header>
    )
}

export default Index
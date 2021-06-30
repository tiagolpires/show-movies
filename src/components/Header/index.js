import './style.css'
import { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import searchIcon from './icons/search.svg'
import searchIconActive from './icons/search-active.svg'
import mobileMenuIcon from './icons/mobile-hamburguer.svg'
import mobileMenuIconActive from './icons/mobile-hamburguer-active.svg'
import SearchBar from '../SearchBar'

const Index = () => {
    const [isSearchBarActive, setIsSearchBarActive] = useState(false)
    const [isMenuActive, setIsMenuActive] = useState(false)
                   
    return (
        <> 
            <header className="main-header">
                <div className="main-header-container">
                    <img src={mobileMenuIcon} alt="menu" className={`main-header-mobile-icon ${!isMenuActive && 'on'}`}  
                        onClick={() => {
                            isSearchBarActive && setIsSearchBarActive(!isSearchBarActive) 
                            setIsMenuActive(!isMenuActive)
                        }} 
                    />
                    <img src={mobileMenuIconActive} alt="menu"  className={`main-header-mobile-icon ${isMenuActive && 'on'}`} 
                        onClick={() => {
                            setIsMenuActive(!isMenuActive)
                        }} 
                    />
                    <Link to="/">
                        <div className="main-header-logo">
                            <span>SHOW <b>MOVIES</b></span>
                        </div>
                    </Link>
                    <div className="main-header-menu">
                        <nav className="main-header-nav">
                            <div className="main-header-nav-item selected">
                                <Link to="/">INÍCIO</Link>
                            </div>
                            <div className="main-header-nav-item selected">
                                <Link to="/#catalog">CATÁLOGO</Link>
                            </div>
                        </nav>
                        <img src={searchIcon} alt="search" className={`main-header-search-icon ${!isSearchBarActive && 'on'}`} 
                            onClick={() => {
                                isMenuActive && setIsMenuActive(!isMenuActive) 
                                setIsSearchBarActive(!isSearchBarActive)
                            }}
                        />
                        <img src={searchIconActive} alt="search" className={`main-header-search-icon ${isSearchBarActive && 'on'}`} 
                            onClick={() => {
                                setIsSearchBarActive(!isSearchBarActive)
                            }}
                        />
                    </div>
                </div>
                <div className={`main-header-movile-nav-container ${isMenuActive && 'on'}`}>
                    <nav className='main-header-movile-nav'>
                        <Link to="/" onClick={() => setIsMenuActive(!isMenuActive)}>
                            <div className='main-header-mobile-nav-item'>
                                <span>INÍCIO</span>
                            </div>
                        </Link>
                        <Link to="/#catalog" onClick={() => setIsMenuActive(!isMenuActive)}>
                            <div className='main-header-mobile-nav-item'>
                                <span>CATÁLOGO</span>
                            </div>
                        </Link>
                    </nav>
                </div>
                <SearchBar isSearchBarActive={isSearchBarActive} setIsSearchBarActive={setIsSearchBarActive}/>
            </header>
            <div className={`overlay ${isSearchBarActive && 'on'} ${isMenuActive && 'on'}`}></div>
        </>
    )
}

export default Index
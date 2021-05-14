import './style.css'
import { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import searchIcon from './icons/search.svg'
import mobileMenuIcon from './icons/mobile-hamburguer.svg'
import SearchBar from '../SearchBar'

const Index = () => {
    const [isSearchBarActive, setIsSearchBarActive] = useState(false)
    const [isMenuActive, setIsMenuActive] = useState(false)
                   
    return (
        <> 
            <header className="main-header">
                <div className="main-header-container">
                    <div className='main-header-mobile-icon'>
                        <img src={mobileMenuIcon} alt="menu" onClick={() => {
                                isSearchBarActive && setIsSearchBarActive(!isSearchBarActive) 
                                setIsMenuActive(!isMenuActive)
                            }} 
                        />
                    </div>
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
                        <img src={searchIcon} alt="search" className={'main-header-search-icon'} onClick={() => {
                                isMenuActive && setIsMenuActive(!isMenuActive) 
                                setIsSearchBarActive(!isSearchBarActive)
                            }}
                        />
                    </div>
                </div>
                <div className={`main-header-movile-nav-container ${isMenuActive && 'on'}`}>
                    <nav className='main-header-movile-nav'>
                        <Link to="/">
                            <div className='main-header-mobile-nav-item'>
                                <span>INÍCIO</span>
                            </div>
                        </Link>
                        <Link to="/#catalog">
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
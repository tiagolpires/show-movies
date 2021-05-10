import './style.css'
import searchIcon from './icons/search.svg'

const index = () => {
    return (
        <header className="main-header">
            <div className="main-header-container">
                <div className="main-header-logo">
                    <span>SUNO <b>MOVIES</b></span>
                </div>
                <div className="main-header-menu">
                    <nav className="main-header-nav">
                        <div className="main-header-nav-item selected">
                            <a href="home">INÍCIO</a>
                        </div>
                        <div className="main-header-nav-item selected">
                            <a href="home">CATÁLOGO </a>
                        </div>
                    </nav>
                    <img src={searchIcon} alt="search" className="main-header-search-icon" />
                </div>
            </div>
        </header>
    )
}

export default index
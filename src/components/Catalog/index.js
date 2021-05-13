import './style.css'
import CatalogMovie from '../CatalogMovie'
import downArrow from './icons/down-arrow.svg'

const index = ({ movies, genres }) => {
    return (
        <>
            <section className="catalog-section">
                <div className="catalog" id="catalog">
                    <div className="catalog-filters">
                        <div className="catalog-left-filters">
                            <div className="catalog-filter-container">
                                <div className="catalog-filter-btn">
                                    <img src={downArrow} alt="down" />
                                    <span>por gênero</span>
                                </div>
                                <ul className="catalog-filter-dropdown-content">
                                    <li>Ação</li>
                                    <li>Drama</li>
                                    <li>Comédia</li>
                                    <li>Romance</li>
                                    <li>Aventura</li>
                                </ul>
                            </div>
                            <div className="catalog-filter-trending selected">
                                <span>mais populares</span>
                            </div>
                        </div>
                        <div className="catalog-filter-container">
                            <div className="catalog-filter-btn">
                                <img src={downArrow} alt="down" />
                                <span>em lista</span>
                            </div>
                            <ul className="catalog-filter-dropdown-content">
                                <li>Grid</li>
                                <li>Lista</li>
                            </ul>
                        </div>
                    </div>
                    <div className="catalog-movies-container wrap">
                        {movies.map(movie => (
                            <CatalogMovie movie={movie} genres={genres}/>  
                        ))}
                    </div>
                    <div className="catalog-load-more-button">
                        <span>carregar mais</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default index
import './style.css'
import { useState } from 'react'
import CatalogMovie from '../CatalogMovie'
import downArrow from './icons/down-arrow.svg'

const Index = ({ movies, genres, setMoviesCategorie, moviesCategorie }) => {
    const [catalogDisplayMode, setCatalogDisplayMode] = useState('em grid')
    return (
        <section className="catalog-section">
            <div className="catalog" id="catalog">
                <div className="catalog-filters">
                    <div className="catalog-left-filters">
                        <div className="catalog-filter-container">
                            <div className="catalog-filter-btn">
                                <img src={downArrow} alt="down" />
                                <span>{moviesCategorie === 'mais populares' ? 'por gênero' : moviesCategorie}</span>
                            </div>
                            <ul className="catalog-filter-dropdown-content">
                                <li onClick={() => setMoviesCategorie('Ação')}>Ação</li>
                                <li onClick={() => setMoviesCategorie('Drama')}>Drama</li>
                                <li onClick={() => setMoviesCategorie('Comédia')}>Comédia</li>
                                <li onClick={() => setMoviesCategorie('Romance')}>Romance</li>
                                <li onClick={() => setMoviesCategorie('Aventura')}>Aventura</li>
                            </ul>
                        </div>
                        <div 
                            className={`catalog-filter-trending ${moviesCategorie === 'mais populares' && 'selected'}`}
                            onClick={() => setMoviesCategorie('mais populares')}
                        >
                            <span>mais populares</span>
                        </div>
                    </div>
                    <div className="catalog-filter-container">
                        <div className="catalog-filter-btn">
                            <img src={downArrow} alt="down" />
                            <span>{catalogDisplayMode}</span>
                        </div>
                        <ul className="catalog-filter-dropdown-content">
                            <li onClick={() => setCatalogDisplayMode('em grid')}>Grid</li>
                            <li onClick={() => setCatalogDisplayMode('em lista')}>Lista</li>
                        </ul>
                    </div>
                </div>
                <div className={`catalog-movies-container ${catalogDisplayMode === 'em grid' ? 'wrap' : 'list'}`}>
                    {movies.map(movie => (
                        <CatalogMovie movie={movie} genres={genres}/>  
                    ))}
                </div>
                <div className="catalog-load-more-button">
                    <span>carregar mais</span>
                </div>
            </div>
        </section>
    )
}

export default Index
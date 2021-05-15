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
                            <button className="catalog-filter-btn">
                                <img src={downArrow} alt="down" />
                                {moviesCategorie === 'mais populares' ? 'por gênero' : moviesCategorie}
                            </button>
                            <ul className="catalog-filter-dropdown-content">
                                <li onClick={() => setMoviesCategorie('Ação')}>Ação</li>
                                <li onClick={() => setMoviesCategorie('Drama')}>Drama</li>
                                <li onClick={() => setMoviesCategorie('Comédia')}>Comédia</li>
                                <li onClick={() => setMoviesCategorie('Romance')}>Romance</li>
                                <li onClick={() => setMoviesCategorie('Aventura')}>Aventura</li>
                            </ul>
                        </div>
                        <button 
                            className={`catalog-filter-trending ${moviesCategorie === 'mais populares' && 'selected'}`}
                            onClick={() => setMoviesCategorie('mais populares')}
                        >
                            mais populares
                        </button>
                    </div>
                    <div className="catalog-filter-container display-mode">
                        <button className="catalog-filter-btn">
                            <img src={downArrow} alt="down" />
                            {catalogDisplayMode}
                        </button>
                        <ul className="catalog-filter-dropdown-content">
                            <li onClick={() => setCatalogDisplayMode('em grid')}>Grid</li>
                            <li onClick={() => setCatalogDisplayMode('em lista')}>Lista</li>
                        </ul>
                    </div>
                </div>
                <div className={`catalog-movies-container ${catalogDisplayMode === 'em grid' ? 'wrap' : 'list'}`}>
                    {movies.map(movie => (
                        <CatalogMovie key={movie.id} movie={movie} genres={genres}/>  
                    ))}
                </div>
                <button className="catalog-load-more-button">carregar mais</button>
            </div>
        </section>
    )
}

export default Index
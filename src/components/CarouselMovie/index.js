import './style.css'
import { Link } from 'react-router-dom'
import rateStar from './icons/rate-star.svg'

const Index = ( { movie: {title, vote_average: rate, id, poster_path: posterPath, genres}} ) => {
    return (
        <Link to={`/movie/` + id}>
            <div className="carousel-movie-container">
                <div className="carousel-movie-image" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w300${posterPath})`}}></div>
                <div className="carousel-movie-info">
                    <h4>{title}</h4>
                    <span>{genres.length > 0 && genres.slice(0, 2).join(', ')}</span>
                    <div className="carousel-movie-rate-container">
                        <img src={rateStar} alt="rate-star" />
                        <span>{rate}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Index
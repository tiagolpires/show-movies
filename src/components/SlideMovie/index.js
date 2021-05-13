import './style.css'
import { Link } from 'react-router-dom'
import rateStar from './icons/rate-star.svg'

const index = ( { movie: {title, vote_average: rate, id, poster_path: posterPath} } ) => {
    return (
        <Link to={`/movie/` + id}>
            <div className="slide-movie-container">
                <div className="slide-movie-image" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w300${posterPath})`}}></div>
                <div className="slide-movie-info">
                    <h4>{title}</h4>
                    <span>Suspense, Terror</span>
                    <div className="slide-movie-rate-container">
                        <img src={rateStar} alt="rate-star" />
                        <span>{rate}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default index
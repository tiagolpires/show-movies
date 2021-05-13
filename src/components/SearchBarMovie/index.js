import './style.css'
import { Link } from 'react-router-dom'
import rateStar from './icons/rate-star.svg'

const index = ({ movie: {title, vote_average: rate, id, poster_path: posterPath, genres}, setIsSearchBarActive }) => {
    return (
        <Link to={`/movie/${id}`}>
            <div className="search-bar-movie" onClick={() => setIsSearchBarActive(false)}>
                <div className="search-bar-movie-image" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w200${posterPath})`}}></div>
                <div className="search-bar-movie-info">
                    <h4>{title.length <= 13 ? title : title.substr(0, 13) + '...'}</h4>
                    <span className="search-bar-movie-info-gender">{genres.length > 0 && genres[0]}</span>
                    <div className="search-bar-movie-rate-container">
                        <img src={rateStar} alt="rate-star"/>
                        <span>{rate}</span>
                    </div>
                </div>
            </div>   
        </Link>
    )
}

export default index
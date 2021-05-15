import './style.css'
import { Link } from 'react-router-dom'
import rateStar from './icons/rate-star.svg'

const Index = ({ movie: {title, vote_average: rate, id, poster_path: posterPath, overview, genres}}) => {

    const getReducedOverview = (movieOverview) => {
        if(window.innerWidth > 1040) return overview.length <= 200 ? overview : overview.substr(0, 200) + '...'
        return overview.substr(0, 80) + '...'
    }

    return (
            <div className="catalog-movie">
                <Link to={`/movie/` + id}>
                    <div className="catalog-movie-image" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w300${posterPath})`}}></div>
                </Link>
                <div className="catalog-movie-info">
                    <h4>{title}</h4>
                    <span className="catalog-movie-info-gender">{genres.length > 0 && genres.slice(0, 2).join(', ')}</span>
                    <div className="catalog-movie-rate-container">
                        <img src={rateStar} alt="rate-star" />
                        <span>{rate}</span>
                    </div>
                    <p>{getReducedOverview(overview)}</p>
                </div>
            </div>
    )
}

export default Index
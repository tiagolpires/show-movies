import './style.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import rateStar from './icons/rate-star.svg'

const Index = ({ movie: {title, vote_average: rate, id, poster_path: posterPath, genre_ids: genreIds, overview}, genres }) => {
    const [movieGenres, setMovieGenres] = useState([])

    useEffect(() => {
        const getGenres = () => {
            if(genreIds.length > 0 && Object.keys(genres).length > 0) {
                let genresList = [] 
                for(var i = 0; i < 2; i++) {
                    genres[genreIds[i]] && genresList.push(genres[genreIds[i]])
                }  
                setMovieGenres(genresList)
            }
        }
        getGenres()
    }, [genres, genreIds])

    return (
            <div className="catalog-movie">
                <Link to={`/movie/` + id}>
                    <div className="catalog-movie-image" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w300${posterPath})`}}></div>
                </Link>
                <div className="catalog-movie-info">
                    <h4>{title}</h4>
                    <span className="catalog-movie-info-gender">{movieGenres.length > 0 && movieGenres.join(', ')}</span>
                    <div className="catalog-movie-rate-container">
                        <img src={rateStar} alt="rate-star" />
                        <span>{rate}</span>
                    </div>
                    <p>{overview.length <= 200 ? overview : overview.substr(0, 200) + '...'}</p>
                </div>
            </div>
    )
}

export default Index
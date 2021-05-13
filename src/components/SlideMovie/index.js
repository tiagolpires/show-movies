import './style.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import rateStar from './icons/rate-star.svg'

const Index = ( { movie: {title, vote_average: rate, id, poster_path: posterPath, genre_ids: genreIds}, genres } ) => {
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
        <Link to={`/movie/` + id}>
            <div className="slide-movie-container">
                <div className="slide-movie-image" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w300${posterPath})`}}></div>
                <div className="slide-movie-info">
                    <h4>{title}</h4>
                    <span>{movieGenres.length > 0 && movieGenres.join(', ')}</span>
                    <div className="slide-movie-rate-container">
                        <img src={rateStar} alt="rate-star" />
                        <span>{rate}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Index
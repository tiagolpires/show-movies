import './style.css'
import { useState, useEffect } from 'react'
import rateStar from './icons/rate-star.svg'

const Index = ({ movie: {poster_path: posterPath, title, vote_average: rate, overview, genres} }) => {
    const [movieGenres, setMovieGenres] = useState([])

    useEffect(() => {
        const getGenres = () => {
            let genresList = []
            genres && genres.forEach(genre => genresList.push(genre.name))
            setMovieGenres(genresList)
        }
        getGenres()
    }, [genres])
    

    return (
        <div className="single-movie">
            <div className="single-movie-image" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w400${posterPath})`}}></div>
            <div className="single-movie-info">
                <h1>{title}</h1>
                <div className="single-movie-genre-rate">
                    <span className="single-movie-genre">
                        {movieGenres.length > 0 && movieGenres.join(', ')}
                    </span>
                    <div className="single-movie-rate">
                        <img src={rateStar} alt="rate-star"/>
                        <span>{rate}</span>
                    </div>
                </div>
                <div className="single-movie-synopsis">
                    <span>Sinopse</span>
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    )
}

export default Index
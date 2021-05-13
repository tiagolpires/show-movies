import './style.css'
import { useState, useEffect } from 'react'

const Index = ( { movie } ) => {
    const [trailer, setTrailer] = useState(false)

    useEffect(() => {
        const getMovieTrailer = async() => {
            movie.videos && movie.videos.results.length > 0 && setTrailer(movie.videos.results[0].key)
        }
        getMovieTrailer()
    }, [movie.videos])

    return (
            <div className="single-movie-trailer">
                <div className="single-movie-trailer-title">
                    <h2>Trailer</h2>
                </div>
                <div className={`single-movie-trailer-video ${trailer && 'on'}`}>
                    {trailer ? <iframe title="movie-trailer" src={`https://www.youtube.com/embed/${trailer}`}></iframe> : 'Trailer Indisponível para esse título'}
                </div>
            </div>
    )
}

export default Index
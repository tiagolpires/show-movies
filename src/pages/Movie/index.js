import './style.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Api from '../../Api'
import SingleMovie from '../../components/SingleMovie'
import SingleMovieTrailer from '../../components/SingleMovieTrailer'

const Index = (props) => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const getMovie = async() => {
            const { id } = props.match.params 
            const movie = await Api.getMovie(id)
            setMovie(movie)
        }
        getMovie()
    }, [props.match.params])

    return (
        <>
            <main className="single-movie-main" style={{backgroundImage: "url(/images/background-image.jpg)"}}>
                <SingleMovie movie={movie}/>
            </main>
            <section className="single-movie-trailer-section">
                <SingleMovieTrailer movie={movie} />
            </section>
            <Link to="/">
                <div className="single-movie-back-button">Voltar</div>
            </Link>
        </>
    )
}

export default Index
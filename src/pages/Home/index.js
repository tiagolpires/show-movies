import './style.css'
import { useEffect, useState } from 'react'
import Api from '../../Api'
import Slider from '../../components/Slider'
import CatalogHeader from '../../components/CatalogHeader'
import Catalog from '../../components/Catalog'

const Index = () => {
    const [trendingMovies, setTrendingMovies] = useState([])
    const [catalogMovies, setCatalogMovies] = useState([])
    const [catalogMoviesCategorie, setCatalogMoviesCategorie] = useState('mais populares')
    const [genres, setGenres] = useState({})

    useEffect(() => {
        const getTrendingMovies = async() => {
            const trendingMovies = await Api.getTrendingMovies()
            setTrendingMovies(trendingMovies.results)
        }

        const getCatalogMovies = async() => {
            const catalogMovies = await Api.getCatalogMovies(catalogMoviesCategorie)
            setCatalogMovies(catalogMovies.results)
        }

        const getGenreList = async() => {
            const res = await Api.getGenreList()
            const genreList = res.genres
            const genresObj = {}
            genreList.forEach(genre => {
                genresObj[genre.id] = genre.name
            })
            setGenres(genresObj)
        }

        getTrendingMovies()
        getCatalogMovies()
        getGenreList()
    }, [catalogMoviesCategorie])

    return (
        <>
            <main className ="main-content" style={{backgroundImage: "url(/images/background-image.jpg)"}}>
                <Slider movies={trendingMovies} genres={genres}/>
            </main>
            <CatalogHeader/>
            <Catalog movies={catalogMovies} genres={genres} setMoviesCategorie={setCatalogMoviesCategorie} moviesCategorie={catalogMoviesCategorie}/>
        </>
    )
}

export default Index
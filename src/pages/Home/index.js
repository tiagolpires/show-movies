import './style.css'
import { useEffect, useState } from 'react'
import Api from '../../Api'
import Slider from '../../components/Slider'
import CatalogHeader from '../../components/CatalogHeader'
import Catalog from '../../components/Catalog'

const Index = () => {
    const [trendingMovies, setTrendingMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [genres, setGenres] = useState({})

    useEffect(() => {
        const getTrendingMovies = async() => {
            const trendingMovies = await Api.getTrendingMovies()
            setTrendingMovies(trendingMovies.results)
        }

        const getTopRatedMovies = async() => {
            const topRatedMovies = await Api.getTopRatedMovies()
            setTopRatedMovies(topRatedMovies.results)
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
        getTopRatedMovies()
        getGenreList()
    }, [])

    return (
        <>
            <main className ="main-content" style={{backgroundImage: "url(/images/background-image.jpg)"}}>
                <Slider movies={trendingMovies} genres={genres}/>
            </main>
            <CatalogHeader/>
            <Catalog movies={topRatedMovies} genres={genres}/>
        </>
    )
}

export default Index
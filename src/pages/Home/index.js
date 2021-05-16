import './style.css'
import { useEffect, useState } from 'react'
import Api from '../../services/Api'
import Carousel from '../../components/Carousel'
import CatalogHeader from '../../components/CatalogHeader'
import Catalog from '../../components/Catalog'

const Index = () => {
    const [trendingMovies, setTrendingMovies] = useState([])
    const [catalogMovies, setCatalogMovies] = useState([])
    const [catalogMoviesCategorie, setCatalogMoviesCategorie] = useState('mais populares')

    useEffect(() => {
        const getTrendingMovies = async() => {
            const trendingMovies = await Api.getTrendingMovies()
            setTrendingMovies(trendingMovies)
        }
        getTrendingMovies()
    }, [])

    useEffect(() => {
        const getCatalogMovies = async() => {
            const catalogMovies = await Api.getCatalogMovies(catalogMoviesCategorie)
            setCatalogMovies(catalogMovies)
        }
        getCatalogMovies()
    }, [catalogMoviesCategorie])

    return (
        <>
            <main className ="main-content" style={{backgroundImage: "url(/images/background-image.jpg)"}}>
                <Carousel movies={trendingMovies}/>
            </main>
            <CatalogHeader/>
            <Catalog movies={catalogMovies} setMoviesCategorie={setCatalogMoviesCategorie} moviesCategorie={catalogMoviesCategorie}/>
        </>
    )
}

export default Index
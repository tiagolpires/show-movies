import './style.css'
import { useEffect, useState } from 'react'
import Api from '../../services/Api'
import Slider from '../../components/Slider'
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

        const getCatalogMovies = async() => {
            const catalogMovies = await Api.getCatalogMovies(catalogMoviesCategorie)
            setCatalogMovies(catalogMovies)
        }

        getTrendingMovies()
        getCatalogMovies()
    }, [catalogMoviesCategorie])

    return (
        <>
            <main className ="main-content" style={{backgroundImage: "url(/images/background-image.jpg)"}}>
                <Slider movies={trendingMovies}/>
            </main>
            <CatalogHeader/>
            <Catalog movies={catalogMovies} setMoviesCategorie={setCatalogMoviesCategorie} moviesCategorie={catalogMoviesCategorie}/>
        </>
    )
}

export default Index
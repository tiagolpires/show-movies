import './style.css'
import { useEffect, useState } from 'react'
import Api from '../../Api'
import Slider from '../../components/Slider'
import CatalogHeader from '../../components/CatalogHeader'
import Catalog from '../../components/Catalog'

const Index = () => {
    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
        const getTrendingMovies = async() => {
            const trendingMovies = await Api.getTrendingMovies()
            setTrendingMovies(trendingMovies.results)
        }
        getTrendingMovies()
    }, [])

    return (
        <>
            <main className ="main-content" style={{backgroundImage: "url(/images/background-image.jpg)"}}>
                <Slider movies={trendingMovies}/>
            </main>
            <CatalogHeader/>
            <Catalog/>
        </>
    )
}

export default Index
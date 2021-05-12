import './style.css'
import { useEffect, useState } from 'react'
import Api from '../../Api'
import Header from '../../components/Header'
import Slider from '../../components/Slider'
import CatalogHeader from '../../components/CatalogHeader'
import Catalog from '../../components/Catalog'
import Footer from '../../components/Footer'


const Index = () => {
    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
        getTrendingMovies()
    }, [])

    async function getTrendingMovies() {
        const trendingMovies = await Api.getTrendingMovies()
        setTrendingMovies(trendingMovies.results)
    }

    return (
        <>
            <Header/>
            <main className ="main-content" style={{backgroundImage: "url(/images/background-image.jpg)"}}>
                <Slider movies={trendingMovies}/>    
            </main>
            <CatalogHeader/>
            <Catalog/>
            <Footer/>
        </>
    )
}

export default Index
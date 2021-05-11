import './style.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SingleMovie from '../../components/SingleMovie'
import SingleMovieTrailer from '../../components/SingleMovieTrailer'

const index = () => {
    return (
        <>
            <Header/>
            <main className="single-movie-main" style={{backgroundImage: "url(/images/background-image.jpg)"}}>
                <SingleMovie/>
            </main>
            <section className="single-movie-trailer-section">
                <SingleMovieTrailer/>
            </section>
            <div className="single-movie-back-button">Voltar</div>
            <Footer/>
        </>
    )
}

export default index
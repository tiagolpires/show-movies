import './style.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SingleMovie from '../../components/SingleMovie'

const index = () => {
    return (
        <>
            <Header/>
            <main className="single-movie-main" style={{backgroundImage: "url(/images/background-image.jpg)"}}>
                <SingleMovie/>
            </main>
            <Footer/>
        </>
    )
}

export default index
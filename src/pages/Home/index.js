import './style.css'
import Header from '../../components/Header'
import Slider from '../../components/Slider'
import CatalogHeader from '../../components/CatalogHeader'
import CatalogMovie from '../../components/CatalogMovie'


const index = () => {
    return (
        <>
            <Header/>
            <main className ="main-content" style={{backgroundImage: "url(/images/background-image.jpg)"}}>
                <Slider/>
            </main>
            <CatalogHeader/>
            <div className="centralizing">
                <CatalogMovie/>
            </div>
        </>
    )
}

export default index
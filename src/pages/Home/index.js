import './style.css'
import Header from '../../components/Header'
import Slider from '../../components/Slider'
import CatalogHeader from '../../components/CatalogHeader'
import Catalog from '../../components/Catalog'


const index = () => {
    return (
        <>
            <Header/>
            <main className ="main-content" style={{backgroundImage: "url(/images/background-image.jpg)"}}>
                <Slider/>
            </main>
            <CatalogHeader/>
            <Catalog/>
        </>
    )
}

export default index
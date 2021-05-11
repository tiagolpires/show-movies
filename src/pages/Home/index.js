import './style.css'
import Header from '../../components/Header'
import Slider from '../../components/Slider'

const index = () => {
    return (
        <>
            <Header/>
            <main className ="main-content" style={{backgroundImage: "url(/images/background-image.jpg)"}}>
                <Slider/>
            </main>
        </>
    )
}

export default index
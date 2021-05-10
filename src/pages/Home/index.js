import './style.css'
import Header from '../../components/Header'
import SlideMovie from '../../components/SlideMovie'

const index = () => {
    return (
        <>
            <Header/>
            <main className ="main-content" style={{backgroundImage: "url(/images/background-image.jpg)"}}>
                <SlideMovie/>
            </main>
        </>
    )
}

export default index
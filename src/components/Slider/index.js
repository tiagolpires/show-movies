import './style.css'
import SlideMovie from '../SlideMovie'
import leftArrow from './icons/left-arrow.svg'
import rigthArrow from './icons/right-arrow.svg'

const index = () => {
    return (
        <>
            <div className="slider">
                <img src={leftArrow} alt="back" className="slider-arrow"/>
                <div className="slider-content">
                    <div className="slider-title">
                        <div className="slider-title-circle"></div>
                        <h3>LANÇAMENTOS <span>DA SEMANA</span></h3>
                    </div>
                    <div className="slider-movies-container">
                        <SlideMovie/>
                        <SlideMovie/>
                        <SlideMovie/>
                        <SlideMovie/>
                        <SlideMovie/>
                        <SlideMovie/>
                    </div>
                </div>
                <img src={rigthArrow} alt="next" className="slider-arrow"/>
            </div>
        </>
    )
}

export default index
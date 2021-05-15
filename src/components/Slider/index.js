import './style.css'
import { useState } from 'react'
import SlideMovie from '../SlideMovie'
import leftArrow from './icons/left-arrow.svg'
import rigthArrow from './icons/right-arrow.svg'

const Index = ({ movies, genres }) => {
    const [carouselPosition, setCarouselPosition] = useState(0)

    const handleArrowClick = (direction) =>{
        const windowWidth = window.innerWidth
        const carouselWidth = windowWidth >= 1300 ? 1040 : windowWidth * 0.8
        const listWidth = movies.length * 258
        const carouselDeslocateWidth = carouselWidth / 2
        let carouselNewPosition

        if(direction === 'left') {
            carouselNewPosition = carouselPosition + carouselDeslocateWidth
            if(carouselNewPosition > 0) carouselNewPosition = 0
        }
        if(direction === 'right') {
            carouselNewPosition = carouselPosition - carouselDeslocateWidth
            if((carouselWidth - listWidth) > carouselNewPosition) carouselNewPosition = (carouselWidth - listWidth)
        }

        setCarouselPosition(carouselNewPosition)
    }

    return (
        <div className="slider">
            <img src={leftArrow} alt="back" className="slider-arrow-left" onClick={() => handleArrowClick('left')}/>
            <img src={rigthArrow} alt="next" className="slider-arrow-right" onClick={() => handleArrowClick('right')}/>

            <div className="slider-content">
                <div className="slider-title">
                    <div className="slider-title-circle"></div>
                    <h3>LANÇAMENTOS <span>DA SEMANA</span></h3>
                </div>
                <div className="slider-movies-container">
                    <div className="slider-movies" style={{marginLeft: carouselPosition}}>
                        {movies.map(movie => (
                            <SlideMovie key={movie.id} movie={movie} genres={genres}/>  
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
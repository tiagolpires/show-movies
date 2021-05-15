import './style.css'
import { useState } from 'react'
import CarouselMovie from '../CarouselMovie'
import leftArrow from './icons/left-arrow.svg'
import rigthArrow from './icons/right-arrow.svg'

const Index = ({ movies, genres }) => {
    const [carouselPosition, setCarouselPosition] = useState(0)

    const handleArrowClick = (direction) =>{
        const windowWidth = window.innerWidth
        const carouselWidth = windowWidth >= 1300 ? 1040 : windowWidth * 0.8
        const listWidth = movies.length * 258
        const carouselDeslocateWidth = windowWidth < 500 ? 258 : carouselWidth / 2
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
        <div className="carousel">
            <img src={leftArrow} alt="back" className="carousel-arrow-left" onClick={() => handleArrowClick('left')}/>
            <img src={rigthArrow} alt="next" className="carousel-arrow-right" onClick={() => handleArrowClick('right')}/>

            <div className="carousel-content">
                <div className="carousel-title">
                    <div className="carousel-title-circle"></div>
                    <h3>LANÇAMENTOS <span>DA SEMANA</span></h3>
                </div>
                <div className="carousel-movies-container">
                    <div className="carousel-movies" style={{marginLeft: carouselPosition}}>
                        {movies.map(movie => (
                            <CarouselMovie key={movie.id} movie={movie} genres={genres}/>  
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
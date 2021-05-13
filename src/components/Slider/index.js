import './style.css'
import { useState } from 'react'
import SlideMovie from '../SlideMovie'
import leftArrow from './icons/left-arrow.svg'
import rigthArrow from './icons/right-arrow.svg'

const Index = ({ movies, genres }) => {
    const [scrollX, setScrollX] = useState(0)

    const handleRightArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth /2)
        let listW = movies.length * 218
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x)
    }

    const handleLeftArrow = () =>{}

    return (
        <div className="slider">
            <img src={leftArrow} alt="back" className="slider-arrow-left" onClick={handleLeftArrow}/>
            <img src={rigthArrow} alt="next" className="slider-arrow-right" onClick={handleRightArrow}/>

            <div className="slider-content">
                <div className="slider-title">
                    <div className="slider-title-circle"></div>
                    <h3>LANÇAMENTOS <span>DA SEMANA</span></h3>
                </div>
                <div className="slider-movies-container">
                    {movies.map(movie => (
                        <SlideMovie movie={movie} genres={genres}/>  
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Index
import './style.css'
import rateStar from './icons/rate-star.svg'

const index = () => {
    return (
        <>
            <div className="slide-movie-container">
                <div className="slide-movie-image" style={{backgroundImage: "url(/images/movie-slide-example-image.jpg)"}}></div>
                <div className="slide-movie-info">
                    <h4>Follow Me</h4>
                    <span>Suspense, Terror</span>
                    <div className="slide-movie-rate-container">
                        <img src={rateStar} alt="rate-star" />
                        <span>8.4</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index
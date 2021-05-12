import './style.css'
import rateStar from './icons/rate-star.svg'

const index = ({ title, imageUrl, rate }) => {
    return (
        <>
            <div className="slide-movie-container">
                <div className="slide-movie-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
                <div className="slide-movie-info">
                    <h4>{title}</h4>
                    <span>Suspense, Terror</span>
                    <div className="slide-movie-rate-container">
                        <img src={rateStar} alt="rate-star" />
                        <span>{rate}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index
import './style.css'
import rateStar from './icons/rate-star.svg'

const index = () => {
    return (
        <div className="search-bar-movie">
            <div className="search-bar-movie-image" style={{backgroundImage: "url(/images/movie-slide-example-image.jpg)"}}></div>
            <div className="search-bar-movie-info">
                <h4>Goosebumbs 2</h4>
                <span className="search-bar-movie-info-gender">Comédia</span>
                <div className="search-bar-movie-rate-container">
                    <img src={rateStar} alt="rate-star" />
                    <span>8.4</span>
                </div>
            </div>
        </div>
    )
}

export default index
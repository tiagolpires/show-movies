import './style.css'
import rateStar from './icons/rate-star.svg'

const index = () => {
    return (
        <>
            <div className="catalog-movie">
                <div className="catalog-movie-image" style={{backgroundImage: "url(/images/movie-slide-example-image.jpg)"}}></div>
                <div className="catalog-movie-info">
                    <h4>Goosebumbs 2</h4>
                    <span className="catalog-movie-info-gender">Comédia</span>
                    <div className="catalog-movie-rate-container">
                        <img src={rateStar} alt="rate-star" />
                        <span>8.4</span>
                    </div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
            </div>
        </>
    )
}

export default index
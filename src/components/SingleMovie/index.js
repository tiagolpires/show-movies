import './style.css'
import rateStar from './icons/rate-star.svg'

const index = () => {
    return (
        <>
            <div className="single-movie">
                <div className="single-movie-image" style={{backgroundImage: "url(/images/movie-slide-example-image.jpg)"}}></div>
                <div className="single-movie-info">
                    <h1>Solteira Quase Surtando</h1>
                    <div className="single-movie-genre-rate">
                        <span className="single-movie-genre">Comédia</span>
                        <div className="single-movie-rate">
                            <img src={rateStar} alt="rate-star" />
                            <span>8.4</span>
                        </div>
                    </div>
                    <div className="single-movie-synopsis">
                        <span>Sinopse</span>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index
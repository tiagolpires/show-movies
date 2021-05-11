import './style.css'

const index = () => {
    return (
        <>
            <div className="single-movie-trailer">
                <div className="single-movie-trailer-title">
                    <h2>Trailer</h2>
                </div>
                <div className="single-movie-trailer-video">
                    <iframe title="movie-trailer" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                </div>
            </div>
        </>
    )
}

export default index
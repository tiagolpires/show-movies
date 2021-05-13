const apiBaseUrl = 'https://api.themoviedb.org/3'
const apiKey = process.env.REACT_APP_API_KEY

const fetchApi = async(endpoint) => {
    const req = await fetch(`${apiBaseUrl + endpoint}`)
    const data = req.json()
    return data
}

const Api = {
    getTrendingMovies: async() => {
       const trendingMovies = await fetchApi(`/trending/movie/week?api_key=${apiKey}&append_to_response=genre_names&language=pt-BR`)
       console.log(trendingMovies)
       return trendingMovies
    },

    getGenreList: async() => {
       const genreList = await fetchApi(`/genre/movie/list?api_key=${apiKey}&language=pt-BR`)
       return genreList
    },

    

    getMovie: async(id) => {
        const movie = await fetchApi(`/movie/${id}?api_key=${apiKey}&append_to_response=videos&language=pt-BR`)
        return movie
    }
}

export default Api
const apiBaseUrl = 'https://api.themoviedb.org/3'
const apiKey = process.env.REACT_APP_API_KEY

const fetchApi = async(endpoint) => {
    const req = await fetch(`${apiBaseUrl + endpoint}`)
    const data = req.json()
    return data
}

const Api = {
    getTrendingMovies: async() => {
       const trendingMovies = await fetchApi(`/trending/movie/week?api_key=${apiKey}&language=pt-BR`)
       return trendingMovies
    },

    getMovie: async(id) => {
        const movie = await fetchApi(`/movie/${id}?api_key=${apiKey}&language=pt-BR&append_to_response=videos`)
        return movie
    }
}

export default Api
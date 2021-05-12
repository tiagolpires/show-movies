const apiBaseUrl = 'https://api.themoviedb.org/3'
const apiKey = process.env.REACT_APP_API_KEY

const fetchApi = async(endpoint) => {
    const req = await fetch(`${apiBaseUrl + endpoint}`)
    const data = req.json()
    return data
}

const Api = {
    getTrendingMovies: async() => {
       const trendingMovies = await fetchApi(`/trending/movie/week?language=pt-BR&api_key=${apiKey}`)
       return trendingMovies
    }
}

export default Api
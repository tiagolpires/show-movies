const apiBaseUrl = 'https://api.themoviedb.org/3'
const apiKey = process.env.REACT_APP_API_KEY

const fetchApi = async(endpoint) => {
    const req = await fetch(`${apiBaseUrl + endpoint}`)
    const data = await req.json()
    return data
}

const Api = {
    getTrendingMovies: async() => {
       const trendingMovies = await fetchApi(`/trending/movie/week?api_key=${apiKey}&append_to_response=genre_names&language=pt-BR`)
       return trendingMovies
    },

    getCatalogMovies: async(moviesCategorie) => {
        const categoriesObj = {
            'mais populares': 'sort_by=popularity.desc',
            'ação': 'with_genres=28',
            'drama': 'with_genres=18',
            'comédia': 'with_genres=35',
            'romance': 'with_genres=10749',
            'aventura': 'with_genres=12' 
        }
        const catalogMovies = await fetchApi(`/discover/movie?api_key=${apiKey}&language=pt-BR&${categoriesObj[moviesCategorie.toLowerCase()]}`)
        return catalogMovies
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
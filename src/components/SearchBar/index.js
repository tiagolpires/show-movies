import './style.css'
import { useState, useEffect } from 'react'
import Api from '../../services/Api'
import SearchBarMovie from '../SearchBarMovie'

const Index = ({ isSearchBarActive, setIsSearchBarActive }) => {
    const [searchInputValue, setSearchInputValue] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const searchMovie = async(inputValue) => {
        if(!inputValue) return
        const searchResult = await Api.searchMovie(inputValue)
        setSearchResult(searchResult)
    }
    
    useEffect(() => {
        const timeoutId = setTimeout(() => searchMovie(searchInputValue), 1000)
        return () => clearTimeout(timeoutId)
    }, [searchInputValue])

    return (
        <div className={`search-bar-container ${isSearchBarActive && 'on'}`}>
            <div className="search-bar">
                <input type="text" placeholder="Digite aqui..." onChange={(e) => setSearchInputValue(e.target.value)}/>
                <div className="search-bar-movies-container">
                    {searchResult && searchResult.map(movie => (
                        <SearchBarMovie key={movie.id} movie={movie} setIsSearchBarActive={setIsSearchBarActive}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Index
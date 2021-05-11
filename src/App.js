import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path='/' exact component={Home}/>
        <Route path='/movie' component={Movie}/>
      </BrowserRouter>
    </>
  )
}

export default App

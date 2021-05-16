import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
      <BrowserRouter>
        <Header/>
        <Route path='/' exact component={Home}/>
        <Route path='/movie/:id' component={Movie}/>
        <Footer/>
      </BrowserRouter>
  )
}

export default App

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Splash from './pages/Splash'
import Start from './pages/Start'
import Products from './pages/Products'
import Details from './pages/Details'

function App() {

  return (
    <Router>
      <header>
        <h1>Vår SPA</h1>
      </header>
      <main>
        <Routes>
          <Route path='/splash' element={<Splash />} />
          <Route path='/start' element={<Start />} />
          <Route path='/products' element={<Products />} />
          <Route path='/details' element={<Details />} />
          <Route path='/' element={<Navigate to='/splash' />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/splash' />
        <Route path='/start' />
        <Route path='/products' />
        <Route path='/details' />
      </Routes>
    </Router>
  )
}

export default App

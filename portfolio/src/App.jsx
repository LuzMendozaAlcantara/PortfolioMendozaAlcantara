import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home'
import Proyects from './components/Proyects'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/proyects' element={<Proyects />}/>
    </Routes>
    </>
  )
}

export default App

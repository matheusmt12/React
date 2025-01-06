
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'


//pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'


//components
import NavComponent from './components/NavComponent'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavComponent></NavComponent>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/product' element={<Product/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

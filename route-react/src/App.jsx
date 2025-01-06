import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

//pages
import Home from './page/Home.jsx'
import About from './page/About.jsx';
import Product from './page/product.jsx';
import Info from './page/Info.jsx';
import NotFound from './page/NotFound.jsx';
import Search from './page/Search.jsx';


// components
import SearchFormComponent from './components/SearchFormComponent.jsx';
import NavComponents from './components/NavComponents.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <NavComponents />
        <SearchFormComponent />
        <Routes>
          <Route path='/' element={<Home />}></Route>

          <Route path='/about' element={<About />}></Route>
          <Route path='/product/:id' element={<Product />}></Route>
          <Route path='/product/:id/info' element={<Info />}></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/company' element={<Navigate to={'/about'} />}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomeView from './pages/Home/HomeView'
import RegisterView from './pages/Auth/RegisterView'
import LoginView from './pages/Auth/LoginView'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'


function App() {

  return (

    <BrowserRouter>
      <NavbarComponent />
      <div className="container">
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/register' element={<RegisterView />} />
          <Route path='/login' element={<LoginView />} />
          <Route />
        </Routes>
      </div>
      <FooterComponent />
    </BrowserRouter>
  )
}

export default App

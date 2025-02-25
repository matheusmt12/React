import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomeView from './pages/Home/HomeView'
import RegisterView from './pages/Auth/RegisterView'
import LoginView from './pages/Auth/LoginView'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'
import { useAuth } from './hooks/useAuth'


function App() {

  const {loading , auth} = useAuth();

  
  if(loading){
    <p>Carregando...</p>
  }

  return (

    <BrowserRouter>
      <NavbarComponent />
      <div className="container">
        <Routes>
          <Route path='/' element={auth ? <HomeView /> : <Navigate to={'/login'}></Navigate>} />
          <Route path='/register' element={!auth ?<RegisterView /> : <Navigate to={'/'}/>} />
          <Route path='/login' element={!auth ?<LoginView /> : <Navigate to={'/'}/>} />
          <Route />
        </Routes>
      </div>
      <FooterComponent />
    </BrowserRouter>
  )
}

export default App

import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

//pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/authentication/Login';
import Logout from './pages/authentication/Logout';
import Register from './pages/authentication/Register';
import CreatePost from './pages/Post/CreatePost';
import Deshboard from './pages/Deshboard/Deshboard';

//components
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import { useAuthentication } from './hooks/useAuthentication';

//context
import { AuthProvider } from './context/AuthContext';




function App() {

  const [user,setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user ===undefined;

  useEffect(() =>{
    onAuthStateChanged(auth, (user) =>{
      setUser(user);
    })
  },[auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }
   
  return (
    <>
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <NavbarComponent></NavbarComponent>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/logout' element={<Logout />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/post/create' element={<CreatePost />}></Route>
              <Route path='/dashboard' element={<Deshboard />}></Route>
            </Routes>
          </div>
          <FooterComponent></FooterComponent>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App

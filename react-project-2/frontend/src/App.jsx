import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//pages
import HomeView from './pages/Home/HomeView';
import RegisterView from './pages/Auth/RegisterView';
import LoginView from './pages/Auth/LoginView';
import EditProfile from './pages/EditProfile/EditProfile';
import Profile from './pages/Profile/Profile';
import Photo from './pages/Photo/Photo';
import Search from './pages/Search/Search';
//hooks
import { useAuth } from './hooks/useAuth';

//component
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';


function App() {

  const { loading, auth } = useAuth();


  if (loading) {
    return <p>Carregando...</p>
  }

  return (

    <BrowserRouter>
      <NavbarComponent />
      <div className="container">
        <Routes>
          <Route path='/' element={auth ? <HomeView /> : <Navigate to={'/login'}></Navigate>} />
          <Route path='/profile' element={auth ? <EditProfile /> : <Navigate to={'/login'}></Navigate>} />
          <Route path='/users/:id' element={auth ? <Profile /> : <Navigate to={'/login'}></Navigate>} />
          <Route path='/register' element={!auth ? <RegisterView /> : <Navigate to={'/'} />} />
          <Route path='/login' element={!auth ? <LoginView /> : <Navigate to={'/'} />} />
          <Route path='/photos/:id' element={auth ? <Photo /> : <Navigate to={'/login'}></Navigate>} />
          <Route path='/search' element={auth ? <Search /> : <Navigate to={'/login'}></Navigate>} />
        </Routes>
      </div>
      <FooterComponent />
    </BrowserRouter>
  )
}

export default App

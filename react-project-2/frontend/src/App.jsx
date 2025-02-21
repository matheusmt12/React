import './App.css'

import {BrowserRouter, Routes , Route ,Navigate} from 'react-router-dom'
import HomeView from './pages/Home/HomeView'
import RegisterView from './pages/Auth/RegisterView'
import LoginView from './pages/Auth/LoginView'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeView /> } />
          <Route path='/register' element={<RegisterView />} />
          <Route path='/login' element={<LoginView />}/>
          <Route  />
        </Routes>
    </BrowserRouter>
  )
}

export default App

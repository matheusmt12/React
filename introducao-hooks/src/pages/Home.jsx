import React from 'react'
import HookuseState from '../components/HookuseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
const Home = () => {
  return (
    <div>
      <HookuseState></HookuseState>
      <HookUseReducer/>
      <HookUseEffect />
    </div>
  )
}

export default Home
import React from 'react'
import HookuseState from '../components/HookuseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
import { useContext } from 'react';
import { SomeContext } from '../components/HookUSeContext';
import HookUseRef from '../components/HookUseRef';
import HookUseCallback from '../components/HookUseCallback';
import HookUseMemo from '../components/HookUseMemo';
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle';



const Home = () => {
  const {valueTesting} = useContext(SomeContext);
  return (
  
    <div>
      <HookuseState></HookuseState>
      <hr></hr>
      <HookUseReducer/>
      <hr />
      <HookUseEffect />
      <p>O valor do contexto esta aqui {valueTesting}</p>
      <hr />

      <HookUseRef></HookUseRef>

      <hr />

      <HookUseCallback>

      </HookUseCallback>

      <hr />

      <HookUseMemo></HookUseMemo>

      <HookUseLayoutEffect></HookUseLayoutEffect>

      <HookUseImperativeHandle></HookUseImperativeHandle>
    </div>
  )
}

export default Home
import React from 'react'
import { SomeContext } from '../components/HookUSeContext';
import { useContext } from 'react';
const About = () => {

  const {valueTesting} = useContext(SomeContext);
  return (
    <>
      <div>About</div>

      <p>{valueTesting}</p>
    </>
  )
}

export default About
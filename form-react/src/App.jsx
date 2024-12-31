import { useState } from 'react';
import './App.css';
import MyForm from './components/MyForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Form</h2>
      <MyForm user={{name: 'matheus' , email:'matheus@gmail.com'}}/>
      
    </>
  )
}

export default App

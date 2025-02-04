import { useEffect, useState , useLayoutEffect} from 'react'


function HookuseLayoutEffect() {

  const [name, setName] = useState("Algum nome");

  useEffect(() =>{
    console.log("2");
    
    setName("Segundo nome");
  },[]);

  useLayoutEffect(() =>{
    console.log("1 useLayoutEffect");
    setName("Primeiro nome");
    
  },[])
  return (
    <div>
      <h1>EffectLayout</h1>
      <p>Nome: {name}</p>
      <hr />
    </div>
  )
}

export default HookuseLayoutEffect

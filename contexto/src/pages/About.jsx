import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"



const About = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <>
      <button onClick={() => setCounter(counter * 2)}>Multiplicar por 2</button>
      <div>About : {counter}</div>
    </>
  )
}

export default About
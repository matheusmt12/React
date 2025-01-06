import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const ChangeCounterComponent = () => {
    const {counter,setCounter} = useContext(CounterContext);
  return (
    <button onClick={() => setCounter(()=> counter + 1)}>Mudar numero</button>

)
}

export default ChangeCounterComponent
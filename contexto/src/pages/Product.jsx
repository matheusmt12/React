import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"


const Product = () => {
  const {counter,setCounter} = useContext(CounterContext);
  return (
    <>
        <button onClick={() => setCounter(counter -1)}>Subtrair numero</button>
        <div>Product : {counter}</div>
    </>
  )
}

export default Product
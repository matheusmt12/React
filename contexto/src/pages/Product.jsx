
import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext";


const Product = () => {
  const {counter,setCounter} = useCounterContext();
  const {dispatch} = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({type:color})
  }
  return (
    <>
        <button onClick={() => setCounter(counter -1)}>Subtrair numero</button>
        <div>Product : {counter}</div>
        <button onClick={() => setTitleColor("PINK")}>Mudar a cor do title do home</button>
    </>
  )
}

export default Product
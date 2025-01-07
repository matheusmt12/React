import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";



const About = () => {
  const { counter, setCounter } = useCounterContext()
  const {color ,dispatch} = useTitleColorContext();

  const setColorTitle = (color) =>{
    dispatch({type:color});
  };
  return (
    <>
      <button onClick={() => setCounter(counter * 2)}>Multiplicar por 2</button>
      <div>About : {counter}</div>
      <button onClick={() => setColorTitle("GREEN")}>Mudar cor do title da home</button>
    </>
  )
}

export default About
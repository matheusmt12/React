// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext";
import ChangeCounterComponent from "../components/ChangeCounterComponent";
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";
const Home = () => {
   const {counter} = useCounterContext();
   const {color , dispatch} = useTitleColorContext();
   const setColorTitle = (color) => {
      dispatch({type:color});
   }
  return (
    <>
    <ChangeCounterComponent></ChangeCounterComponent>

    <h1 style={{color:color}}>Teste</h1>
    <div>Home :{counter} </div>
    <div>
      <h2>Mudar cor do titulo</h2>
      <button onClick={() => setColorTitle("RED")}>Mudar para Vermelho</button>
      <button onClick={() => setColorTitle("BLUE")}>Mudar para Azul</button>
    </div>
    </>
  )
}

export default Home
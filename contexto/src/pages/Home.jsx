import { useContext } from "react"
import { CounterContext } from "../context/CounterContext";
import ChangeCounterComponent from "../components/ChangeCounterComponent";

const Home = () => {
   const {counter} = useContext(CounterContext);
  return (
    <>
    <ChangeCounterComponent></ChangeCounterComponent>

    
    <div>Home :{counter} </div>

    </>
  )
}

export default Home
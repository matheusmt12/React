import { useState } from "react";

const ManageDate = () => {
    let setValor = 10;
    const[number,setNum] = useState(10)
  return(
    <>
    <div>
        <p>Valor: {setValor}</p>
        <button onClick={() => setValor = 15}>Clique para mudar o valor</button>
        <p>Valor: {number}</p>
        <button onClick={()=> setNum(25)}>Mudar ovalor</button>
    </div>
    </>
  )  
};

export default ManageDate;
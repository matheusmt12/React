import { useState } from "react"

const ConditionalRender = () => {

    const[x] = useState(false);
    const [name] = useState('Matheus')
  return (
    <>
        <div>Mostra algo ?</div>
        {x && <p>Sim</p>}
        {!x && <p>Não</p> }
        {name === 'Matheus' ? <p>Sim</p> : <p>Não</p> }
    </>
  )
}

export default ConditionalRender
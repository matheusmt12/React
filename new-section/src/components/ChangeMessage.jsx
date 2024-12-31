import { useState } from "react"

const ChangeMessage = ({func}) => {
    const [palavras] = useState(['ola', 'oi' , 'certo'])
  return (
    <div>
        {palavras.map((p,i) => (
           <p><button key={i} onClick={() => {func(palavras[i])}}>{i}</button></p>
        ))}
    </div>
  )
}

export default ChangeMessage
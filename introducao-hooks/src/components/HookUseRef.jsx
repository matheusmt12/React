import React, { useEffect, useRef, useState } from 'react'


function HookUseRef() {
    const conterRef = useRef(0);
    const [numberA, setNumberA] = useState(0);
    const [numberB, setNumberB] = useState(0);
    const focusInput = useRef();
    const [text, setText] = useState("");

    useEffect(() =>{
        conterRef.current = conterRef.current + 1

    },);


    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(focusInput);
        setText("");


     focusInput.current.focus()
    }
  return (
    <div>
      <h1>UseRef</h1>
      <p>Contagem ref: {conterRef.current}</p>
      <p>Contagem A: {numberA}</p>
      <button onClick={() => setNumberA(numberA + 1)} >Btn A</button>
      <p>Contagem B: {numberB}</p>
      <button onClick={() => setNumberB(numberB + 1)}>Btn B</button>
        <br />
      {/* Input ref dom */}

      <form onSubmit={handleSubmit}>
        <input type="text" value={text} ref={focusInput} onChange={(e) => setText(e.target.value)} />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default HookUseRef

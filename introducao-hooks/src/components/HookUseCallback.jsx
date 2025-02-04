import React, { useCallback, useState } from 'react'
import List from './List';
function HookUseCallback() {

    const [counter ,setCounter] = useState(0);

    const getItem = useCallback(() =>{
        return ['a', 'b', 'c'];
    },[])
  return (
    <div>
      <h1>CAllback</h1>
      <List getItem={getItem}></List>

      <button onClick={() => setCounter(counter + 1)}>Alterar</button>
      <p>Valor counter : {counter}</p>
    </div>
  )
}

export default HookUseCallback

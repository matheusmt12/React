import React, { useEffect, useMemo, useState } from 'react'
import { use } from 'react'


function HookUseMemo() {

    const [number, setnumber] = useState(0);

    // const numRund = ['0', '87' ,'69'];

    const numRund = useMemo(()=>{
        return ['0', '87' ,'69'];
    },[])

    useEffect(()=>{
        console.log(' number change ');
        
    },[numRund])
    return (
    <div>
        <h1>useMemo</h1>
        <input type="text"  onChange={(e)=> setnumber(e.target.value)}/>
        {numRund.includes(number) ? <p>Acertou</p>  : ""}

        <hr />
    </div>

    
  )
}

export default HookUseMemo

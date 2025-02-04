import React, { useRef } from 'react'
import SomeComponent from './SomeComponent'

function HookUseImperativeHandle() {

    const inputRef = useRef();
    return (
        <div>
            <SomeComponent ref={inputRef}></SomeComponent>

            <button onClick={() => inputRef.current.validate()}>Validar</button>
        </div>
    )
}

export default HookUseImperativeHandle

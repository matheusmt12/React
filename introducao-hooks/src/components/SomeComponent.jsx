import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const SomeComponent = forwardRef((props, ref) => {
  
  const localInputRef = useRef();
  useImperativeHandle(ref,() =>{
    return {
      validate:()=>{
        if (localInputRef.current.value.length > 3) {
          localInputRef.current.value = ""
        }
      },
      teste: ()=>{
        console.log("esta testando ");
        
      }
    }


  })
  return (

    <div>
      <p>Insira no maximo 3 caracteres</p>

      <input type="text" ref={localInputRef} />
    </div>
  )
})

export default SomeComponent

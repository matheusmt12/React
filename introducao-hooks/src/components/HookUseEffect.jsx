import { useEffect, useState } from "react"


const HookUseEffect = () => {

    const [callback, setCallback] = useState(0)

   useEffect(() =>{
    console.log('Executei assim q cheguei !!');
    
   })

    useEffect(() => {
        console.log("Estou aqui");

    }, [callback]);

    useEffect(() =>{
        const time = setTimeout(() =>{
            console.log("Hello word");
            
        },2000)

    },[callback]);



    const changeButton = () =>{
        setCallback(Math.floor(Math.random() * 10));
    }
    return (
        <div>
            <h1>React useEffect</h1>

            <p>De dois Clicks no Botão para executar o Effect e mudar o numero <strong>{callback}</strong></p>
            <button onClick={() => changeButton()}>Botão</button>
        </div>
    )
}

export default HookUseEffect
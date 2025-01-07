import { useEffect, useState } from "react"


export const useFetch = (url) =>{

    const [dados,setDados] = useState(null);
    const [loading, setLoading] = useState(false);
    const [config, setConfig] = useState(null)
    const [callFetch, setCallFetch] = useState(false)
    const httpConfig = (method,data) => {
        if (method == "POST") {
            console.log('ta aqui');
            
            setConfig({
                method : "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data)
            })
        }
    }

    useEffect(()=>{
        const carregarDados = async() =>{

            setLoading(true)

            try{
                
                let res = await fetch(url);

                let data = await res.json();
                setDados(data);

            }catch{
                console.log('algo deu errado');
            }

            setLoading(false);
        };
        carregarDados()
    }, [url, callFetch]);

    useEffect(() => {
        const httpRequest = async () =>{

            setLoading(true);
            try {
                
                let fetchAction = [url, config];

                const res = await fetch(...fetchAction);

                const json = await res.json();

                setCallFetch(json);

            } catch {
                
            }
        };
        httpRequest();
    }, [config])

    return {dados,loading, httpConfig};
}
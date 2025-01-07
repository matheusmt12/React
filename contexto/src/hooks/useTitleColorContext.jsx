import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () =>{
    const context = useContext(TitleColorContext);
    if (!context) {
        console.log('O contexto não foi encontrado');
    }
    console.log(context);
    
    return context;
}
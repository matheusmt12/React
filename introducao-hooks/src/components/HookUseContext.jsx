import { createContext } from "react";

export const SomeContext = createContext();


export const HookUseContext = ({children}) =>{

    const valueTesting = "Testing value";

    return (
        <SomeContext.Provider value={{valueTesting}}>
            {children}
        </SomeContext.Provider>
    );


}
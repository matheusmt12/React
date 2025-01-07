import { createContext } from "react";
import { useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReduce = (state, action) => {
    switch (action.type) {
        case "RED":
            return { ...state, color: 'red' }
            break;
        case "BLUE":
            return { ...state, color: 'blue' }
        case "GREEN":
            return { ...state, color: 'green' }
            break;
        case "PINK":
            return { ...state, color: 'pink' }
            break;
        default:
            return state
            break;
    }
};

export const TitleColorContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(titleColorReduce, { color: 'purple' });

    return (
        <TitleColorContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TitleColorContext.Provider>
    )
}

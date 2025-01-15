import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useState, useReducer, useEffect } from "react";
import { db } from "../firebase/config";


//reduce function

// check function

const initialState = {
    laoding : false,
    error: false
}


const insertReduce = (state, action) =>{
    switch (action.type) {
        case "LOADING":
            return {laoding : true, error: false}
        case "INSERTED_DOC":
            return {loading : false , error: false}
        case "ERROR":
            return {laoding: false, error: action.payload}
        default:
            return state;
    }
}

export const useInsertDocuments = (docCollections) =>{

    const [response, dispatch] = useReducer(insertReduce, initialState);

    const [cancellad, setCancellad] = useState(false);


    const checkInCancelladBiforeDispatch = (action)=>{
        if (cancellad) {
            dispatch(action);
        }
    }


    const insertDocument = async(document) =>{

        checkInCancelladBiforeDispatch({
            type: 'LOADING'
        });


        try {
            // cirar novo docmento

            const newDocument = {...document, addTime: Timestamp.now()}

            //inserir documento

            const insertDocument = await addDoc(collection(db, docCollections) , newDocument);

            checkInCancelladBiforeDispatch({
                type : 'INSERTED_DOC',
                payload : insertDocument
            })
        } catch (error) {
            checkInCancelladBiforeDispatch({
                type : 'ERROR',
                payload : error.message
            })           
        }
    }

    useEffect(()=>{
        return () => {
            setCancellad(true);
        }
    },[])
    return {insertDocument, response}
}
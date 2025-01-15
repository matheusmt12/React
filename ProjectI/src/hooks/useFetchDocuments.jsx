import { query, onSnapshot, orderBy, collection, where, QuerySnapshot, doc } from "firebase/firestore";
import { useState, useReducer, useEffect } from "react";
import { db } from "../firebase/config";
import { data } from "react-router-dom";
export const useFetchDocuments = (docCollection, search = null, uid = null) => {

    const [documents, setDocuments] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cancellad, setCancellad] = useState(false);

    useEffect(() => {
        //function para carregar dados 
        async function loadData() {
            if (cancellad) {
                return;
            }

            setLoading(true);
            //pegando o tipo da collection
            const documentsRef = await collection(db, docCollection);

            //fazendo a consulta 
            try {
                let q;

                if (search) {
                  q = await query(
                    collectionRef,
                    where("tags", "array-contains", search),
                    orderBy("createdAt", "desc")
                  );
                } else if (uid) {
                  q = await query(
                    collectionRef,
                    where("uid", "==", uid),
                    orderBy("createdAt", "desc")
                  );
                } else {
                  q = await query(collectionRef, orderBy("createdAt", "desc"));
                }
        
                await onSnapshot(q, (querySnapshot) => {
                  setDocuments(
                    querySnapshot.docs.map((doc) => ({
                      id: doc.id,
                      ...doc.data(),
                    }))
                  );
                });
                
                setLoading(false);
            } catch (error) {
                    setError(error)
                    setLoading(false);
            }
        }

        loadData();
    }, [docCollection, search, uid, cancellad])

    useEffect(()=>{
        return () =>{ setCancellad(true)}
    },[])

    return {documents, error ,loading}
}
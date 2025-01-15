import { useEffect, useState } from 'react';
import { db } from '../firebase/config'

import {
    createUserWithEmailAndPassword,
    getAuth,
    updateProfile,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';


export const useAuthentication = () => {
    const [erro, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cancellad, setCancellad] = useState(false);


    const auth = getAuth();

    function checkInCancellad() {
        if (cancellad) {
            return;
        }
    }
    //create user 
    const creatUser = async (data) => {
        checkInCancellad();

        setLoading(true);
        setError(null);
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            await updateProfile(user, { displayName: data.name })
            setLoading(false);
            return false;
        } catch (error) {

            let systemErrorMessage;
            if (error.message.includes("Password")) {
                systemErrorMessage = 'A senha tem que ter mais de 6 caracters';
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = 'O email ja existe';
            }
            else {
                systemErrorMessage = 'Aconteceu um erro. Tente novamente mais tarde';
            }
            setLoading(false);

        }

    };

    //logout
    const logout = () =>{

        checkInCancellad();

        signOut(auth);
    }

    useEffect(() => {
        return () => setCancellad(true);
    }, [])

    //login
    const login = async (user) =>{
        checkInCancellad();

        setLoading(true);
        setError(null);

        try {
            
            await signInWithEmailAndPassword(auth, user.email, user.password)

            setLoading(false);
        } catch (error) {
            let systemErrorMessage;
            if (error.message.includes('user-not-found')) {
                systemErrorMessage = 'Usuário não encontrado.';
            }else if (error.message.includes('wrong-password')) {
                systemErrorMessage = 'Senha inválida.';
            } else {
                systemErrorMessage = 'Aconteceu algum erro, tente mais tarde';
            }
            setError(systemErrorMessage);
            setLoading(false);
        }
    }

    return {
        creatUser,
        erro,
        loading,
        auth,
        logout,
        login
    }
}
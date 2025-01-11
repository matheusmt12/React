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

    useEffect(() => {
        return () => setCancellad(true);
    }, [])

    return {
        creatUser,
        erro,
        loading,
        auth
    }
}
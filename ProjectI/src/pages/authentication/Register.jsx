import { useState } from 'react'
import styles from './Register.module.css'
import { useActionState } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passConfirmed, setPassConfirmed] = useState('');
    const [error, setError] = useState('');

    const {auth, erro: authErro, creatUser, loading} = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('');

        const user = {
            name,
            password,
            email
        };
        if (password != passConfirmed) {
            setError('As senhas são diferentes');
            return;
        }

       const res =  await creatUser(user)
       console.log(res);
       

    }
    return (
        <>
            <div className={styles.register}>
                <h1>Cadastre-se para postar</h1>
                <p>Crie seu usuario</p>
                <form onSubmit={handleSubmit}>
                    <label >
                        <span>Nome:</span>
                        <input type="text"
                            onChange={(e) => setName(e.target.value)}
                            name='displayName'
                            required placeholder='Informe o Nome' />
                    </label>
                    <label >
                        <span>Email:</span>
                        <input type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            name='displayEmail'
                            required placeholder='Informe o Email' />
                    </label>
                    <label >
                        <span>Password:</span>
                        <input type="password"
                            value={password}
                            name='password'
                            onChange={(e) => setPassword(e.target.value)}
                            required placeholder='Digite a senha' />
                    </label>
                    <label >
                        <span>Confirmar a senha:</span>
                        <input type="password"
                            value={passConfirmed}
                            onChange={(e) => setPassConfirmed(e.target.value)}
                            name='ConfirmPassword'
                            required placeholder='Confirme a sua senha' />
                    </label>
                   { !loading && <button className='btn'>Cadastrar</button>}
                   { loading && <button className='btn' disabled>Aguarde</button>}
                </form>
                {error &&  <p className="error" style={{textAlign:'center'}}>{error}</p> }
                {authErro &&  <p className="error" style={{textAlign:'center'}}>{authErro}</p> }

            </div>
        </>
    )
}

export default Register
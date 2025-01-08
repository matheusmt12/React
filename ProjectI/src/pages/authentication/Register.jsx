import { useState } from 'react'
import styles from './Register.module.css'

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passConfirmed, setPassConfirmed] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
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

        console.log(user);


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
                    <button className='btn'>Cadastrar</button>
                </form>
                {error &&  <p className="error" style={{textAlign:'center'}}>{error}</p> }
            </div>
        </>
    )
}

export default Register
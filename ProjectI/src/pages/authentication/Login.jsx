import { useState } from 'react';
import styles from './Login.module.css'
import { useAuthentication } from '../../hooks/useAuthentication';
const Login = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const {auth, erro: authErro, login, loading} = useAuthentication();
const handleSubmit = (e) => {

    e.preventDefault();
    const user = {email , password};
    
    login(user);

  }
  return (
    <div>
      <h1 style={{textAlign : 'center'}}>Entrar</h1>
      <p style={{textAlign : 'center', color :'#AAA'}}>Para eter acesso ao sistema</p>
      <form onSubmit={handleSubmit}>
        <label >
          <span>Email:</span>
          <input type="email"
            onChange={(e) => setEmail(e.target.value)}
            name='displayEmail'
            required placeholder='Informe o Email' value={email}/>
        </label>
        <label >
          <span>Password:</span>
          <input type="password"
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            required placeholder='Digite a senha' />
        </label>
       {loading  ? <button className='btn' disabled >Aguarde</button> : <button className='btn'>Entrar</button>}
       {authErro && <p className='error' style={{textAlign : 'center'}}>{authErro}</p> }
      </form>
    </div>
  )
}

export default Login
import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css'



const RegisterView = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPessword, setconfirmPessword] = useState('');

  const handleSubmite = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPessword
    }


    console.log(user);


  }


  return (
    <div id='register'>
      <h2>MayGram</h2>
      <p className="subtitle">Cadastre-se para curtir p MayGram</p>
      <form onSubmit={handleSubmite}>
        <input type="text" placeholder='Nome' value={name || ''} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder='Email' value={email || ''} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Senha' value={password || ''} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder='Confirme a senha'value={confirmPessword || ''} onChange={(e) => setconfirmPessword(e.target.value)} />

        <input type="submit" value={'Cadastrar'} />
      </form>
      <p>Ja tem uma conta? <Link to={'/login'}>Clique aqui!</Link></p>
    </div>
  )
}

export default RegisterView
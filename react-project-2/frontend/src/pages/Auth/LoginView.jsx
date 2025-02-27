import React from 'react'
import './Auth.css';

import { useState , useEffect } from 'react';

import MessageComponent from '../../components/MessageComponent.jsx';
import {Link, useNavigate} from  'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { reset , login, } from '../../slices/authSlice.jsx';
const LoginView = () => {

  const[email, setEmail] = useState('');
  const[password, setPassword]= useState('');

  const {loading, errors} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
      e.preventDefault();

      let data = {
        email,
        password
      }

      dispatch(login(data));

      navigate('/');
  }


  useEffect(() =>{

    dispatch(reset());
  },[dispatch])

  return (
    <div id='login'>
      <h2>MayGram</h2>
      <p className="subtitle">Fazer login </p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email || ''}/>
        <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} value={password || ''} />
        {!loading ? <input type="submit" value={'Entrar'} /> : <input type="submit" value={'Aguarde'} disabled/>}
        {errors && <MessageComponent msg={errors} type={'error'}></MessageComponent>}
      </form>
      <p>Não tem uma conta? <Link to={'/register'}>Clique aqui</Link> para criar uma conta!</p>
    </div>
  )
}

export default LoginView
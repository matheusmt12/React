import { useState } from 'react';
import './MyForm.css';

const MyForm = ({user}) => {
    const [name,setName] = useState(user ? user.name : '');
    const [email,setEmail] = useState(user ? user.email : '');
    const [bio, setBio]= useState();
    const [escolha,setEscolha] = useState();

    function handleChange(e) {
        setName(e.target.value);
    }

    const handleSubimit = (event) => {
        event.preventDefault();
        console.log(name, email, bio,escolha);


        setBio("")
        setEmail("")
        setName("")
        setEscolha()
        
    };
  return (
    <div>
        <form onSubmit={handleSubimit}>
            <label htmlFor="name">
                Name
            </label>
            <input type="text" name='name' placeholder='Digite o nome' onChange={handleChange} value={name}/>
            <label>
                <span>Idade</span>
                <input type="text" name='email' onChange={(e) => { setEmail(e.target.value) }} value={email}/>
            </label>
            <label >
                <samp>Bio</samp>
                <textarea name="bio" id="" onChange={(e) => {setBio(e.target.value)}} value={bio}></textarea>
            </label>
            <label >
                <samp>Escolha um numero</samp>
                <select name="escolha" id="" onChange={(e) => setEscolha(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </label>
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default MyForm
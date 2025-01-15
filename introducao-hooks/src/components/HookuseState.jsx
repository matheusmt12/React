import { useState } from "react"


const HookuseState = () => {

    let username = "Matheus";
    const [name, setName] = useState('Matheus');
    const [age, setAge] = useState(0);
    const handleChangeName= () =>{
        username = 'matheus souza';

        setName('matheus cruz');
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
  return (
    <div>
        <h2>Mudando o nome</h2>
        <p>{username}</p>
        <p>{name}</p>
        <button onClick={handleChangeName}>Mudar</button>
        <hr />
        <h2>Mudar idade</h2>
        <form onSubmit={handleSubmit}>
        <label>
            <span>informar a idade</span>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
        
        </label>
        <button>Mudar idade</button>
        </form>
        <p>sua idade é : {age}</p>
    </div>
  )
}

export default HookuseState
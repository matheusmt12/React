import { use } from "react";
import { useState } from "react";

const ListRender = () => {

    const [list] = useState(['matheus', 'cruz', 'souza']);
    const [users, setUser] = useState(
        [
            { id: 1, name: 'Matheus' },
            { id: 2, name: 'Souza' },
            { id: 3, name: 'Cruz' }
        ]);

    const deleteAleatorio = () => {
        let numAleatorio = Math.floor(Math.random() * 4);
        console.log(numAleatorio);
        
        setUser(prevUsers => {
            return prevUsers.filter((user) => numAleatorio !== user.id)
        })
    };
    return (
        <>
            <div>
                <ul>
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
                <button onClick={deleteAleatorio}>Deletar de maneira aleatoria</button>
            </div>
        </>
    );
};

export default ListRender;
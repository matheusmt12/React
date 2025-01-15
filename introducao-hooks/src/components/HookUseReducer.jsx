import React, { act, useReducer, useState } from 'react'

const HookUseReducer = () => {


    const [taskText, setText] = useState("")

    const initial = [
        { id: 1, text: 'Fazer algo' },
        { id: 2, text: 'Fazer alguma coisa' }
    ];

    const funcReduce = (state, action) => {
        return state = Math.floor(Math.random() * 50)
    }

    const [number, dispatch] = useReducer(funcReduce);

    //state é o estado que a const esta e a action sao os parametros passados no dispatch quando é chamado
    const taskReduce = (state, action) => {

        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText
                }

                setText('');
                return [...state, newTask];

                case "DELETE":
                return state.filter((task) => task.id !== action.id);
            default:
                return state;
        }
    };

    const [tasks, dispatchTesk] = useReducer(taskReduce, initial)

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatchTesk({ type: "ADD" });
    }

    const removeTask = (id) =>{
        dispatchTesk({type: "DELETE", id: id})
    }
    return (
        <div>
            <h2>Reduce</h2>
            <p>num aleatorio entre 0 e 50 : {number}</p>

            <button onClick={dispatch}>Mudar o num</button>
            <hr />
            <h2>Reduce parte 2</h2>

            <p>insira um texto</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Text</span>
                    <input type="text" value={taskText} onChange={(e) => setText(e.target.value)} />
                </label>
                <button>Add</button>
            </form>

            <h3>Textos</h3>

            <ul>
                {tasks.map((item) => (
                    <li key={item.id} onDoubleClick={() => removeTask(item.id)}>{item.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookUseReducer
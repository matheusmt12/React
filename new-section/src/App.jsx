import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Img from './assets/react.svg'
import ManageDate from './components/ManageDate'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CardDetails from './components/CardDetails'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'





function passandoMenssagem() {
  console.log('Esta é a menssagem');
  
}





function App() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0)
  const [users, setCar] = useState([{
    id: 1 ,name: 'Matheus', age: 26, cpf: "784"
  },
  {
    id: 2 ,name: 'Souza', age: 27, cpf: "897"
  },{
    id: 3 ,name: 'Cruz', age: 28, cpf: "987"
  }
  ]);

  const alterarMessage = (msg) => {
    setMessage(msg)
  };
    return (
    <>
      <div>
        {/* <h1>Nova seção</h1>
        <img src="/vite.svg" alt="teste" />
        <div><img src={Img} alt="react" /></div> */}
        {/* <ManageDate /> */}
        {/* <ListRender /> */}
        {/* <ConditionalRender /> */}
        {/* <ShowUserName name="Matheus"/> */}
        {/* <CardDetails name="Souza" age={22} cpf="08689099557" />
        <CardDetails name="Matheus" age={21} cpf="08689099557" />
        <CardDetails name="Cruz" age={23} cpf="08689099557" />

        {users.map((user) => (
          <div key={user.id}>
            <CardDetails name={user.name} age={user.age} cpf={user.cpf}/>
          </div>
        ))}*/}
        {/* <Container>
          <p>Esta aqui</p>
          <p>esta la</p>
          <h1>Aqui!</h1>
        </Container> */}
        {/* <ExecuteFunction func={passandoMenssagem}/> */}
        <Message msg={message}/>
        <ChangeMessage func={alterarMessage} />
      </div> 
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFetch } from './hooks/useFetch';

function App() {
  const url = 'http://localhost:3000/pessoa';

  const [dados, setDados] = useState([]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  //const {data: item} = useFetch(url);


  const carregarDados = async () => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setDados(data);
    setLoading(false);
  }

  const handleSubimit = async (event) => {

    event.preventDefault();

    const pessoa = {
      name: name
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-Type": "aplication/json",

      },
      body: JSON.stringify(pessoa)
    });
    setName('');
    carregarDados();
  }

  useEffect(() => {
    carregarDados();
  }, [])

  return (
    <>
      <div className="app">
        <h1>Lista de Produto</h1>
        {loading && <p>Carregando dados</p>}
        {!loading && <table className='tablePessoa'>
          <thead>
            <tr>
              <th>
                id
              </th>
              <th>
                name
              </th>
            </tr>
          </thead>
          <tbody>
            {dados && dados.map((dado) => (
              <tr key={dado.id}>
                <td>{dado.id}</td>
                <td>{dado.name}</td>
              </tr>
            ))}
          </tbody>
        </table>}
        <form onSubmit={handleSubimit}>
          <label>
            <span>Nome</span>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} required />
          </label>
          { loading &&<button type='submit' disabled value={'Aguarde'}>Aguarde</button>}
          { !loading &&<button  type='submit' value={'Aguarde'}>Adicionar</button>}
        </form>

      </div>
    </>
  )
}

export default App

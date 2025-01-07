
import { useEffect, useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch';

function App() {

  const url = 'http://localhost:3000/product';

  const { dados, loading, httpConfig } = useFetch(url);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const product = {
      name, price
    }

    httpConfig("POST", product)

    setName('');
    setPrice("");
  }

  return (
    <>
      <h1>Teste</h1>
      {loading && <p>Carregando dados</p>}
      <ul>
        {dados &&
          dados.map((item, key) => (
            <li key={key}>{item.name} - {item.price}</li>
          ))
        }
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="price">price</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type='submit' >Enviar</button>
      </form>
    </>
  )
}

export default App

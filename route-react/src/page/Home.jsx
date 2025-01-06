import { useEffect, useState } from "react"
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {

  const [datas, setDatas] = useState([]);
  const url = 'http://localhost:3000/product';
  useEffect(() => {
    const carregarDados = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setDatas(data);
    };
    carregarDados();
  }, []);


  return (
    <div>
      <h1>Produtos</h1>
      <ul className="product">
        {datas.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>R${item.price}</p>
            <Link to={`/product/${item.id}`}>Detalhes</Link>
          </li>

        ))}
      </ul>

    </div>
  )
}

export default Home
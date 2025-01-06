import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"


const Search = () => {
    const [searchParam] = useSearchParams();
    const url = 'http://localhost:3000/product?' + searchParam;
    const [product, setProduct] = useState([]);

    useEffect(() =>{
        const carregarDado = async () =>{
            const res = await fetch(url);
            const data = await res.json();
            setProduct(data);
            console.log(url);
            
        };
        carregarDado();
    } ,[url])
  return (
    <>
    <ul>
        {product.map((item) => (
            <li key={item.id}>{item.name}</li>
        ))}
    </ul>
    </>
  )
}

export default Search
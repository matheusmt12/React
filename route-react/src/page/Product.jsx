import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Product = () => {
    const { id } = useParams();
    const [dado, setDados]  = useState([]);
    useEffect(() => {
        const carregarDado = async () => {
            const res = await fetch('http://localhost:3000/product/' + id);
            const data = await res.json();
            setDados(data);
        };
        carregarDado();
    }, []);
    return (
        <>
            <h1>{dado.name}</h1>
            <p>R$: {dado.price}</p>
            <Link to={`/product/${dado.id}/info`}>Info</Link>

        </>
    )
}

export default Product
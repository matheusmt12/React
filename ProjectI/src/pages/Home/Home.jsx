import { useState } from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
const Home = () => {

  const [tag, setTags] = useState('');
  const { documents: posts, error, loading } = useFetchDocuments("POST");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tag);

  };
  console.log(posts);
  
  return (
    <div className={styles.home}>
      <h1>VEja nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input type="text" placeholder='Busque por tags' onChange={(e) => setTags(e.target.value)} />

        <button className='btn btn-dark'>Buscar</button>
      </form>

      <div>Posts ... </div>
      {posts && posts.map((item) => (
        <div>{item.title}</div>
      ))}
      {posts && <div className={styles.nopost}>
        <p>Não ha nehum post</p>
        <Link to={'/post/create'} className='btn'>Crir Post</Link>
      </div>}
    </div>

  )
}

export default Home
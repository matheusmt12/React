import React from 'react'
import { useAuthValue } from '../../context/AuthContext'
import { useState } from 'react'
import { useInsertDocuments } from '../../hooks/useInsertDocuments';
import { Navigate , useNavigate} from 'react-router-dom'

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');
  const [formErro, setFomrError] = useState('');
  const { user } = useAuthValue();
  const { insertDocument, response } = useInsertDocuments("POST");
  const navigate= useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();


    //valdar url Image

    try {
      new URL(image);
    } catch (error) {
      setFomrError("A imagem precisa ser  uma URL")
    }

    const arrayTags = tags.split(',').map((tag) => tag.trim().toLowerCase());

    if (!title, !body, !tags, !image) {
      setFomrError("Por favor preencha todos os campos!")
    }

    if (formErro) {
      return;
    }
    //inserrir dados no firebase

    insertDocument(
      {
        title,
        image,
        body,
        arrayTags,
        uid: user.uid,
        createBy: user.displayName
      })

    navigate('/');
  }
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Criar post</h1>
      <p style={{ textAlign: 'center', color: '#AAA' }}>Escreva e poste oque quiser</p>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Título</span>
          <input type="text" name='title' onChange={(e) => setTitle(e.target.value)} required placeholder='Título' />
        </label>
        <label>
          <span>URL da Imagem</span>
          <input type="text" name='imagem' placeholder='Insira uma img que representa seu pots' required onChange={(e) => setImage(e.target.value)} />
        </label>
        <label>
          <span>Texto</span>
          <textarea type="text" name='body' onChange={(e) => setBody(e.target.value)} placeholder='Digite o conteudo do post' />
        </label>
        <label>
          <span>Tags</span>
          <input type="text" name='tags' onChange={(e) => setTags(e.target.value)} placeholder='tags' />
        </label>

        {!response.loading ? <button className='btn'>Criar</button> : <button className='btn' disabled>Aguarde</button>}
        {response.error && <p className='error'>{response.error}</p>}
        {formErro && <p className='error'>{formErro}</p>}
      </form>
    </>
  )
}

export default CreatePost
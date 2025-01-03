import { useState } from 'react';
import './StartComponent.css'
import { wordSecret } from '../data/word';
import SecretWordComponent from './SecretWordComponent';
import EndGameComponent from './EndGameComponent';


const Start = () => {
  const handlerAlterarStatus = (status, pontuacao) => {
    setStatusJogo(status);
    setPontos(pontuacao);    
  }

  const endGame = (status) => {
    setStatusJogo(status)
    setPontos(0);
  }
  const [statusJogo, setStatusJogo] = useState(1)
  const [pontuacao, setPontos] = useState(0);
  return (
    <div>
        { statusJogo === 1 && <h2 style={{color : 'white'}}>SECRET WORD</h2>}
        { statusJogo === 1 && <p style={{color : 'yellow'}}>Clique no botao a baixo para começão o jogo</p>}
        { statusJogo === 2 && <SecretWordComponent handlerAlterarStatus = {handlerAlterarStatus}/>}
        { statusJogo === 1 && <button className="btnStart" onClick={() => setStatusJogo(2)}>COMEÇAR O JOGO</button>}
        { statusJogo === 3 && <EndGameComponent pontos = {pontuacao} endGame = {endGame}/>}
    </div>
  )
}

export default Start
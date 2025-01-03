import styles from './EndGameComponent.module.css'


const EndGamaComponent = (props) => {
  return (
    <div className={styles.end_main}>
      <h1>Fim do jogo</h1>
      <h3>Sua pontuacao foi de {props.pontos}</h3>
      <button className={styles.my_button} onClick={() => {props.endGame(1)}}> Fim do Game</button>
    </div>
  )
}

export default EndGamaComponent
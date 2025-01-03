import './SecretWordComponent.css'
import '../data/word'
import { wordSecret } from '../data/word';
import { useEffect, useState } from 'react';
const SecretWordComponent = ({handlerAlterarStatus}) => {

    
    const [chave, setChave] = useState('');
    const [palavraBranco, setPalavraBranco] = useState([]);
    const [palavra, setPalavra] = useState('');
    const [tentativas, setTentativas] = useState(3);
    const [letrasDigitada, setDigitadas] = useState('');
    const [pontuacao, setPontuacao] = useState(0);
    // letra input
    const [letra, setLetra] = useState('');
    const handleEcolhaPalavra = () => {

        let chaves = Object.keys(wordSecret);
        let numChave = Math.floor(Math.random() * chaves.length);
        let palavras = wordSecret[chaves[numChave]];
        let palavrasAleatoria = Math.floor(Math.random() * palavras.length);
        setPalavra(palavras[palavrasAleatoria]);
        setChave(chaves[numChave]);
        //preencher um array do tamanho da palavra escolhida com caracteres vazios
        let branco = Array(palavras[palavrasAleatoria].length);
        for (let i = 0; i < branco.length; i++) {
            branco[i] = ' '
        };

        console.log(palavras[palavrasAleatoria]);
        setPalavraBranco(branco)
        setDigitadas('');
    }




    const handleSubmiti = (event) => {
        event.preventDefault();

        //verificar se existe a letra que foi selecionada
        let posicao = palavra.indexOf(letra)
        if(posicao != -1){
            palavra.split('').forEach((p,i) =>{
                if (p === letra) {
                    palavraBranco[i] = p;
                    setPalavraBranco(palavraBranco);
                }
            })
            
        }else{
            let tentativa = tentativas - 1;
            setTentativas(tentativa);
            if (tentativa === 0){
                handlerAlterarStatus(3,pontuacao);
            }    
            let digitada = letrasDigitada;
            digitada = digitada+ letra +',';
            setDigitadas(digitada);

        }
        // verificar se as palavras sao iguais 
        if (JSON.stringify(palavra.split('')) == JSON.stringify(palavraBranco)) {
            // pontuacao
            let pontos = pontuacao + 100;
            setPontuacao(pontos);
            handleEcolhaPalavra();
            
        }

        setLetra('');

    };

    useEffect(() => {
        handleEcolhaPalavra();
    }, []);

    return (
        <>
            <div className='mainWord'>
                <p>Pontuação : {pontuacao}</p>
                <h1>Adivinhe a Palavra:</h1>
                <h5>DICA SOBRE A PALAVRA: {<span style={{color: 'yellow'}}>{chave}</span>}</h5>
                <p>Voce ainda tem {tentativas} tentativa(s)</p>
                <div className='container'>
                    {palavraBranco.map((item, key) => (
                        <div key={key} className='divPalavra'>{item}</div>
                    ))}

                </div>
                <p>Tente adivinhar uma letra da palavra</p>
                <form style={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }} onSubmit={handleSubmiti}>
                    <input type="text" maxLength={1} style={{
                        width: '40px',
                        height: '40px', fontSize: '40px',
                        textAlign: 'center',

                    }} name='letra' onChange={(e) => setLetra(e.target.value)} value={letra} />
                    <div style={{ padding: '0px 20px 0px 0px' }}></div>
                    <button className='btnJogar'>JOGAR!</button>
                </form>
                <p>letras jogadas: {letrasDigitada}</p>
            </div>
        </>
    );
}

export default SecretWordComponent
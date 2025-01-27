import { useEffect, useState } from 'react';//hooks de efecto
import {letters} from './helpers/letters';
import { HangImage } from './components/HangImage';
import './App.css'
import { randomWords } from './helpers/randomWords';


function App() {
  
  const [ word, setWord ] = useState(randomWords);
  const [ hiddenWord, setHiddenWord ] = useState('_ '.repeat(word.length));
  const [ attempts, setAttempts ]  = useState(0);
  const [ lose, setLose ] = useState(false);
  const [ won, setWon ] = useState(false);

  //Cuando se pierde
  useEffect( ()=> {
    if ( attempts >= 9 ){
      setLose(true);
    }
  }, [attempts] );

  //Cuando se gana

  useEffect( ()=> {
    const currentHiddenWord = hiddenWord.split(' ').join('');
    if ( currentHiddenWord === word ){
      setWon(true);
    }
  }, [hiddenWord] );

  const checkLetter = (letter: string) => {
    if ( lose) return;
    if ( won ) return;
    if ( !word.includes(letter) ){
      setAttempts( Math.min(attempts + 1, 9 ) );

      return;
      //Math.min(attempts + 1, 9 ) -> de a 1 hasta el 9 sin pasarse partiendo del usestate
    }

    //split() -> separa la palabra en letras
    const hiddenWordArray = hiddenWord.split(' ');
    for (let i = 0; i < word.length; i++) {
      if ( word[i] === letter ){
        //Actualizar la palabra oculta
        hiddenWordArray[i] = letter;
      }
    }
    //join() -> une las letras
    setHiddenWord(hiddenWordArray.join(' '));
  }

  const resetGame = () => {
    const newWord = randomWords();

    setWord(newWord);
    setHiddenWord('_ '.repeat(newWord.length));
    setAttempts(0);
    setLose(false);
    setWon(false);
  }
  
  return (
      <div className='app'>
        
        {/* Imagenes */}
        <HangImage imageNumber= { attempts }/>

        {/* Palabra oculta */}
        <h3>{hiddenWord}</h3>

        {/* Contador de intentos */}
        <h3>Intentos: { attempts }</h3>

        {/* Mensaje de perder */}
        { (lose) 
        ? <h2>Perdiste, la palabra era: {word}  <button onClick={resetGame}>Volver a intentar</button></h2>
        :  '' }
        {/* /* ? se usa para hacer una condicion, si se cumple se ejecuta lo que esta despues de los dos puntos,
         si no se cumple se ejecuta lo que esta despues del signo de interrogacion */}
        
        {/* Mensaje de ganar */}
        { (won)
        ? <h2>Ganaste!  <button onClick={resetGame}>Jugar de nuevo</button></h2>
        : '' }

        {/* Botones de letras */}
        {
          letters.map( (letter)=>(
            <button
            onClick={ ()=> checkLetter(letter) }   
            key={letter}> {letter} 
            </button>
          ))
        }
      </div>
)
}

export default App

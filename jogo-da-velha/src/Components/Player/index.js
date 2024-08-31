import { Fragment, useState } from "react";
import playerx from '../../img/X.png';
import playero from '../../img/Circle.png';
import './styles.css';

function Player(index){
        
        const [escolhePlayer, setPlayer] = null;
        const handleClick= () => {
            if (escolhePlayer === null) {
                setPlayer('X'); // Define o primeiro clique como 'X'
            } else if (escolhePlayer === 'X') {
                setPlayer('O'); // Muda para 'O' no próximo clique
            }
        };
        return(
        <Fragment>
            <button className="jogo-da-velha-button" onClick={handleClick}>
            {escolhePlayer === 'X' && <img src={playerx} alt="X" />}  {/* Mostra o X se o estado for X */}
            {escolhePlayer === 'O' && <img src={playero} alt="O" />}  {/* Mostra o O se o estado for O */}
        </button>
        </Fragment>
        
    );
    
}


export default Player;
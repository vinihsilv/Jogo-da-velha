import React, { useState } from 'react';
import './styles.css';
import playerx from '../../img/X.png';
import playero from '../../img/Circle.png';
import Painel from '../../Components/Painel/Painel';

function Hashtag (){
    const emptyBoard = Array(9).fill("");
    
    const [board, setBoard] = useState(emptyBoard);
    const [currentPlayer, setCurrentPlayer] = useState("x");
    const [strings, setStrings] = useState(currentPlayer);

    const handleCellClick = (index) => {
        if(board[index] !== ""){
            return null;
        }
        
        setBoard(board.map((item, itemIndex) => itemIndex === index ? currentPlayer : item));

         setCurrentPlayer(currentPlayer === "x" ? "o" : "x");
         setStrings(currentPlayer);
         console.log(strings)
         
        };
       
    return(
        <Painel>
            <div className='board'>
                {board.map((item, index) => (
                    <div key={index} className={`cell ${item}`} onClick={() => handleCellClick(index)}>
                        {item && <img src={item === 'x' ? playerx : playero} alt={item} />}
                    </div>
            ))}
            <label className="label"><input type="checkbox" className="box" ></input>mostrar eventos</label>
            </div>
        </Painel>
    );
}
export default Hashtag;
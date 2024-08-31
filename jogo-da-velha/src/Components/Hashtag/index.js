import React, { useState } from 'react';
import './styles.css';
import playerx from '../../img/X.png';
import playero from '../../img/Circle.png';
import Painel from '../../Components/Painel/Painel';
function Hashtag (){
    const emptyBoard = Array(9).fill("");
    const [board, setBoard] = useState(emptyBoard);
    const [currentPlayer, setCurrentPlayer] = useState("x");
    const handleCellClick = (index) => {
        if(board[index] !== ""){
            return null;
        }
        
        setBoard(board.map((item, itemIndex) => itemIndex === index ? currentPlayer : item));

         
         setCurrentPlayer(currentPlayer === "x" ? "o" : "x");
        };
    return(
        <Painel>
            <div className='board'>
                {board.map((item, index) => (
                    <div key={index} className={`cell ${item}`} onClick={() => handleCellClick(index)}>
                        {item && <img src={item === 'x' ? playerx : playero} alt={item} />}
                    </div>
            ))}
            </div>
        </Painel>
    );
}
export default Hashtag;
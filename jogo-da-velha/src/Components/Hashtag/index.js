import React, { useState } from 'react';
import './styles.css';
import playerx from '../../img/X.png';
import playero from '../../img/Circle.png';
import Painel from '../../Components/Painel/Painel';

function Hashtag (){
    const emptyBoard = Array(9).fill("");
    
    const [board, setBoard] = useState(emptyBoard);
    const [currentPlayer, setCurrentPlayer] = useState("x");
    const [playerHistory, setPlayerHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);

    const handleCellClick = (index) => {
        if(board[index] !== ""){
            return null;
        }
        setBoard(board.map((item, itemIndex) => itemIndex === index ? currentPlayer : item));
        setPlayerHistory([...playerHistory, currentPlayer]);
        setCurrentPlayer(currentPlayer === "x" ? "o" : "x");
        };
    const handleCheckboxChange = (event) => {
        setShowHistory(event.target.checked);
    };     
    return(
        <Painel>
            <div className='board'>
                {board.map((item, index) => (
                    <div key={index} className={`cell ${item}`} onClick={() => handleCellClick(index)}>
                        {item && <img src={item === 'x' ? playerx : playero} alt={item} />}
                    </div>
            ))}
            <label className="label"><input type="checkbox" className="box" onChange={handleCheckboxChange}></input>mostrar eventos</label>
                {showHistory && (
                    <div>
                      {playerHistory.map((player, index) => (
                        <label key={index}>Player {index + 1}: {String(player).toUpperCase()}</label>
                      ))}
                    </div>
            )}
            </div>
        </Painel>
    );
}
export default Hashtag;
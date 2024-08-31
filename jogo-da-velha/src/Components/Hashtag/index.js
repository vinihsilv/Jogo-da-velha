import React, { useState } from 'react';
import './styles.css';
import playerx from '../../img/X.png';
import playero from '../../img/Circle.png';
import Painel from '../../Components/Painel/Painel';
function Hashtag (){
    const emptyBoard = Array(9).fill("");
    const [board, setBoard] = useState(emptyBoard);
    const handleCellClick = (index) => {
        setBoard(board.map((item, itemIndex) => itemIndex == index ? <img src ={playero}/> : item));
    }
    return(
        <Painel>
            <div className='board'>
                {board.map((item, index) => (
                    <div key={index} className={`cell $ {item}`} onClick={() => handleCellClick(index)}>
                        {item}
                    </div>
            ))}
            </div>
        </Painel>
    );
}
export default Hashtag;
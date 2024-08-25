import React from 'react';
import './styles.css';
import Painel from '../../Components/Painel/Painel';
import Player from '../../Components/Player';
function Hashtag (){
    return(
        <Painel>
            <ul className='hashtag'>
                <li><Player player='x'/></li>
                <li><Player player='o'/></li>
                <li><Player player='x'/></li>
                <li><Player player='o'/></li>
                <li><Player player='x'/></li>
                <li><Player player='o'/></li>
                <li><Player player='x'/></li>
                <li><Player player='o'/></li>
                <li><Player player='x'/></li>
            </ul>
        </Painel>
    );
}
export default Hashtag;
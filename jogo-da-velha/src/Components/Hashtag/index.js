import React from 'react';
import Painel from '../../Components/Painel/Painel';
import Player from '../../Components/Player';
function Hashtag (){
    return(
        <Painel>
            <Player player='x'/>
            <Player player='o'/>
            <Player player='x'/>
            <Player player='o'/>
            <Player player='x'/>
            <Player player='o'/>
            <Player player='x'/>
            <Player player='o'/>
            <Player player='x'/>
        </Painel>
    );
}
export default Hashtag;
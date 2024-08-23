import React from 'react';
import './Title.css';
import Logo from '../../Objects/Logo';
import Sobre from '../../Objects/Sobre';

function Head(){
    return( 
    <div className='titulo'>
        
        <Logo/>
        <Sobre/>
    </div>
    )
}
export default Head;
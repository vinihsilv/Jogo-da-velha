import React from 'react';
import Logo from '../../Objects/Logo';
import Sobre from '../../Objects/Sobre';
import './Title.css';



function Head({className = ""}){
    return( 
    <div className={`titulo ${className}`}> 
        <Logo/>
        <Sobre/>
    </div>
    )
}
export default Head;
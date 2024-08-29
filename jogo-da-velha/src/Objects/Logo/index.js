import React, { Fragment } from "react";  
import './styles.css'
import imagem from '../../img/logo500.png';

function Logo (){
    return(
        <Fragment>
            <img className="logo" src={imagem} alt='logo react'/>
        </Fragment>
    )
}
export default Logo;
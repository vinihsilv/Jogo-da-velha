import React, { Fragment } from "react";  
import imagem from '../../img/logo500.png';
import './styles.css'
function Logo (){
    return(
        <Fragment>
            <img className="logo" src={imagem} alt='logo react'/>
        </Fragment>
    )
}
export default Logo;
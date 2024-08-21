import React, { Fragment } from "react";  
import imagem from '../../img/logo500.png';
function Logo (){
    return(
        <Fragment>
            <img src={imagem} alt='logo react'/>
        </Fragment>
    )
}
export default Logo;
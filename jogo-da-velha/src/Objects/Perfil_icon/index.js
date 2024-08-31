import React, { Fragment } from "react";
import Icon from '../../img/Perfil_icon.png';
import './styles.css';

function Perfil_icon(){
    return(
        <Fragment>
            <img className='icon' src={Icon} alt="foto de perfil"/>
        </Fragment>
    )
}
export default Perfil_icon;
import React from "react";
import githubIcon from '../../img/github.png';
import instagramIcon from '../../img/instagram_icon.png';
import linkedlnIcon from '../../img/linkedln_icon.png';
import './styles.css';

function Contatos(){
    return(
        <div className="contato">
            <img src={githubIcon} alt='github'/>
            <img src={instagramIcon} alt='instagram'/>
            <img src={linkedlnIcon} alt='linkedln'/>
        </div>
    )
}
export default Contatos;
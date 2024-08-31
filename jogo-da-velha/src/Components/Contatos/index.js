import React from "react";
import githubIcon from '../../img/github.png';
import instagramIcon from '../../img/instagram_icon.png';
import linkedlnIcon from '../../img/linkedln_icon.png';
import './styles.css';

function Contatos(){
    return(
        <div className="contato">
            <a href='https://github.com/vinihsilv' target="_blank"><img src={githubIcon} /></a>
            <a href='https://www.instagram.com/vini.hsilv/' target="_blank"><img src={instagramIcon} alt='instagram'/></a>
            <a href='https://www.linkedin.com/in/vinicius-henrique-56369a245/' target="_blank"><img src={linkedlnIcon} alt='linkedln'/></a>
        </div>
    )
}
export default Contatos;
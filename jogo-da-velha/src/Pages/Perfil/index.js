import React, { Fragment } from "react";
import Head from "../../Components/Header/Head";
import Contatos from "../../Components/Contatos/index";
import Perfil_icon from "../../Objects/Perfil_icon";
import './styles.css';


function Perfil(){
    return(
       <div className='perfil'>        
       <Head className='-dark'/>
       <Contatos/>
       <Perfil_icon/>
       </div>
    )
}
export default Perfil;
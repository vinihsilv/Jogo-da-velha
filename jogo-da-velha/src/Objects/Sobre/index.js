import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
function Sobre(){
    return(
    <div className='titulo'>
    <Link to='/Perfil' className='sobre'>Sobre</Link>
    <Link to='/' className='home'>Home</Link>
    </div>
    )
}
export default Sobre;
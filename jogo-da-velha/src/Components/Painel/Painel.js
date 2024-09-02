import React from 'react';
import './Styles.css';
function Painel(props){
    return(
        <div className="bloco">
            {props.children}
            
        </div>
    )
}
export default Painel;
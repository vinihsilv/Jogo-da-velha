import React from 'react';
import Label from '../../Components/Label'; 
import './Styles.css';
function Painel(props){
    return(
        <div className="bloco">
            {props.children}
            <Label/>
        </div>
    )
}
export default Painel;
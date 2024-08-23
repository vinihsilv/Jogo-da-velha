import { Fragment } from "react";
import imagem from '../../img/X.png';
import './styles.css';
function Player(){
    return(
        <Fragment>
            <button className="image" ><img src={imagem}></img></button>
        </Fragment>
    );
}
export default Player;
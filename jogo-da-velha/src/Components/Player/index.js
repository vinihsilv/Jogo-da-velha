import { Fragment } from "react";
import playerx from '../../img/X.png';
import playero from '../../img/Circle.png';
import './styles.css';
function Player(props){
        let player = '';
        if(props.player === 'x'){
            player = playerx;
        }else if (props.player === 'o'){
            player = playero
        }

        return(
        <Fragment>
            <button className="image" ><img src={player}></img></button>
        </Fragment>
    );
}
export default Player;
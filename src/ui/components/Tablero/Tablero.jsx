import Empate  from "../Empate/Empate"
import Adversario from "../Adversario/Adversario"
import Jugador from "../Jugador/Jugador";
import Dealer from "../Dealer/Dealer"
import "./Tablero.css"
import { connect } from "react-redux";
import {repartirMazo} from "../../../api/actions"

const Tablero = (props) => {
    // props.repartirMazo();
    
    return (
        <div className="tablero-container">
            <div className="partesuperior-container">

                {props.cartasEmpate.length > 0 ? <Empate /> : ""}
                <Adversario />            
                
            </div>
            <br />
            <Jugador />
            <br/>
            <button onClick={() => props.repartirMazo()}>Repartir</button>
            <br />
            {props.debug ? <Dealer /> : null}            
        </div>
    );
}

//const mapStateToProps = ({cartasJugador, cartasAdversario}) => ({cartasJugador, cartasAdversario});

const mapStateToProps = store => ({
    debug: store.debug,
    cartasEmpate: store.cartasEmpate,    
    mazo: store.mazo
})

const mapDispatchToProps = { repartirMazo };

export default connect(mapStateToProps, mapDispatchToProps)(Tablero);
import Jugador from "../Jugador/Jugador";
import Adversario from "../Adversario/Adversario"
import { connect } from "react-redux";
import {repartirMazo} from "../../../api/actions"

const Tablero = ({repartirMazo, cartasJugador, cartasAdversario}) => {
    return (
        <div className="tablero">
            <Adversario />
            <Jugador />
            <br/>
            <button onClick={repartirMazo}>Repartir</button>
            <br/>
            <span>Cartas jugador: {cartasJugador}</span>
            <br/>
            <span>Cartas adversario: {cartasAdversario}</span>


        </div>
    );
}

const mapStateToProps = ({cartasJugador, cartasAdversario}) => ({cartasJugador, cartasAdversario});

const mapDispatchToProps = { repartirMazo };

export default connect(mapStateToProps, mapDispatchToProps)(Tablero);
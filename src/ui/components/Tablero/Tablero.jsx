import Jugador from "../Jugador/Jugador";
import Adversario from "../Adversario/Adversario"
import Dealer from "../Dealer/Dealer"
import { connect } from "react-redux";
import {repartirMazo} from "../../../api/actions"

const Tablero = ({repartirMazo}) => {
    repartirMazo();
    return (
        <div className="tablero">
            <Adversario />
            <br/>
            <Dealer />
            <br/>
            <Jugador />
            <br/>
            <button onClick={repartirMazo}>Repartir</button>
        </div>
    );
}

//const mapStateToProps = ({cartasJugador, cartasAdversario}) => ({cartasJugador, cartasAdversario});

/*const mapStateToProps = store => ({
    cartasJugador: store.cartasJugador,
    cartasAdversario: store.cartasAdversario,
    cartasEmpate: store.cartasEmpate
})
*/

const mapDispatchToProps = { repartirMazo };

export default connect(null, mapDispatchToProps)(Tablero);
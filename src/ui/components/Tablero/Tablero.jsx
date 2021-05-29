import Jugador from "../Jugador/Jugador";
import Adversario from "../Adversario/Adversario"
import Dealer from "../Dealer/Dealer"
import ChatJugador from "../ChatJugador/ChatJugador"
import ChatAdversario from "../ChatAdversario/ChatAdversario"
import { connect } from "react-redux";
import {repartirMazo} from "../../../api/actions"

const Tablero = ({repartirMazo}) => {
    repartirMazo();
    return (
        <div className="tablero">
            <Adversario />
            <br/>
            <ChatAdversario />
            <br />
            <Dealer />
            <br/>
            <Jugador />
            <br/>
            <ChatJugador />
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
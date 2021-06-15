import { connect } from "react-redux";
import { sumarCarta, restarCarta} from "../../../api/actions"

export const Dealer = (props) => {
    
    return (
        <div className="dealer">
            <span>Cartas jugador ({props.cartasJugador.length}) : {props.cartasJugador.map(num => num+",")}</span>
            <br/>
            <span>Cartas adversario ({props.cartasAdversario.length}) : {props.cartasAdversario.map(num => num+",")}</span>
            <br/>
            <span>Cartas en empate ({props.cartasEmpate.length}) : {props.cartasEmpate.map(num => num+",")}</span>
            <br />
            <span>Cant de cartas en juego {props.cartasJugador.length + props.cartasAdversario.length}</span>
            <br />
            <button onClick={() => props.sumarCarta(props)}>+</button>
            &nbsp;
            <button onClick={() => props.restarCarta(props)}>-</button>

        </div>
        );   
}

const mapStateToProps = store => ({
    atributoAdversario: store.atributoAdversario,
    atributos: store.atributos,
    cartasJugador: store.cartasJugador,
    cartasAdversario: store.cartasAdversario,
    cartasEmpate: store.cartasEmpate,
    cartasJugador2: store.cartasJugador,
    cartasAdversario2: store.cartasAdversario
});

const mapDispatchToProps = { sumarCarta, restarCarta };



export default connect(mapStateToProps, mapDispatchToProps)(Dealer);

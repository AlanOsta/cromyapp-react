import { connect } from "react-redux";
import { sumarCarta, restarCarta} from "../../../api/actions"

export const Dealer = (props) => {
    
    return (
        <div className="dealer">
            <span>Cartas jugador ({props.cartasJugador.length}) : {props.cartasJugador}</span>
            <br/>
            <span>Cartas adversario ({props.cartasAdversario.length}) : {props.cartasAdversario}</span>
            <br/>
            <span>Cartas en empate ({props.cartasEmpate.length}) : {props.cartasEmpate}</span>
            <br />
            <button onClick={() => props.sumarCarta(props)}>+</button>
            <br />
            <button onClick={() => props.restarCarta(props)}>-</button>

        </div>
        );   
}

const mapStateToProps = store => ({
    atributoAdversario: store.atributoAdversario,
    atributos: store.atributos,
    cartasJugador: store.cartasJugador.map(num => num+","),
    cartasAdversario: store.cartasAdversario.map(num => num+","),
    cartasEmpate: store.cartasEmpate.map(num => num+","),
    cartasJugador2: store.cartasJugador,
    cartasAdversario2: store.cartasAdversario
});

const mapDispatchToProps = { sumarCarta, restarCarta };



export default connect(mapStateToProps, mapDispatchToProps)(Dealer);

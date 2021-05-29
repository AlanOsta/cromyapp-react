import Jugador from "../Jugador/Jugador";
import Adversario from "../Adversario/Adversario"
import Dealer from "../Dealer/Dealer"
import { connect } from "react-redux";
import {repartirMazo} from "../../../api/actions"

const Tablero = (props) => {
    props.repartirMazo();
    return (
        <div className="tablero">
            <Adversario />            
            <br />            
            <Jugador />
            <br/>
            <button onClick={() => props.repartirMazo()}>Repartir</button>
            <br />
            {props.debug ? <Dealer /> : null}
            {console.dir(props)}
        </div>
    );
}

//const mapStateToProps = ({cartasJugador, cartasAdversario}) => ({cartasJugador, cartasAdversario});

const mapStateToProps = store => ({
    debug: store.debug    
})

const mapDispatchToProps = { repartirMazo };

export default connect(mapStateToProps, mapDispatchToProps)(Tablero);
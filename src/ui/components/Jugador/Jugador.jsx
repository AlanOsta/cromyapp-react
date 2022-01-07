import './Jugador.css';
import mazoImg from '../../img/sa.png'
import Chat from '../Chat/Chat'
import { connect } from "react-redux"
import { match } from "../../../api/actions"

const Jugador = (props) => {

    const handleClick = (atributoEnJuego, props) => {
        props.match(atributoEnJuego, props);
    }

    if (props.cartaJugador.id === 32) {
        return (
            <div className="jugador-container">
                <div className="card amarilla" onClick={() => handleClick(32, props)}/>                
                <Chat />
            </div>
        )
    }

    if (props.cartaJugador.id === 33) {
        return (
            <div className="jugador-container">
                <div className="card roja" onClick={() => handleClick(33, props)}/>                
                <Chat />
            </div>
        )
    }
    
    return (
        <div className="jugador-container">
            <div className="card">
                <div className="cardHeader">
                    <div>{props.cartaJugador.lCarta}</div>
                    <div><img src={mazoImg} alt="Imagen del Mazo"></img></div>
                    <div>{props.cartaJugador.nCarta}</div>
                </div>
                <div className="img">
                    <img src={process.env.PUBLIC_URL + props.cartaJugador.ruta} id="imagen" alt="Imagen del personaje"></img>
                </div>
                <div className="nombre">
                    {props.cartaJugador.nombre}
                </div>
                <div className="atributos">
                    {props.cartaJugador.atributos.map(atributo => 
                        <div key={atributo.nombre} className={props.turnoJugador || (atributo.id === props.atributoAdversario) ? "habilitado" : "anulado"} onClick={() => handleClick(atributo.id, props)}>
                            <div>{atributo.nombre}</div>
                            <div>{atributo.valor}</div>
                        </div>
                    )}
                </div>                
            </div>
            <Chat />
        </div>

    
    )
}

const mapStateToProps = store => ({
    mazo: store.mazo,
    cartasJugador: store.cartasJugador,
    cartasAdversario: store.cartasAdversario,
    cartaJugador: store.cartaJugador,
    cartaAdversario: store.cartaAdversario,
    cartasEmpate: store.cartasEmpate,
    turnoJugador: store.turnoJugador,
    atributoEnJuego: store.atributoEnJuego,
    atributoAdversario: store.atributoAdversario,
    atributos: store.atributos,
    chat: store.chat
});

function mapDispatchToProps(dispatch) {
    return {
        match: (atributoEnJuego, props) => dispatch(match(atributoEnJuego, props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jugador);
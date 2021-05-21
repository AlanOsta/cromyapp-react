import './Jugador.css';
import mazoImg from '../../img/sa.png'
import { connect } from "react-redux"
import { jugadorJuega, match } from "../../../api/actions"

const Jugador = (props) => {

    const handleClick = (atributoEnJuego, props) => {
        //console.log("jug :"+atributoEnJuego);
        //props.jugadorJuega(atributoEnJuego);
        console.log("handleClick :"+props);
        props.match(atributoEnJuego, props);
    }

    return (
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

            {/* ------------ ATRIBUTOS ------------ */}
            {/* armar un for para esta seccion */}

            <div className="atributos">
                <div id={props.cartaJugador.atributos[0].nombre} onClick={() => handleClick(0, props)}> 
                    <div>{props.cartaJugador.atributos[0].nombre}</div>
                    <div>{props.cartaJugador.atributos[0].valor}</div>
                </div>

                <div id={props.cartaJugador.atributos[1].nombre} onClick={() => handleClick(1, props)}>
                    <div>{props.cartaJugador.atributos[1].nombre}</div>
                    <div>{props.cartaJugador.atributos[1].valor}</div>
                </div>

                <div id={props.cartaJugador.atributos[2].nombre} onClick={() => handleClick(2, props)}>
                    <div>{props.cartaJugador.atributos[2].nombre}</div>
                    <div>{props.cartaJugador.atributos[2].valor}</div>
                </div>

                <div id={props.cartaJugador.atributos[3].nombre} onClick={() => handleClick(3, props)}>
                    <div>{props.cartaJugador.atributos[3].nombre}</div>
                    <div>{props.cartaJugador.atributos[3].valor}</div>
                </div>

                <div id={props.cartaJugador.atributos[4].nombre} onClick={() => handleClick(4, props)}>
                    <div>{props.cartaJugador.atributos[4].nombre}</div>
                    <div>{props.cartaJugador.atributos[4].valor}</div>
                </div>
            </div>                
        </div>

    
    )
}

const mapStateToProps = store => ({
    cartasJugador: store.cartasJugador,
    cartasAdversario: store.cartasAdversario,
    cartaJugador: store.cartaJugador,
    cartaAdversario: store.cartaAdversario,
    cartasEmpate: store.cartasEmpate,
    atributoEnJuego: store.atributoEnJuego    
});

function mapDispatchToProps(dispatch) {
    return {
        jugadorJuega: (atributo) => dispatch(jugadorJuega(atributo)),
        match: (atributoEnJuego, props) => dispatch(match(atributoEnJuego, props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jugador);
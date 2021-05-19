import './Jugador.css';
import mazoImg from '../../img/sa.png'
import { connect } from "react-redux"
import  Dealer from "../Dealer/Dealer"
import { jugadorJuega } from "../../../api/actions"

const Jugador = (props) => {

    const handleClick = (atributo) => {
        props.jugadorJuega(atributo);
        Dealer.Match()
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
                <div id={props.cartaJugador.atributos[0].nombre} onClick={ () => handleClick(0)}> 
                    <div>{props.cartaJugador.atributos[0].nombre}</div>
                    <div>{props.cartaJugador.atributos[0].valor}</div>
                </div>

                <div id={props.cartaJugador.atributos[1].nombre} onClick={ () => handleClick(1)}>
                    <div>{props.cartaJugador.atributos[1].nombre}</div>
                    <div>{props.cartaJugador.atributos[1].valor}</div>
                </div>

                <div id={props.cartaJugador.atributos[2].nombre} onClick={ () => handleClick(2)}>
                    <div>{props.cartaJugador.atributos[2].nombre}</div>
                    <div>{props.cartaJugador.atributos[2].valor}</div>
                </div>

                <div id={props.cartaJugador.atributos[3].nombre} onClick={ () => handleClick(3)}>
                    <div>{props.cartaJugador.atributos[3].nombre}</div>
                    <div>{props.cartaJugador.atributos[3].valor}</div>
                </div>

                <div id={props.cartaJugador.atributos[4].nombre} onClick={ () => handleClick(4)}>
                    <div>{props.cartaJugador.atributos[4].nombre}</div>
                    <div>{props.cartaJugador.atributos[4].valor}</div>
                </div>
            </div>                
        </div>

    
    )
}

const mapStateToProps = store => ({
    cartaJugador: store.cartaJugador,
    cartaAdversario: store.cartaAdversario,
    Dealer: store.Dealer 
});

function mapDispatchToProps(dispatch) {
    return {
        jugadorJuega: (atributo) => dispatch(jugadorJuega(atributo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jugador);
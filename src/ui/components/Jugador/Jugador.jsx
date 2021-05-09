import './Jugador.css';
import mazoImg from '../../img/sa.png'
import { connect } from "react-redux"
import { jugadorJuega } from "../../../api/actions"

const Jugador = (props) => {

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

                <div className="atributos">
                    <div id={props.atributos[4]} onClick={ () => props.jugadorJuega(props.atributos[4], props.cartaJugador.Altura)}> 
                        <div>{props.atributos[4]}</div>
                        <div>{props.cartaJugador.Altura}</div>
                    </div>

                    <div id={props.atributos[5]} onClick={ () => props.jugadorJuega(props.atributos[5], props.cartaJugador.Peso)}>
                        <div>{props.atributos[5]}</div>
                        <div>{props.cartaJugador.Peso}</div>
                    </div>

                    <div id={props.atributos[6]} onClick={ () => props.jugadorJuega(props.atributos[6], props.cartaJugador.Fuerza)}>
                        <div>{props.atributos[6]}</div>
                        <div>{props.cartaJugador.Fuerza}</div>
                    </div>

                    <div id={props.atributos[7]} onClick={ () => props.jugadorJuega(props.atributos[7], props.cartaJugador.Ganadas)}>
                        <div>{props.atributos[7]}</div>
                        <div>{props.cartaJugador.Ganadas}</div>
                    </div>

                    <div id={props.atributos[8]} onClick={ () => props.jugadorJuega(props.atributos[8], props.cartaJugador.Velocidad)}>
                        <div>{props.atributos[8]}</div>
                        <div>{props.cartaJugador.Velocidad}</div>
                    </div>
                </div>                
            </div>

    
    )
}

const mapStateToProps = store => ({
    cartaJugador: store.cartaJugador,
    atributos: store.atributos    
});

function mapDispatchToProps(dispatch) {
    return {
        jugadorJuega: (atributo, valorAtributo) => dispatch(jugadorJuega(atributo, valorAtributo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jugador);
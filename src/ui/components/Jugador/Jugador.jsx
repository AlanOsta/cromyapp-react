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
                {/* armar un for para esta seccion */}

                <div className="atributos">
                    <div id={props.cartaJugador.atributos[0].nombre} onClick={ () => props.jugadorJuega(props.cartaJugador.atributos[0].id, props.cartaJugador.atributos[0].valor, props.cartaAdversario.atributos[0].valor)}> 
                        <div>{props.cartaJugador.atributos[0].nombre}</div>
                        <div>{props.cartaJugador.atributos[0].valor}</div>
                    </div>

                    <div id={props.cartaJugador.atributos[1].nombre} onClick={ () => props.jugadorJuega(props.cartaJugador.atributos[1].id, props.cartaJugador.atributos[1].valor, props.cartaAdversario.atributos[1].valor)}>
                        <div>{props.cartaJugador.atributos[1].nombre}</div>
                        <div>{props.cartaJugador.atributos[1].valor}</div>
                    </div>

                    <div id={props.cartaJugador.atributos[2].nombre} onClick={ () => props.jugadorJuega(props.cartaJugador.atributos[2].id, props.cartaJugador.atributos[2].valor)}>
                        <div>{props.cartaJugador.atributos[2].nombre}</div>
                        <div>{props.cartaJugador.atributos[2].valor}</div>
                    </div>

                    <div id={props.cartaJugador.atributos[3].nombre} onClick={ () => props.jugadorJuega(props.cartaJugador.atributos[3].id, props.cartaJugador.atributos[3].valor)}>
                        <div>{props.cartaJugador.atributos[3].nombre}</div>
                        <div>{props.cartaJugador.atributos[3].valor}</div>
                    </div>

                    <div id={props.cartaJugador.atributos[4].nombre} onClick={ () => props.jugadorJuega(props.cartaJugador.atributos[4].id, props.cartaJugador.atributos[4].valor)}>
                        <div>{props.cartaJugador.atributos[4].nombre}</div>
                        <div>{props.cartaJugador.atributos[4].valor}</div>
                    </div>
                </div>                
            </div>

    
    )
}

const mapStateToProps = store => ({
    cartaJugador: store.cartaJugador,
    cartaAdversario: store.cartaAdversario   
});

function mapDispatchToProps(dispatch) {
    return {
        jugadorJuega: (atributo, valorJugador, valorAdversario) => dispatch(jugadorJuega(atributo, valorJugador, valorAdversario))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jugador);
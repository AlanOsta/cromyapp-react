
import './Jugador.css';
import sa from '../../img/sa.png'
import { connect } from "react-redux";

const Jugador = (props) => {

    let playerCard = <div className="card">
                        <div className="cardHeader">
                            <div>{props.cartaJugador.lCarta}</div>
                            <div><img src={sa} alt="Super Amigos"></img></div>
                            <div>{props.cartaJugador.nCarta}</div>
                        </div>

                        <div className="img">
                            <img src={process.env.PUBLIC_URL + props.cartaJugador.ruta} id="imagen" alt="Imagen del personaje"></img>
                        </div>
                        <div className="nombre">
                            {props.cartaJugador.nombre}
                        </div>
                        <div className="atributos">
                            <div id="altura">
                                <div>Altura</div>
                                <div>{props.cartaJugador.altura}</div>
                            </div>
                            <div id="peso">
                                <div>Peso</div>
                                <div>{props.cartaJugador.peso}</div>
                            </div>
                            <div id="fuerza">
                                <div>Fuerza</div>
                                <div>{props.cartaJugador.fuerza}</div>
                            </div>
                            <div id="ganadas">
                                <div>Peleas Ganadas</div>
                                <div>{props.cartaJugador.ganadas}</div>
                            </div>
                            <div id="velocidad">
                                <div>Velocidad</div>
                                <div>{props.cartaJugador.velocidad}</div>
                            </div>
                        </div>             
                    </div>

    return (playerCard);
}

const mapStateToProps = store => ({
    cartaJugador : store.cartaJugador
});

export default connect(mapStateToProps)(Jugador);
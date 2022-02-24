import Empate  from "../Empate/Empate"
import Adversario from "../Adversario/Adversario"
import Jugador from "../Jugador/Jugador";
import Dealer from "../Dealer/Dealer"
import "./Tablero.css"
import { connect } from "react-redux";
import {repartirMazo} from "../../../api/actions"

const Tablero = (props) => {
    // props.repartirMazo();

    const Partida = () => {
        return(
            <div>
                <div className="partesuperior-container">
                    {props.cartasEmpate.length > 0 ? <Empate /> : ""}
                    <Adversario />            
                </div>
                <br />
                <Jugador />
                <br/>
                <button onClick={() => props.repartirMazo()}>Repartir</button>
                <br />
                {props.debug ? <Dealer /> : null}              
            </div>
        )
    }

    const Intro = () => {
        return(
            <div> 
                <h2>Atencion!</h2>
                <p>Este juego esta en constante desarrollo! Su intencion es poner en practica diversas tecnologias que voy adquiriendo en mi constante aprendizaje.</p>
                <h2>Reglamento del "Juego del Match" con tarjeta roja y tarjeta amarilla</h2>
                <p>El objetivo del juego es ganar todos los naipes.</p>
                <p>Se reparte la totalidad de naipes entre el/la jugador/a y la computadora pudiendo ver solamente el naipe superior de su pila. El juego lo inicia el jugador, quien elije según su criterio la mejor característica &#40;Altura, Peso, Fuerza, etc.&#41; del personaje de su naipe superior. Esta característica deberá clickearla y se comparara contra la misma caracteristica de la carta de su oponente. Quien tenga la mayor cifra ganará la carta de su oponente y junto a la suya se ubicarán debajo de su pila.</p> 
                <p>El jugador/a que ganó la mano es quien elige la característica del naipe siguiente, continuando con la misma mecánica de juego.</p> 
                <p>Si se produjera un empate entre los dos jugadores, deberán colocar sus naipes superiores sobre la mesa y competiran con la carta siguiente. El jugador que haya cantado primero su característica será quien cantará la nueva característica. El ganador de esta mano se llevará la carta de su adversario más las cartas que habían quedado sobre la mesa. </p>
                <p>El jugador que se queda sin cartas queda eliminado del juego y El Match termina.</p>
                <p>Quien tenga la tarjeta Amarilla como carta superior &#40;en cualquier mano del juego&#41; recibira del oponente su carta superior. Quien tenga la tarjeta Roja como carta superior &#40;en cualquier mano del juego&#41; recibira del oponente sus ultimas dos cartas. Las tarjetas Amarilla y Roja se usan una sola vez en el juego y se dejan a un lado una vez que han salido.</p>
                <button onClick={() => props.repartirMazo()}>Comenzar!</button>
            </div>
        )
    }

    const Ganador = () => {
        return(
            <div> Felcidades!!! {props.ganador} gano la partida! </div>
        )
    }

    return (
        <div className="tablero-container">
                {!props.intro ? <Intro /> :  ""}
                {!props.ganador ? <Partida /> :  <Ganador /> }
        </div>
    );
}

//const mapStateToProps = ({cartasJugador, cartasAdversario}) => ({cartasJugador, cartasAdversario});

const mapStateToProps = store => ({
    debug: store.debug,
    cartasEmpate: store.cartasEmpate,    
    mazo: store.mazo,
    ganador: store.ganador,
    intro: store.intro
})

const mapDispatchToProps = { repartirMazo };

export default connect(mapStateToProps, mapDispatchToProps)(Tablero);
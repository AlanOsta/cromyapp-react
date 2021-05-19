import { connect } from "react-redux";
import { ganoJugador, ganoAdversario} from "../../../api/actions"

const Match = (props) => {
    let cartasJugador = props.cartasJugador
    let cartasAdversario = props.cartasAdversario
    let valorAtributoJugador = props.cartaJugador.atributos[props.atributoEnJuego].valor
    let valorAtributoAdversario = props.cartaAdversario.atributos[props.atributoEnJuego].valor

    // GANO EL JUGADOR
    if (valorAtributoJugador > valorAtributoAdversario){
    
        // Si hay cartas en empate se asignan al final de array del jugador y se eliminan del empate
        //if (empate.length > 0) {
        //    empate.forEach(num => cartasJugador.push(empate[0]));
        //    empate=[];
        //    actualizarCarta();
        //}

        // Si el jugador gano, mueve las primeras cartas de ambos al final del array del jugador
        cartasJugador.push(cartasJugador[0],cartasAdversario[0]);
        cartasJugador.shift();
        cartasAdversario.shift();        
    } 
    
    // GANO IA
    if (valorAtributoJugador < valorAtributoAdversario){

        // Si hay cartas en empate se asignan al final de array de la IA y se eliminan del empate
        //if (empate.length > 0) {
        //    empate.forEach(num => cartasAdversario.push(empate[0]));
        //    empate=[];
        //    actualizarCarta();
        //}

        // Si la IA gano, mueve las primeras cartas de ambos al final del array de la IA
        cartasAdversario.push(cartasAdversario[0],cartasJugador[0]);
        cartasAdversario.shift();
        cartasJugador.shift();

        // ############ ELIJE LA IA ############
    }

    return (cartasJugador, cartasAdversario)

    
}

const mapStateToProps = store => ({
    cartasJugador: store.cartasJugador,
    cartasAdversario: store.cartasAdversario,
    cartaJugador: store.cartaJugador,
    cartaAdversario: store.cartaAdversario,
    atributoEnJuego: store.atributoEnJuego   
});

function mapDispatchToProps(dispatch) {
    return {
        ganoJugador: (cartasJugador,cartasAdversario) => dispatch(ganoJugador(cartasJugador,cartasAdversario)),
        ganoAdversario: (cartasJugador,cartasAdversario) => dispatch(ganoAdversario(cartasJugador,cartasAdversario))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Match);
//export default Match;
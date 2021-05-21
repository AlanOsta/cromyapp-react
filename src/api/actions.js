//import { connect } from "react-redux"

function shuffle(array) {
    let tmp, current, top = array.length;
    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }
    return array;
}

//export const repartirMazo = () => ({type: "REPARTIR_MAZO"});
export const repartirMazo = () => {
    let cartasJugador = [];
    let cartasAdversario = [];
    let i;
    for (cartasJugador=[], i=0 ; i<34 ; ++i) cartasJugador[i]=i;
    cartasJugador = shuffle(cartasJugador);
    cartasAdversario = cartasJugador.splice(16, 17);
    
    return (dispatch) => {
        fetch("http://localhost:3000/cartas")
        .then (res=>res.json())
        .then (res=>{
            let atributos = res[0].atributos.map( atributo => atributo.nombre)
            dispatch({
                type: "REPARTIR_MAZO",
                mazo: res,
                atributos: atributos,
                cartasJugador: cartasJugador,
                cartasAdversario: cartasAdversario
            });            
        })
        .catch(err=>{
            console.log(err);
        });
    };
};

export const jugadorJuega = (atributo) => {
    console.log ("actions "+atributo)
        
    return {
        type : "JUGADOR_JUEGA",
        atributo: atributo
    }    
}

/*
export const ganoJugador = (cartasJugador, cartasAdversario) => {
    console.log ("actions: ganoJugador")
    return {
        type: "GANO_JUGADOR",
        cartasJugador: cartasJugador,
        cartasAdversario: cartasAdversario
    }
}

export const ganoAdversario = (cartasJugador, cartasAdversario) => {
    console.log ("actions: ganoAdversario")
    return {
        type: "GANO_ADVERSARIO",
        cartasJugador: cartasJugador,
        cartasAdversario: cartasAdversario
    }
}
*/

export const match = (atributoEnJuego, props) => {
    //let atributoEnJuego = props.atributoEnJuego
    let cartasJugador = props.cartasJugador;
    let cartasAdversario = props.cartasAdversario;
    let cartasEmpate = props.cartasEmpate;
    let valorAtributoJugador = props.cartaJugador.atributos[atributoEnJuego].valor;
    let valorAtributoAdversario = props.cartaAdversario.atributos[atributoEnJuego].valor;
    
    ///////// GANO EL JUGADOR /////////
    if (valorAtributoJugador > valorAtributoAdversario){
        // Si hay cartas en empate se asignan al final de array del jugador y se eliminan del empate
        if (cartasEmpate.length > 0) {
            cartasEmpate.map(carta => cartasJugador.push(carta));
            cartasEmpate=[];            
        }

        // Si el jugador gano, mueve las primeras cartas de ambos al final del array del jugador
        cartasJugador.push(cartasJugador[0],cartasAdversario[0]);
        cartasJugador.shift();
        cartasAdversario.shift();
        console.log("Gano el jugador")

        return (dispatch) => dispatch ({
            type: "GANO_JUGADOR",
            cartasJugador: cartasJugador,
            cartasAdversario: cartasAdversario
        })
    }

    ///////// GANO EL ADVERSARIO /////////
    if (valorAtributoJugador < valorAtributoAdversario){

        // Si hay cartas en empate se asignan al final de array de la IA y se eliminan del empate
        //if (empate.length > 0) {
        //    empate.forEach(num => cartasAdversario.push(empate[0]));
        //    empate=[];
        //    actualizarCarta();
        //}
        if (cartasEmpate.length > 0) {
            cartasEmpate.map(carta => cartasAdversario.push(carta));
            cartasEmpate=[];            
        }

        // Si la IA gano, mueve las primeras cartas de ambos al final del array de la IA
        cartasAdversario.push(cartasAdversario[0], cartasJugador[0]);
        cartasAdversario.shift();
        cartasJugador.shift();
        console.log("Gano el adversario")

        // ############ ELIJE LA IA ############
        return (dispatch) => dispatch({
            type: "GANO_ADVERSARIO",
            cartasJugador: cartasJugador,
            cartasAdversario: cartasAdversario
        })
    }

    ///////// EMPATE /////////
    if (valorAtributoJugador === valorAtributoAdversario){
        cartasEmpate.push(cartasJugador[0],cartasAdversario[0]);
        cartasJugador.shift();
        cartasAdversario.shift();
        console.log("Empate");

        return (dispatch) => dispatch({
            type: "EMPATE",
            cartasJugador: cartasJugador,
            cartasAdversario: cartasAdversario,
            cartasEmpate: cartasEmpate
        })
    }
    
    
}

/*
const mapStateToProps = store => ({
    cartaJugador: store.cartaJugador,
    cartaAdversario: store.cartaAdversario,
    atributoEnJuego: store.atributoEnJuego    
});

connect(mapStateToProps)*/
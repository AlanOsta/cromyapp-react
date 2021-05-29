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

export const match = (atributoEnJuego, props) => {
    let mazo = props.mazo;
    let cartasJugador = props.cartasJugador;
    let cartasAdversario = props.cartasAdversario;
    let cartasEmpate = props.cartasEmpate;
    let valorAtributoJugador = props.cartaJugador.atributos[atributoEnJuego].valor;
    let valorAtributoAdversario = props.cartaAdversario.atributos[atributoEnJuego].valor;
    let atributoAdversario = props.atributoAdversario;
    let atributos = props.atributos;
    let turnoJugador = props.turnoJugador;
    let chat = props.chat;    
    
    if ( !turnoJugador && (atributoEnJuego !== atributoAdversario)){

        console.log("Es el turno del adverasrio para elegir categoria")

        return (dispatch) => dispatch({
            type: ""
        })

    }else {

        ///////// CHAT HANDLER /////////
        let lineaChatJugador = {
            "nombre": "Jugador",
            "mensaje": atributos[atributoEnJuego]+" "+valorAtributoJugador
        }
        let lineaChatAdversario = {
            "nombre": "Adversario",
            "mensaje": atributos[atributoEnJuego]+" "+valorAtributoAdversario
        }

        while (chat.length > 8){chat.shift();}
        chat.push(lineaChatJugador);
        if (turnoJugador) {chat.push(lineaChatAdversario);}
        
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
                cartasAdversario: cartasAdversario,
                chat: chat
            })
        }

        ///////// GANO EL ADVERSARIO /////////
        if (valorAtributoJugador < valorAtributoAdversario){

            // Si hay cartas en empate se asignan al final de array del Adversario y se eliminan del empate
            if (cartasEmpate.length > 0) {
                cartasEmpate.map(carta => cartasAdversario.push(carta));
                cartasEmpate=[];            
            }

            // Si el Adversario gano, mueve las primeras cartas de ambos al final del array del Adversario
            cartasAdversario.push(cartasAdversario[0], cartasJugador[0]);
            cartasAdversario.shift();
            cartasJugador.shift();
            console.log("Gano el adversario")

            // ############ ELIJE EL ADVERSARIO ############
            // Modificar a algo mas elaborado que un random
            let atributoAdversario = Math.floor(Math.random()*5);
            valorAtributoAdversario = mazo[cartasAdversario[0]].atributos[atributoAdversario].valor

            ///////// CHAT ADVERSARIO HANDLER /////////
            /*
            if (chatAdversario.length < 5){
                chatAdversario.push(atributos[atributoAdversario]+" "+valorAtributoAdversario);
            } else {
                chatAdversario.shift();
                chatAdversario.push(atributos[atributoAdversario]+" "+valorAtributoAdversario);
            }
            */

            lineaChatAdversario = {
                "nombre": "Adversario",
                "mensaje": atributos[atributoAdversario]+" "+valorAtributoAdversario
            }
            while (chat.length > 10){chat.shift();}
            chat.push(lineaChatAdversario);
                
            return (dispatch) => dispatch({
                type: "GANO_ADVERSARIO",
                cartasJugador: cartasJugador,
                cartasAdversario: cartasAdversario,
                atributoAdversario: atributoAdversario
            })
        }

        ///////// EMPATE /////////
        if (valorAtributoJugador === valorAtributoAdversario){
            cartasEmpate.push(cartasJugador[0],cartasAdversario[0]);
            cartasJugador.shift();
            cartasAdversario.shift();
            console.log("Empate");

            if (!turnoJugador){
                let atributoAdversario = Math.floor(Math.random()*5);
                return (dispatch) => dispatch({
                    type: "EMPATE",
                    turnoJugador: turnoJugador,
                    atributoAdversario: atributoAdversario,
                    cartasJugador: cartasJugador,
                    cartasAdversario: cartasAdversario,
                    cartasEmpate: cartasEmpate
                })

            }

            return (dispatch) => dispatch({
                type: "EMPATE",
                turnoJugador: turnoJugador,
                cartasJugador: cartasJugador,
                cartasAdversario: cartasAdversario,
                cartasEmpate: cartasEmpate
            })
        }
    }  
}
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
    let lineaChatDealer;
    let lineasChatCount = 8; //define la cantidad de lineas a mostrar en el chat
    
    if ( !turnoJugador && (atributoEnJuego !== atributoAdversario)){
        alert("Es el turno del adversario para elegir categoria")

        return (dispatch) => dispatch({
            type: ""
        })

    }else {

        ///////// CHAT  /////////
        let lineaChatJugador = {
            "nombre": "Jugador",
            "mensaje": atributos[atributoEnJuego]+" "+valorAtributoJugador
        }
        let lineaChatAdversario = {
            "nombre": "Adversario",
            "mensaje": atributos[atributoEnJuego]+" "+valorAtributoAdversario
        }

        chat = [...chat, lineaChatJugador];        
        if (turnoJugador) {chat = [...chat, lineaChatAdversario];}
        while (chat.length > lineasChatCount){chat.shift();}
        
        ///////// GANO EL JUGADOR /////////
        if (valorAtributoJugador > valorAtributoAdversario){
            // Si hay cartas en empate se asignan al final de array del jugador y se eliminan del empate
            if (cartasEmpate.length > 0) {
                cartasEmpate.map(carta => cartasJugador = [...cartasJugador, carta])
                cartasEmpate=[];            
            }

            // Si el jugador gano, mueve las primeras cartas de ambos al final del array del jugador
            cartasJugador = [...cartasJugador,cartasJugador[0],cartasAdversario[0]]
            cartasJugador.shift();
            cartasAdversario.shift();
            
            lineaChatDealer = {
                "nombre": "Dealer",
                "mensaje": "El Jugador gano la mano"
            }
                chat = [...chat, lineaChatDealer]
                while (chat.length > lineasChatCount){chat.shift();}

            // Si el jugador gano la mano Y gano partida
            if (cartasAdversario.length <= 0) {

                return (dispatch) => dispatch ({
                    type: "PARTIDA_JUGADOR",
                    cartasJugador: cartasJugador,
                    cartasAdversario: cartasAdversario,
                    chat: chat                    
                })
            }else {

            return (dispatch) => dispatch ({
                type: "GANO_JUGADOR",
                cartasJugador: cartasJugador,
                cartasAdversario: cartasAdversario,
                chat: chat
            })
            }
        }

        ///////// GANO EL ADVERSARIO /////////
        if (valorAtributoJugador < valorAtributoAdversario){

            // Si hay cartas en empate se asignan al final de array del Adversario y se eliminan del empate
            if (cartasEmpate.length > 0) {
                cartasEmpate.map(carta => cartasAdversario = [...cartasAdversario, carta])
                cartasEmpate=[];            
            }

            // Si el Adversario gano, mueve las primeras cartas de ambos al final del array del Adversario
            cartasAdversario = [...cartasAdversario, cartasAdversario[0], cartasJugador[0]];
            cartasAdversario.shift();
            cartasJugador.shift();

            ///////// CHAT  /////////
            lineaChatDealer = {
                "nombre": "Dealer",
                "mensaje": "El Adversario gano la mano"
            }
                chat = [...chat, lineaChatDealer];
                while (chat.length > lineasChatCount){chat.shift();}
            
            // Si el adversario gano la mano Y gano partida 
            if (cartasJugador.length <= 0) {

                return (dispatch) => dispatch ({
                    type: "PARTIDA_ADVERSARIO",
                    cartasJugador: cartasJugador,
                    cartasAdversario: cartasAdversario,
                    chat: chat                    
                })
            }else {
                // ############ ELIJE EL ADVERSARIO ############
                // Modificar a algo mas elaborado que un random
                let atributoAdversario = Math.floor(Math.random()*5);
                valorAtributoAdversario = mazo[cartasAdversario[0]].atributos[atributoAdversario].valor

                ///////// CHAT  /////////
                
                lineaChatAdversario = {
                    "nombre": "Adversario",
                    "mensaje": atributos[atributoAdversario]+" "+valorAtributoAdversario
                }
                while (chat.length > lineasChatCount){chat.shift();}
                chat = [...chat, lineaChatAdversario];
                    
                return (dispatch) => dispatch({
                    type: "GANO_ADVERSARIO",
                    cartasJugador: cartasJugador,
                    cartasAdversario: cartasAdversario,
                    atributoAdversario: atributoAdversario,
                    chat: chat
                })
            }
        }

        ///////// EMPATE /////////
        if (valorAtributoJugador === valorAtributoAdversario){
            cartasEmpate = [...cartasEmpate, cartasJugador[0], cartasAdversario[0]];
            cartasJugador.shift();
            cartasAdversario.shift();
            
            ///////// CHAT  /////////
            lineaChatDealer = {
                "nombre": "Dealer",
                "mensaje": "Empate !"
            }
                chat = [...chat, lineaChatDealer];
                while (chat.length > lineasChatCount){chat.shift();}

            if (!turnoJugador){
                atributoAdversario = Math.floor(Math.random()*5);
                valorAtributoAdversario = mazo[cartasAdversario[0]].atributos[atributoAdversario].valor
                lineaChatAdversario = {
                    "nombre": "Adversario",
                    "mensaje": atributos[atributoAdversario]+" "+valorAtributoAdversario
                }
                chat = [...chat, lineaChatAdversario]
                while (chat.length > lineasChatCount){chat.shift();}

                return (dispatch) => dispatch({
                    type: "EMPATE",
                    turnoJugador: turnoJugador,
                    atributoAdversario: atributoAdversario,
                    cartasJugador: cartasJugador,
                    cartasAdversario: cartasAdversario,
                    cartasEmpate: cartasEmpate,
                    chat: chat
                })

            }

            return (dispatch) => dispatch({
                type: "EMPATE",
                turnoJugador: turnoJugador,
                cartasJugador: cartasJugador,
                cartasAdversario: cartasAdversario,
                cartasEmpate: cartasEmpate,
                chat: chat
            })
        }
    }
}

export const sumarCarta = (props) => {
    let cartasJugador = props.cartasJugador2
    let cartasAdversario = props.cartasAdversario2
    cartasJugador = [...cartasJugador, cartasAdversario[0]]
    cartasAdversario.shift();

    return (dispatch) => dispatch({
        type: "SUMAR_CARTA",
        cartasJugador: cartasJugador,
        cartasAdversario: cartasAdversario
    })
}

export const restarCarta = (props) => {
    let cartasJugador = props.cartasJugador2
    let cartasAdversario = props.cartasAdversario2
    cartasAdversario = [...cartasAdversario, cartasJugador[0]]
    cartasJugador.shift();

    return (dispatch) => dispatch({
        type: "RESTAR_CARTA",
        cartasJugador: cartasJugador,
        cartasAdversario: cartasAdversario
    })
}
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

function chatHandler(chat, nombre, mensaje){
    let lineasChatCount = 8; //define la cantidad de lineas a mostrar en el chat
    let nuevaLineaChat = {
        "nombre": nombre,
        "mensaje": mensaje
    }
    chat = [...chat, nuevaLineaChat];        
    while (chat.length > lineasChatCount){chat.shift();}
    return (chat)
}


export const repartirMazo = () => {
    let cartasJugador = [];
    let cartasAdversario = [];
    let chat = [];
    let i;
    for (cartasJugador=[], i=0 ; i<34 ; ++i) cartasJugador[i]=i;
    cartasJugador = shuffle(cartasJugador);
    cartasAdversario = cartasJugador.splice(16, 17);
    chat = chatHandler(chat, "Dealer", "Comienza el Juego!")
    
    return (dispatch) => {
        
        fetch('./superAmigosDBv2local.json',
        {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
           }
        })
        .then (res=>res.json())
        .then (res=>{
            //let atributos = res.cartas[0].atributos.map( atributo => atributo.nombre)
            let atributos = ['Altura', 'Peso', 'Fuerza', 'Peleas Ganadas', 'Velocidad']
            dispatch({
                type: "REPARTIR_MAZO",
                mazo: res,
                atributos: atributos,
                cartasJugador: cartasJugador,
                cartasAdversario: cartasAdversario,
                chat
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
    let cartaJugador = mazo[cartasJugador[0]];
    let cartaAdversario = mazo[cartasAdversario[0]];
    let cartasEmpate = props.cartasEmpate;
    let atributoAdversario = props.atributoAdversario; // ???????
    let atributos = props.atributos;
    let turnoJugador = props.turnoJugador;
    let chat = props.chat;


    if (!turnoJugador && (atributoEnJuego !== atributoAdversario)) {
        alert("Solo puedes jugar la categoria elegida por al adversario")
        return (dispatch) => dispatch({
            type: "NADA"
        })
    }else {
        console.log(cartaJugador.id)
        console.log(cartaAdversario.id)
        // Si ambos tienen cartas comunes el match se disputa por valor de atributos
        if ((cartaJugador.id !== 32) && (cartaJugador.id !== 33) && (cartaAdversario.id !== 32) && (cartaAdversario.id !== 33)){
            console.log("Cartas comunes")
            //////// Gano el jugador con cartas comunes por valor de atributo //////
            console.log(cartaJugador.atributos[atributoEnJuego].valor)
            console.log(cartaAdversario.atributos[atributoEnJuego].valor)
            if ( cartaJugador.atributos[atributoEnJuego].valor > cartaAdversario.atributos[atributoEnJuego].valor ){

                // Se asignan las cartas en disputa al mazo del jugador
                cartasJugador = [...cartasJugador, cartasJugador[0], cartasAdversario[0]];
                cartasJugador.shift();
                cartasAdversario.shift();
            
                // Si hay cartas en empate se asignan al final de array del jugador y se eliminan del empate
                if (cartasEmpate.length > 0) {
                    cartasEmpate.map(carta => cartasJugador = [...cartasJugador, carta])
                    cartasEmpate=[];            
                }

                // Si el jugador gano la mano Y gano partida
                if (cartasAdversario.length <= 0) {

                    return (dispatch) => dispatch ({
                        type: "PARTIDA_JUGADOR",
                        cartasJugador: cartasJugador,
                        cartasAdversario: cartasAdversario,
                        chat: chat                    
                    })
                }else {
                    // Si el jugador solo gano la mano
                    return (dispatch) => dispatch ({
                        type: "GANO_JUGADOR",
                        cartasJugador: cartasJugador,
                        cartasAdversario: cartasAdversario,
                        chat: chat
                    })                    
                }     
            
            /////// Gano el adversario con cartas comunes por valor de atributo  /////
            }else if ( cartaAdversario.atributos[atributoEnJuego].valor > cartaJugador.atributos[atributoEnJuego].valor ){

                // Se asignan las cartas en disputa al mazo del adversario
                cartasAdversario = [...cartasAdversario, cartasAdversario[0], cartasJugador[0]];
                cartasAdversario.shift();
                cartasJugador.shift();

                // Si hay cartas en empate se asignan al final de array del adversario y se eliminan del empate
                if (cartasEmpate.length > 0) {
                    cartasEmpate.map(carta => cartasAdversario = [...cartasAdversario, carta])
                    cartasEmpate=[];            
                }

                // Si el adversario gano la mano Y gano partida
                if (cartasJugador.length <= 0) {
                    return (dispatch) => dispatch ({
                        type: "PARTIDA_ADVERSARIO",
                        cartasJugador: cartasJugador,
                        cartasAdversario: cartasAdversario,
                        chat: chat                    
                    })
                }else { 
                    // Si el adversario solo gano la mano elige atributo
                    // deberia chequear si las proximas cartas son especiales pero por ahora queda simple
                    ////////////// Debo chequear si la proxima carta es roja o amarilla

                    atributoAdversario = Math.floor(Math.random()*5); // Modificar a algo mas elaborado que un random
                    //valorAtributoAdversario = mazo[cartasAdversario[0]].atributos[atributoAdversario].valor
                    
                    // Chat chat = chatHandler(chat, "Adversario", atributos[atributoAdversario]+" "+valorAtributoAdversario+" (adv elije)");
                    
                    return (dispatch) => dispatch({
                        type: "GANO_ADVERSARIO",
                        cartasJugador: cartasJugador,
                        cartasAdversario: cartasAdversario,
                        atributoAdversario: atributoAdversario,
                        chat: chat
                    })
                }
                /////// Empate  /////
            }else {
                // Se quita la primera carta de cada jugador y se asignan al array de empate
                cartasEmpate = [...cartasEmpate, cartasJugador[0], cartasAdversario[0]];
                cartasJugador.shift();
                cartasAdversario.shift();
                
                ///////// CHAT  /////////
                chat = chatHandler(chat, "Dealer", "Empate!")
                
                // Si no es el turno del jugador el adversario elige atributo
                if (!turnoJugador){
                    atributoAdversario = Math.floor(Math.random()*5);
                    //valorAtributoAdversario = mazo[cartasAdversario[0]].atributos[atributoAdversario].valor

                    //chat = chatHandler(chat, "Adversario", atributos[atributoEnJuego]+" "+valorAtributoAdversario);

                    return (dispatch) => dispatch({
                        type: "EMPATE",
                        turnoJugador: turnoJugador,
                        atributoAdversario: atributoAdversario,
                        cartasJugador: cartasJugador,
                        cartasAdversario: cartasAdversario,
                        cartasEmpate: cartasEmpate,
                        chat: chat
                    })
                }else {

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
    }

}
    
    

/*
    let valorAtributoAdversario = props.cartaAdversario.atributos[atributoEnJuego].valor;

    
    
    // Cuando es el turno del adversario previene que el jugador elija otra catergoria
    if ( !turnoJugador && (atributoEnJuego !== atributoAdversario) && (atributoEnJuego !== 32) && (atributoEnJuego !== 33)){
        alert("Solo puedes jugar la categoria elegida por al adversario")
        return (dispatch) => dispatch({
            type: ""
        })
        return;

    }else {
        console.log("Atributo en juego: "+atributoEnJuego+" / Jug: "+valorAtributoJugador+" / Adv: "+valorAtributoAdversario)
        ///////// CHAT  /////////
        switch (atributoEnJuego) {
            case 32:
                chat = chatHandler(chat, "Jugador", "Carta Amarilla! (case 32)");
                chat = chatHandler(chat, "Dealer", "El Jugador gano la mano");
                break;
            case 33:
                chat = chatHandler(chat, "Jugador", "Carta Roja! (case 32)");
                chat = chatHandler(chat, "Dealer", "El Jugador gano la mano");
                break;
            default:
                chat = chatHandler(chat, "Jugador", atributos[atributoEnJuego]+" "+valorAtributoJugador+" (sw jug)");
                if (turnoJugador && cartaAdversario.id !== 32 && cartaAdversario.id !== 33) {chat = chatHandler(chat, "Adversario", atributos[atributoEnJuego]+" "+valorAtributoAdversario+" (sw jug)");}
        }

        
        ///////// GANO EL JUGADOR (por valor de atributo, por carta amarilla o por carta roja) /////////
        if ((valorAtributoJugador > valorAtributoAdversario || cartaJugador.id === 32 || cartaJugador.id === 33) && (cartaAdversario.id !== 32) && (cartaAdversario.id !== 33)){
            
            // Si hay cartas en empate se asignan al final de array del jugador y se eliminan del empate
            if (cartasEmpate.length > 0) {
                cartasEmpate.map(carta => cartasJugador = [...cartasJugador, carta])
                cartasEmpate=[];            
            }

            // Si el jugador gano con carta roja recibira del adversario sus ultimas dos cartas, la carta roja se saca de la partida
            if ( atributoEnJuego === 33 ) {
                console.log ("Jugador carta Roja")
                cartasJugador = [...cartasJugador, cartasAdversario[cartasAdversario.length-1], cartasAdversario[cartasAdversario.length-2]]
                cartasJugador.shift();
                cartasAdversario.shift();
                cartasAdversario.shift();

                // Si el jugador gano la mano Y gano partida
                if (cartasAdversario.length <= 0) {

                    return (dispatch) => dispatch ({
                        type: "PARTIDA_JUGADOR",
                        cartasJugador: cartasJugador,
                        cartasAdversario: cartasAdversario,
                        chat: chat                    
                    })
                }else {
                    // Si el jugador solo gano la mano
                    return (dispatch) => dispatch ({
                        type: "GANO_JUGADOR",
                        cartasJugador: cartasJugador,
                        cartasAdversario: cartasAdversario,
                        chat: chat
                    })
                }

            }else {

                // Si el jugador gano por valor de atributo o por carta amarilla, mueve las primeras cartas de ambos al final del array del jugador
                cartasJugador = atributoEnJuego === 32 ? [...cartasJugador, cartasAdversario[0]] : [...cartasJugador, cartasJugador[0], cartasAdversario[0]];
                cartasJugador.shift();
                cartasAdversario.shift();
                
                ///////// CHAT  /////////
                /*
                if (!turnoJugador){
                    chat = atributoEnJuego === 32 ? chatHandler(chat, "Jugador", "Carta Amarilla!") : chatHandler(chat, "Jugador", atributos[atributoEnJuego]+" "+valorAtributoJugador+" jug Am");
                }
                
                
                chat = chatHandler(chat, "Dealer", "El Jugador gano la mano")

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
        }

/////////////////// GANO EL ADVERSARIO (por valor de atributo, por carta amarilla o por carta roja) /////////
        if (valorAtributoJugador < valorAtributoAdversario || cartaAdversario.id === 33 || cartaAdversario.id === 32){
        
            // Si hay cartas en empate se asignan al final de array del Adversario y se eliminan del empate
            if (cartasEmpate.length > 0) {
                cartasEmpate.map(carta => cartasAdversario = [...cartasAdversario, carta])
                cartasEmpate=[];            
            }

            // Si gano por valor de atributo
            if ((valorAtributoJugador < valorAtributoAdversario && cartaAdversario.id !== 32) || (valorAtributoJugador < valorAtributoAdversario && cartaAdversario.id !== 33)){
                console.log("Adv gano por atributo con la carta nº"+cartaAdversario.id)

                cartasAdversario = [...cartasAdversario, cartasAdversario[0], cartasJugador[0]];
                cartasAdversario.shift();
                cartasJugador.shift();
                
                chat = chatHandler(chat, "Dealer", "El Adversario gano la mano");

                // Chequea si gano la partida y si despacha la accion
                if (cartasJugador.length <= 0) {
                    return (dispatch) => dispatch ({
                        type: "PARTIDA_ADVERSARIO",
                        cartasJugador: cartasJugador,
                        cartasAdversario: cartasAdversario,
                        chat: chat                    
                    })
                }else { // EL ADVERSARIO GANO LA MANO POR VALOR DE ATRIBUTO Y ELIJE ATRIBUTO
                        // deberia chequear si las proximas cartas son especiales pero por ahora queda simple
                        ////////////// chequeo proxima carta es roja o amarilla
                        console.log ("la proxima carta del adversario es la nº"+cartasAdversario[0])
                        switch (cartasAdversario[0]){
                            case 32 :
                                // Si la proxima carta es Amarilla
                                chat = chatHandler(chat, "Adversario", "Proxima carta Amarilla (adv elije)");
                                break;
                            case 33 :
                                chat = chatHandler(chat, "Adversario", "Proxima carta Roja (adv elije)");
                                // Si la proxima carta es Roja
                                break;
                            default :
                                atributoAdversario = Math.floor(Math.random()*5); // Modificar a algo mas elaborado que un random
                                valorAtributoAdversario = mazo[cartasAdversario[0]].atributos[atributoAdversario].valor
                                // Chat
                                chat = chatHandler(chat, "Adversario", atributos[atributoAdversario]+" "+valorAtributoAdversario+" (adv elije)");

                                return (dispatch) => dispatch({
                                    type: "GANO_ADVERSARIO",
                                    cartasJugador: cartasJugador,
                                    cartasAdversario: cartasAdversario,
                                    atributoAdversario: atributoAdversario,
                                    chat: chat
                                })
                        }
                }
            }

            // Si el adversario gano por carta ROJA (recibira del jugador sus ultimas dos cartas, la carta roja se saca de la partida)
            if ( cartaAdversario.id === 33 ) {
                console.log ("Adversario gano con carta Roja")
                cartasAdversario = [...cartasAdversario, cartasJugador[cartasJugador.length-1], cartasJugador[cartasJugador.length-2]]
                cartasAdversario.shift();
                cartasJugador.shift();
                cartasJugador.shift();
            
                ///////// CHAT  /////////
                chat = chatHandler(chat, "Adversario", "Carta Roja!");
                chat = chatHandler(chat, "Dealer", "El Adversario gano la mano");

                // Si el adversario gano la partida despacha la accion
                if (cartasJugador.length <= 0) {
                    return (dispatch) => dispatch ({
                        type: "PARTIDA_ADVERSARIO",
                        cartasJugador: cartasJugador,
                        cartasAdversario: cartasAdversario,
                        chat: chat                    
                    })
                }else { // NO GANO LA PARTIDA (si gano la mano por carta roja)
                    
                    // Chequea si la proxima carta es amarilla (el adversario no gano la partida pero gano la mano por carta roja)
                    // Si la proxima carta es amarilla gana la mano automaticamente, chequea si gano la partida, elije el proximo atributo y despacha la accion
                    if (cartasAdversario[0].id === 32){
                        console.log ("Adversario gano con carta Amarilla")
                        cartasAdversario = [...cartasAdversario, cartasJugador[0]];
                        cartasAdversario.shift();
                        cartasJugador.shift();

                        chat = chatHandler(chat, "Adversario", "Carta Amarilla!");
                        chat = chatHandler(chat, "Dealer", "El Adversario gano la mano");

                        // Chequea si el adversario gano la partida
                        if (cartasJugador.length <= 0) {
                            return (dispatch) => dispatch ({
                                type: "PARTIDA_ADVERSARIO",
                                cartasJugador: cartasJugador,
                                cartasAdversario: cartasAdversario,
                                chat: chat                    
                            })
                        }else {
                            // No gano la partida, por lo tanto elige atributo de la proxima mano y despacha la accion
                            let atributoAdversario = Math.floor(Math.random()*5); // Modificar a algo mas elaborado que un random
                            chat = chatHandler(chat, "Adversario", atributos[atributoAdversario]+" "+valorAtributoAdversario);

                            return (dispatch) => dispatch({
                                type: "GANO_ADVERSARIO",
                                cartasJugador: cartasJugador,
                                cartasAdversario: cartasAdversario,
                                atributoAdversario: atributoAdversario,
                                chat: chat
                            })
                        }
                    }else {
                        // La siguiente carta no es amarilla
                        // Elige atributo de la proxima mano
                        let atributoAdversario = Math.floor(Math.random()*5); // Modificar a algo mas elaborado que un random
                        valorAtributoAdversario = mazo[cartasAdversario[0]].atributos[atributoAdversario].valor

                        chat = chatHandler(chat, "Adversario", atributos[atributoAdversario]+" "+valorAtributoAdversario);

                        return (dispatch) => dispatch({
                        type: "GANO_ADVERSARIO",
                        cartasJugador: cartasJugador,
                        cartasAdversario: cartasAdversario,
                        atributoAdversario: atributoAdversario,
                        chat: chat
                        })
                    }
                }
            }

            // Si el adversario gano por carta amarilla (recibira del jugador su carta superior, la carta amarilla se saca de la partida)
            if ( cartaAdversario.id === 32 ) {
                console.log ("Adversario gano con carta Amarilla")
                cartasAdversario = [...cartasAdversario, cartasJugador[0]];
                cartasAdversario.shift();
                cartasJugador.shift();
                
                ///////// CHAT  /////////
                chat = chatHandler(chat, "Adversario", "Carta Amarilla!");
                chat = chatHandler(chat, "Dealer", "El Adversario gano la mano");

                // Si el adversario gano la partida despacha la accion
                if (cartasJugador.length <= 0) {
                    return (dispatch) => dispatch ({
                        type: "PARTIDA_ADVERSARIO",
                        cartasJugador: cartasJugador,
                        cartasAdversario: cartasAdversario,
                        chat: chat                    
                    })
                }else { // NO GANO LA PARTIDA (si gano la mano por carta amarilla)
                    
                    // Chequea si la proxima carta es roja (el adversario no gano la partida pero gano la mano por carta amarilla)
                    // Si la proxima carta es roja gana la mano automaticamente, chequea si gano la partida, elije el proximo atributo y despacha la accion
                    if (cartasAdversario[0].id === 33){
                        console.log ("Adversario gano con carta Roja")
                        cartasAdversario = [...cartasAdversario, cartasJugador[cartasJugador.length-1], cartasJugador[cartasJugador.length-2]]
                        cartasAdversario.shift();
                        cartasJugador.shift();
                        cartasJugador.shift();

                        chat = chatHandler(chat, "Adversario", "Carta Roja!");
                        chat = chatHandler(chat, "Dealer", "El Adversario gano la mano");

                        // Chequea si el adversario gano la partida
                        if (cartasJugador.length <= 0) {
                            return (dispatch) => dispatch ({
                                type: "PARTIDA_ADVERSARIO",
                                cartasJugador: cartasJugador,
                                cartasAdversario: cartasAdversario,
                                chat: chat                    
                            })
                        }else {
                            // La proxima carta no es roja, por lo tanto elije atributo
                            let atributoAdversario = Math.floor(Math.random()*5); // Modificar a algo mas elaborado que un random
                            chat = chatHandler(chat, "Adversario", atributos[atributoAdversario]+" "+valorAtributoAdversario);

                            return (dispatch) => dispatch({
                                type: "GANO_ADVERSARIO",
                                cartasJugador: cartasJugador,
                                cartasAdversario: cartasAdversario,
                                atributoAdversario: atributoAdversario,
                                chat: chat
                            })
                        }
                    }
                }
            }
        }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*            
        // Si gano SOLO por valor de atributo o por carta amarilla
        if (valorAtributoJugador < valorAtributoAdversario || cartaAdversario.id === 32 ){
            
            ///////// CHAT  /////////
            chat = cartaAdversario.id === 32 ? chatHandler(chat, "Adversario", "Carta Amarilla!") : chatHandler(chat, "Adversario", atributos[atributoEnJuego]+" "+valorAtributoAdversario);
            chat = chatHandler(chat, "Dealer", "El Jugador gano la mano")

            // El Adversario gano por valor de atributo o por carta amarilla. Se asignan cartas segun condicion
            cartasAdversario = cartaAdversario.id === 32 ? [...cartasAdversario, cartasJugador[0]] : [...cartasAdversario, cartasAdversario[0], cartasJugador[0]];
            cartasAdversario.shift();
            cartasJugador.shift();
            
            // Si el adversario gano partida 
            if (cartasJugador.length <= 0) {
                return (dispatch) => dispatch ({
                    type: "PARTIDA_ADVERSARIO",
                    cartasJugador: cartasJugador,
                    cartasAdversario: cartasAdversario,
                    chat: chat                    
                })
            }else {
                // Si la proxima carta le toca carta roja no elige y gana la mano automaticamente
                if (cartasAdversario[0].id === 33){
                    console.log ("Adversario carta Roja")
                    cartasAdversario = [...cartasAdversario, cartasJugador[cartasJugador.length-1], cartasJugador[cartasJugador.length-2]]
                    cartasAdversario.shift();
                    cartasJugador.shift();
                    cartasJugador.shift();

                    chat = chatHandler(chat, "Adversario", "Carta Roja!");
                    chat = chatHandler(chat, "Dealer", "El Adversario gano la mano");


                    ///// ACA HAY UN ERROR: LE TOCO CARTA ROJA POR ENDE GANA AUTOMATICAMENTE, CHEQUEA PARTIDA Y ELIJE LA PROXIMA MANO

                    return (dispatch) => dispatch({
                        type: "GANO_ADVERSARIO",
                        cartasJugador: cartasJugador,
                        cartasAdversario: cartasAdversario,
                        atributoAdversario: atributoAdversario,
                        chat: chat
                    })
                }else {
                    
                    // No gano por carta roja, elije atributo y dispara la accion
                    let atributoAdversario = Math.floor(Math.random()*5); // Modificar a algo mas elaborado que un random

                    chat = chatHandler(chat, "Adversario", atributos[atributoEnJuego]+" "+valorAtributoAdversario);
                    chat = chatHandler(chat, "Dealer", "El Jugador gano la mano")

                    return (dispatch) => dispatch({
                        type: "GANO_ADVERSARIO",
                        cartasJugador: cartasJugador,
                        cartasAdversario: cartasAdversario,
                        atributoAdversario: atributoAdversario,
                        chat: chat
                    })
                }
            }
        }

    }

/////////////////////// EMPATE ////////////////////
        if (valorAtributoJugador === valorAtributoAdversario){
            cartasEmpate = [...cartasEmpate, cartasJugador[0], cartasAdversario[0]];
            cartasJugador.shift();
            cartasAdversario.shift();
            
            ///////// CHAT  /////////
            chat = chatHandler(chat, "Dealer", "Empate!")

            if (!turnoJugador){
                atributoAdversario = Math.floor(Math.random()*5);
                valorAtributoAdversario = mazo[cartasAdversario[0]].atributos[atributoAdversario].valor

                chat = chatHandler(chat, "Adversario", atributos[atributoEnJuego]+" "+valorAtributoAdversario);

                return (dispatch) => dispatch({
                    type: "EMPATE",
                    turnoJugador: false,
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
*/



///////////// DEBUG ///////////////////

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
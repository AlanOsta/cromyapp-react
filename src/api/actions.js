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


    if (!turnoJugador && (atributoEnJuego !== atributoAdversario) && cartaJugador.id !== 32 && cartaJugador.id !== 33) {
        alert("Solo puedes jugar la categoria elegida por al adversario")
        return (dispatch) => dispatch({
            type: ""
        })
    }else {
        
        // Si ambos tienen cartas comunes el match se disputa por valor de atributos
        if ((cartaJugador.id !== 32) && (cartaJugador.id !== 33) && (cartaAdversario.id !== 32) && (cartaAdversario.id !== 33)){
            
            //// Chat ////
            chat = chatHandler(chat, "Jugador", atributos[atributoEnJuego]+" "+cartaJugador.atributos[atributoEnJuego].valor);
            if (turnoJugador){ chat = chatHandler(chat, "Adversario", atributos[atributoEnJuego]+" "+cartaAdversario.atributos[atributoEnJuego].valor)}
            
            //////// Gano el jugador con cartas comunes por valor de atributo //////
            if ( cartaJugador.atributos[atributoEnJuego].valor > cartaAdversario.atributos[atributoEnJuego].valor ){
                // Chat //
                chat = chatHandler(chat, "Dealer", "El jugador gana la mano");
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
                // Chat //
                chat = chatHandler(chat, "Dealer", "El adversario gana la mano");
                // Se asignan las cartas en disputa al mazo del adversario
                cartasAdversario = [...cartasAdversario, cartasAdversario[0], cartasJugador[0]];
                cartasAdversario.shift();
                cartasJugador.shift();

                // Si hay cartas en empate se asignan al final de array del adversario y se eliminan del empate
                if (cartasEmpate.length > 0) {
                    cartasEmpate.map(carta => cartasAdversario = [...cartasAdversario, carta])
                    cartasEmpate=[];            
                }

                // Chequea si gano partida
                if (cartasJugador.length <= 0) {
                    return (dispatch) => dispatch ({
                        type: "PARTIDA_ADVERSARIO",
                        cartasJugador: cartasJugador,
                        cartasAdversario: cartasAdversario,
                        chat: chat                    
                    })
                }else { 
                    // El adversario solo gano la mano pero todavia no despache la accion
                    // Si su siguiente carta es amarilla gana la mano automaticamente, recibe la primera carta del jugador y la carta amarrilla se quita del juego
                    if (cartasAdversario[0] === 32 ) {
                        // Chat //
                        chat = chatHandler(chat, "Adversario", "Amarilla!");
                        chat = chatHandler(chat, "Dealer", "El adversario gana la mano con carta amarilla");

                        cartasAdversario = [...cartasAdversario, cartasJugador[0]];
                        cartasAdversario.shift();
                        cartasJugador.shift();

                        // Chequea si gano partida
                        if (cartasJugador.length <= 0) {
                            return (dispatch) => dispatch ({
                                type: "PARTIDA_ADVERSARIO",
                                cartasJugador: cartasJugador,
                                cartasAdversario: cartasAdversario,
                                chat: chat 
                            })
                        }
                    }

                    // Si su siguiente carta es roja gana la mano automaticamente, recibe las dos ultimas cartas del jugador y la carta roja se quita del juego
                    if (cartasAdversario[0] === 33 ) {
                        // Chat //
                        
                        if (turnoJugador){ chat = chatHandler(chat, "Jugador", atributos[atributoEnJuego]+" "+cartaJugador.atributos[atributoEnJuego].valor)}
                        chat = chatHandler(chat, "Adversario", "Roja!");
                        chat = chatHandler(chat, "Dealer", "El adversario gana la mano con carta roja");
                        
                        cartasAdversario = [...cartasAdversario, cartasJugador[cartasJugador.length-1], cartasJugador[cartasJugador.length-2]]
                        cartasAdversario.shift();
                        cartasJugador.pop();
                        cartasJugador.pop();

                        // Chequea si gano partida
                        if (cartasJugador.length <= 0) {
                            return (dispatch) => dispatch ({
                                type: "PARTIDA_ADVERSARIO",
                                cartasJugador: cartasJugador,
                                cartasAdversario: cartasAdversario,
                                chat: chat 
                            })
                        }                        
                    }

                    // Como no tuvo cartas especiales el adversario elige el proximo atributo
                    atributoAdversario = Math.floor(Math.random()*5); // Modificar a algo mas elaborado que un random
                    // Chat //                    
                    chat = chatHandler(chat, "Adversario", atributos[atributoAdversario]+" "+mazo[cartasAdversario[0]].atributos[atributoAdversario].valor);
                                        
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
                    chat = chatHandler(chat, "Adversario", atributos[atributoAdversario]+" "+mazo[cartasAdversario[0]].atributos[atributoAdversario].valor);

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
        // Si el jugador tiene carta amarilla
        if (cartaJugador.id === 32) {
            // Chat //
            chat = chatHandler(chat, "Jugador", "Amarilla!");
            chat = chatHandler(chat, "Dealer", "El jugador gana la mano con carta amarilla");

            cartasJugador = [...cartasJugador, cartasAdversario[0]];
            cartasJugador.shift();
            cartasAdversario.shift();


            // Si hay cartas en empate se asignan al final de array del jugador y se eliminan del empate
            if (cartasEmpate.length > 0) {
                cartasEmpate.map(carta => cartasJugador = [...cartasJugador, carta])
                cartasEmpate=[];            
            }

            // Chequea si gano partida
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

        }

        // Si el jugador tiene carta roja
        if (cartaJugador.id === 33) {
            // Chat //
            chat = chatHandler(chat, "Jugador", "Roja!");
            chat = chatHandler(chat, "Dealer", "El jugador gana la mano con carta roja");

            cartasJugador = [...cartasJugador, cartasAdversario[cartasAdversario.length-1], cartasAdversario[cartasAdversario.length-2]]
            cartasJugador.shift();
            cartasAdversario.pop();
            cartasAdversario.pop();

            // Si hay cartas en empate se asignan al final de array del jugador y se eliminan del empate
            if (cartasEmpate.length > 0) {
                cartasEmpate.map(carta => cartasJugador = [...cartasJugador, carta])
                cartasEmpate=[];            
            }

            // Chequea si gano partida
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

        }

        // Si el adversario tiene carta amarilla
        if (cartaAdversario.id === 32) {
            // Chat //
            chat = chatHandler(chat, "Adversario", "Amarilla!");
            chat = chatHandler(chat, "Dealer", "El adversario gana la mano con carta amarilla");

            cartasAdversario = [...cartasAdversario, cartasJugador[0]];
            cartasAdversario.shift();
            cartasJugador.shift();

            // Si hay cartas en empate se asignan al final de array del adversario y se eliminan del empate
            if (cartasEmpate.length > 0) {
                cartasEmpate.map(carta => cartasAdversario = [...cartasAdversario, carta])
                cartasEmpate=[];            
            }

            // Chequea si gano partida
            if (cartasJugador.length <= 0) {
                return (dispatch) => dispatch ({
                    type: "PARTIDA_ADVERSARIO",
                    cartasJugador: cartasJugador,
                    cartasAdversario: cartasAdversario,
                    chat: chat 
                })
            }

            // El adversario gano la partida y elige atributo
            atributoAdversario = Math.floor(Math.random()*5); // Modificar a algo mas elaborado que un random
            // Chat //                    
            chat = chatHandler(chat, "Adversario", atributos[atributoAdversario]+" "+mazo[cartasAdversario[0]].atributos[atributoAdversario].valor);
                                        
            return (dispatch) => dispatch({
                    type: "GANO_ADVERSARIO",
                    cartasJugador: cartasJugador,
                    cartasAdversario: cartasAdversario,
                    atributoAdversario: atributoAdversario,
                    chat: chat
            })
        }

        // Si el adversario tiene carta roja
        if (cartaAdversario.id === 33) {
            // Chat //
            chat = chatHandler(chat, "Jugador", "Roja!");
            chat = chatHandler(chat, "Adversario", "Roja!");
            chat = chatHandler(chat, "Dealer", "El adversario gana la mano con carta roja");
            
            cartasAdversario = [...cartasAdversario, cartasJugador[cartasJugador.length-1], cartasJugador[cartasJugador.length-2]]
            cartasAdversario.shift();
            cartasJugador.pop();
            cartasJugador.pop();

            // Si hay cartas en empate se asignan al final de array del adversario y se eliminan del empate
            if (cartasEmpate.length > 0) {
                cartasEmpate.map(carta => cartasAdversario = [...cartasAdversario, carta])
                cartasEmpate=[];            
            }

            // Chequea si gano partida
            if (cartasJugador.length <= 0) {
                return (dispatch) => dispatch ({
                    type: "PARTIDA_ADVERSARIO",
                    cartasJugador: cartasJugador,
                    cartasAdversario: cartasAdversario,
                    chat: chat 
                })
            }

            // El adversario gano la partida y elige atributo
            atributoAdversario = Math.floor(Math.random()*5); // Modificar a algo mas elaborado que un random
            // Chat //                    
            chat = chatHandler(chat, "Adversario", atributos[atributoAdversario]+" "+mazo[cartasAdversario[0]].atributos[atributoAdversario].valor);
                                        
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
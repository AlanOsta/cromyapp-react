const estadoInicial = {
    mazo: [],
    atributos: [],
    cartasJugador : [],
    cartasAdversario : [],
    turnoJugador : true ,
    cartaJugador : 1,
    cartaAdversario : 2
};

const reducer = (estadoPrevio = estadoInicial, action) => {
    switch(action.type){

        case "REPARTIR_MAZO" :
            return {...estadoPrevio,
              mazo: action.mazo,
              atributos: action.atributos, 
              cartasJugador: action.cartasJugador, 
              cartasAdversario: action.cartasAdversario,
              cartaJugador: action.mazo[action.cartasJugador[0]],              
              cartaAdversario: action.mazo[action.cartasAdversario[0]]
             }

        case "JUGADOR_JUEGA" :
            console.log("reducer");
            return {...estadoPrevio,
                reducer: "reducer"
            }

        default :
            return estadoPrevio;
    }
}

export default reducer;
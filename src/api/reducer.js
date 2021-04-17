const estadoInicial = {
    mazo: [],
    cartasJugador : [],
    cartasAdversario : [],
    cartaJugador : {
      "id": 0,
      "lCarta": "",
      "nCarta": "",
      "nombre": "",
      "altura": 0,
      "peso": 0,
      "fuerza": 0,
      "ganadas": 0,
      "velocidad": 0,
      "ruta": ""
    },
    cartaAdversario : {
      "id": 2,
      "lCarta": "A",
      "nCarta": "2",
      "nombre": "Flash",
      "altura": 1.96,
      "peso": 90,
      "fuerza": 840,
      "ganadas": 900,
      "velocidad": 800000,
      "ruta": "./assets/img/a2.png"
    }
};

const reducer = (estadoPrevio = estadoInicial, action) => {
    switch(action.type){

        case "REPARTIR_MAZO" :
            return {...estadoPrevio, 
              cartasJugador: action.cartasJugador, 
              cartasAdversario: action.cartasAdversario,
              cartaJugador: action.cartaJugador,
              cartaAdversario: action.cartaAdversario
             };

        default :
            return estadoPrevio;
    }
}

export default reducer;
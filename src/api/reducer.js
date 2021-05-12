const estadoInicial = {
    mazo: [],
    atributos: [],
    cartasJugador : [],
    cartasAdversario : [],
    turnoJugador : true ,
    cartaJugador : {
        "id": null,
        "lCarta": "",
        "nCarta": null,
        "nombre": "",
        "ruta": "",
        "atributos": [
          {
            "id": 0,
            "nombre": "",
            "valor": null
          },
          {
            "id": 1,
            "nombre": "",
            "valor": null
          },
          {
            "id": 2,
            "nombre": "",
            "valor": null
          },
          {
            "id": 3,
            "nombre": "",
            "valor": null
          },
          {
            "id": 4,
            "nombre": "",
            "valor": null
          }
        ]
      },
    cartaAdversario : {}
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
            console.log("reducer "+action.atributo+" "+action.valor);
            return {...estadoPrevio,
                reducer: "reducer"
            }

        default :
            return estadoPrevio;
    }
}

export default reducer;
const estadoInicial = {
    mazo: [],
    atributos: [],
    cartasJugador: [],
    cartasAdversario: [],
    cartasEmpate: [],
    turnoJugador: true ,    
    atributoAdversario: null,  
    cartaJugador: {
        "id": null,
        "lCarta": "",
        "nCarta": null,
        "nombre": "",
        "ruta": "",
        "atributos": [
          {
            "id": 0,
            "nombre": "Atr1",
            "valor": null
          },
          {
            "id": 1,
            "nombre": "Atr2",
            "valor": null
          },
          {
            "id": 2,
            "nombre": "Atr3",
            "valor": null
          },
          {
            "id": 3,
            "nombre": "Atr4",
            "valor": null
          },
          {
            "id": 4,
            "nombre": "Atr5",
            "valor": null
          }
        ]
      },
    cartaAdversario: {},
    chatJugador: [],
    chatAdversario: []
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
            console.log("reducer "+action.atributo);
            return {...estadoPrevio,
              atributoEnJuego: action.atributo              
            }
        
        case "GANO_JUGADOR" :
            console.log("reducer gano jugador")
            
            return{...estadoPrevio,
              atributoAdversario: null,
              turnoJugador: true,
              cartasJugador: action.cartasJugador,
              cartasAdversario: action.cartasAdversario,
              cartasEmpate: [],
              cartaJugador: estadoPrevio.mazo[action.cartasJugador[0]],
              cartaAdversario: estadoPrevio.mazo[action.cartasAdversario[0]],
              chatJugador: action.chatJugador
            }
        
        case "GANO_ADVERSARIO" :
          console.log("reducer gano adversario")
          
          return{...estadoPrevio,
            turnoJugador: false,
            atributoAdversario: action.atributoAdversario,
            cartasJugador: action.cartasJugador,
            cartasAdversario: action.cartasAdversario,
            cartasEmpate: [],
            cartaJugador: estadoPrevio.mazo[action.cartasJugador[0]],              
            cartaAdversario: estadoPrevio.mazo[action.cartasAdversario[0]]
          }
        
        case "EMPATE" :
          console.log("empate")
          
          return{...estadoPrevio,
            atributoAdversario: action.turnoJugador ? null : action.atributoAdversario,
            cartasJugador: action.cartasJugador,
            cartasAdversario: action.cartasAdversario,
            cartasEmpate: action.cartasEmpate,
            cartaJugador: estadoPrevio.mazo[action.cartasJugador[0]],              
            cartaAdversario: estadoPrevio.mazo[action.cartasAdversario[0]]
          }

        default :
            return estadoPrevio;
    }
}

export default reducer;
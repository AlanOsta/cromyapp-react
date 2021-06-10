const estadoInicial = {
    debug: true,
    ganador: null,
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
    chat: []    
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

        case "GANO_JUGADOR" :
            
            return{...estadoPrevio,
              atributoAdversario: null,
              turnoJugador: true,
              cartasJugador: action.cartasJugador,
              cartasAdversario: action.cartasAdversario,
              cartasEmpate: [],
              cartaJugador: estadoPrevio.mazo[action.cartasJugador[0]],
              cartaAdversario: estadoPrevio.mazo[action.cartasAdversario[0]],
              chat: action.chat
            }
        
        case "GANO_ADVERSARIO" :
                
          return{...estadoPrevio,
            turnoJugador: false,
            atributoAdversario: action.atributoAdversario,
            cartasJugador: action.cartasJugador,
            cartasAdversario: action.cartasAdversario,
            cartasEmpate: [],
            cartaJugador: estadoPrevio.mazo[action.cartasJugador[0]],              
            cartaAdversario: estadoPrevio.mazo[action.cartasAdversario[0]],
            chat: action.chat
          }
        
        case "EMPATE" :
          
          return{...estadoPrevio,
            atributoAdversario: action.turnoJugador ? null : action.atributoAdversario,
            cartasJugador: action.cartasJugador,
            cartasAdversario: action.cartasAdversario,
            cartasEmpate: action.cartasEmpate,
            cartaJugador: estadoPrevio.mazo[action.cartasJugador[0]],              
            cartaAdversario: estadoPrevio.mazo[action.cartasAdversario[0]],
            chat: action.chat
          }

        case "PARTIDA_JUGADOR" :
          
          return{...estadoPrevio,
            atributoAdversario: null,
            turnoJugador: true,
            cartasJugador: action.cartasJugador,
            cartasAdversario: action.cartasAdversario,
            cartasEmpate: [],
            cartaJugador: estadoPrevio.mazo[action.cartasJugador[0]],
            cartaAdversario: estadoPrevio.mazo[action.cartasAdversario[0]],
            chat: action.chat,
            ganador: "Jugador"
          }

          case "PARTIDA_ADVERSARIO" :
                
          return{...estadoPrevio,
            turnoJugador: false,
            atributoAdversario: action.atributoAdversario,
            cartasJugador: action.cartasJugador,
            cartasAdversario: action.cartasAdversario,
            cartasEmpate: [],
            cartaJugador: estadoPrevio.mazo[action.cartasJugador[0]],              
            cartaAdversario: estadoPrevio.mazo[action.cartasAdversario[0]],
            chat: action.chat,
            ganador: "Adversario"
          }

          case "SUMAR_CARTA" :
          return{...estadoPrevio,
            cartasJugador: action.cartasJugador,
            cartasAdversario: action.cartasAdversario
          }

          case "RESTAR_CARTA" :
          return{...estadoPrevio,
            cartasJugador: action.cartasJugador,
            cartasAdversario: action.cartasAdversario
          }

        default :
            return estadoPrevio;
    }
}

export default reducer;
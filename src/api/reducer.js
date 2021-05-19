const estadoInicial = {
    mazo: [],
    atributos: [],
    cartasJugador : [],
    cartasAdversario : [],
    turnoJugador : true ,
    atributoEnJuego : null,
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
            console.log("reducer "+action.atributo);
            return {...estadoPrevio,
              atributoEnJuego: action.atributo,
              turnoJugador: false
            }
        
        case "GANO_JUGADOR" :
            console.log("reducer gano jugador")
            
            return{...estadoPrevio,
              turnoJugador: true,
              cartasJugador: action.cartasJugador,
              cartasAdversario: action.cartasAdversario,
              cartaJugador: action.cartasJugador[0],              
              cartaAdversario: action.action.cartasAdversario[0]
            }
        
        case "GANO_ADVERSARIO" :
          console.log("reducer gano adversario")
          
          return{...estadoPrevio,
            turnoJugador: false,
            cartasJugador: action.cartasJugador,
            cartasAdversario: action.cartasAdversario,
            cartaJugador: action.cartasJugador[0],              
            cartaAdversario: action.action.cartasAdversario[0]
          }


        default :
            return estadoPrevio;
    }
}

export default reducer;
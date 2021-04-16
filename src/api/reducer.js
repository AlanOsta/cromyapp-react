const estadoInicial = {
    mazo: [],
    cartasJugador : [],
    cartasIA : [],
    cartaJugador : {
      "id": 1,
      "lCarta": "A",
      "nCarta": "1",
      "nombre": "Superman",
      "altura": 2.05,
      "peso": 110,
      "fuerza": 2000,
      "ganadas": 990,
      "velocidad": 400,
      "ruta": "./img/a1.png"
    },
    cartaIA : {
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

        default :
            return estadoPrevio;
    }
}

export default reducer;
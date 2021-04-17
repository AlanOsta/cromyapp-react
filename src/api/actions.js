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



//export const repartirMazo = () => ({type: "REPARTIR_MAZO"});

export const repartirMazo = () => {
    let cartasJugador = [];
    let cartasAdversario = [];

    /*
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "./lib/superAmigosDB.json"); 
    ajax.addEventListener("load", repartirMazo);
    ajax.send();
    let mazo = JSON.parse(this.responseText);
    */

    let i;
    for (cartasJugador=[], i=0 ; i<34 ; ++i) cartasJugador[i]=i;
    cartasJugador = shuffle(cartasJugador);
    cartasAdversario = cartasJugador.splice(16, 17);
    console.log(cartasJugador);
    console.log(cartasAdversario);
    
    return {
        type: "REPARTIR_MAZO",
        cartasJugador : cartasJugador,
        cartasAdversario : cartasAdversario,
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
    }
}
    
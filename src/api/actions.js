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
    let i;
    for (cartasJugador=[], i=0 ; i<34 ; ++i) cartasJugador[i]=i;
    cartasJugador = shuffle(cartasJugador);
    cartasAdversario = cartasJugador.splice(16, 17);
    
    return (dispatch) => {
        fetch("http://localhost:3000/cartas")
        .then (res=>res.json())
        .then (res=>{
            
            dispatch({
                type: "REPARTIR_MAZO",
                mazo: res,
                atributos: Object.keys(res[0]),
                cartasJugador: cartasJugador,
                cartasAdversario: cartasAdversario
            });            
        })
        .catch(err=>{
            console.log(err);
        });
    };
};

export const jugadorJuega = (atributo) => {
    console.log ("actions "+atributo)
        
    return {
        type : "JUGADOR_JUEGA",
        atributo: atributo
    }    
}

export const ganoJugador = (cartasJugador, cartasAdversario) => {
    console.log ("actions: ganoJugador")
    return {
        type: "GANO_JUGADOR",
        cartasJugador: cartasJugador,
        cartasAdversario: cartasAdversario
    }
}

export const ganoAdversario = (cartasJugador, cartasAdversario) => {
    console.log ("actions: ganoAdversario")
    return {
        type: "GANO_ADVERSARIO",
        cartasJugador: cartasJugador,
        cartasAdversario: cartasAdversario
    }
}
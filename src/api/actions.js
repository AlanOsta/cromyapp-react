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
    let mazo;  
    let i;
    for (cartasJugador=[], i=0 ; i<34 ; ++i) cartasJugador[i]=i;
    cartasJugador = shuffle(cartasJugador);
    cartasAdversario = cartasJugador.splice(16, 17);
    
    return (dispatch) =>  {
        mazo = fetch("http://localhost:4000/cartas");
        mazo
        .then (res=>res.json())
        .then (res=>{
            dispatch({
                type : "REPARTIR_MAZO",
                mazo : res,
                cartasJugador : cartasJugador,
                cartasAdversario : cartasAdversario

            })
        })  
    }
}
    
import { connect } from "react-redux";

export const Dealer = (props) => {
    
    return (
        <div className="dealer">
            <span>Cartas jugador ({props.cartasJugador.length}) : {props.cartasJugador}</span>
            <br/>
            <span>Cartas adversario ({props.cartasAdversario.length}) : {props.cartasAdversario}</span>
            <br/>
            <span>Cartas en empate ({props.cartasEmpate.length}) : {props.cartasEmpate}</span>            
        </div>
        );   
}

const mapStateToProps = store => ({
    cartasJugador: store.cartasJugador.map(num => num+","),
    cartasAdversario: store.cartasAdversario.map(num => num+","),
    cartasEmpate: store.cartasEmpate.map(num => num+",")   
});

export default connect(mapStateToProps)(Dealer);

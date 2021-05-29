import { connect } from "react-redux";

const ChatJugador = (props) => {

    return(
        <div className="chat">
            {props.chatJugador}
        </div>  
    )
}

const mapStateToProps = store => ({
    chatJugador: store.chatJugador.map((linea, i) => <div key={linea+i}>{linea}</div>)   
});

export default connect(mapStateToProps)(ChatJugador)
import { connect } from "react-redux";

const ChatAdversario = (props) => {

    return(
        <div className="chat">
            {props.chatAdversario}
        </div>  
    )
}

const mapStateToProps = store => ({
    chatAdversario: store.chatAdversario.map((linea, i) => <div key={linea+i}>{linea}</div>)   
});

export default connect(mapStateToProps)(ChatAdversario)
import { connect } from "react-redux";
import './Chat.css'

const Chat = (props) => {

    return(
        <div className="chat">
            {props.chat}
        </div>  
    )
}

const mapStateToProps = store => ({
    chat: store.chat.map((linea, i) => 
    <div key={linea.mensaje+i} className={linea.nombre}>
        {/* <div>{linea.nombre}:</div> */}
        <div>{linea.mensaje}</div>
    </div>
    
    )});

export default connect(mapStateToProps)(Chat)
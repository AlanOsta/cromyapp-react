import './Adversario.css';
import back from '../../img/back.png'
import backpila from '../../img/backpila.png'
import { connect } from "react-redux"

const Adversario = (props) => {

    let adversarioCard = 
            <div className="adversario">
                {props.cartasAdversario.map( carta => <img src={backpila} key={"pila"+carta} alt="Adversario" className="img-adversario-pila"></img> )}
                    
                <img src={back} alt="Adversario" className="img-adversario"></img>
            </div>

    return (adversarioCard)
}

const mapStateToProps = store => ({
    cartasAdversario: store.cartasAdversario
});

export default connect(mapStateToProps, null)(Adversario);

        
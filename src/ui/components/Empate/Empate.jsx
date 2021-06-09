// import { match } from "../../../api/actions"
import { connect } from "react-redux"
import mazoImg from '../../img/sa.png'
import './Empate.css'

const Empate = (props) => {

    return (
        <div className="empate-container">
            <div>
                <h3>Cartas en empate:</h3>
            </div>
            <div className="cartas-empate-container">
                {props.cartasEmpate.map(id => 
                    <div className="card-empate" key={"cartaEmpate"+id}>
                        <div className="cardHeader-empate">
                            <div>{props.mazo[id].lCarta}</div>
                            <div><img src={mazoImg} alt="Imagen del Mazo"></img></div>
                            <div>{props.mazo[id].nCarta}</div>
                        </div>
                        <div className="img-container-empate">
                            <img src={process.env.PUBLIC_URL + props.mazo[id].ruta} alt="Imagen del personaje"></img>
                        </div>
                        <div className="nombre">
                            {props.mazo[id].nombre}
                        </div>
                        <div className="atributos-empate">
                            {props.mazo[id].atributos.map(atributo => 
                                <div key={atributo.nombre}>
                                    <div>{atributo.nombre}</div>
                                    <div>{atributo.valor}</div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = store => ({
    mazo: store.mazo,
    cartasEmpate: store.cartasEmpate    
});

export default connect(mapStateToProps, null)(Empate);




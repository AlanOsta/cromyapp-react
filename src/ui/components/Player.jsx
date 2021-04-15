
import './Player.css';
import sa from '../img/sa.png'
import batman from '../img/b1.png'

function Player(){

    let playerCard = <div className="card">
                        <div className="cardHeader">
                            <div>B</div>
                            <div><img src={sa} alt="Super Amigos"></img></div>
                            <div>1</div>
                        </div>

                        <div className="img"><img src={batman} id="imagen" alt="Imagen del personaje"></img></div>
                        <div className="nombre">Batman</div>
                        <div className="atributos">
                            <div id="altura">
                                <div>Altura</div>
                                <div>2,03</div>
                            </div>
                            <div id="peso">
                                <div>Peso</div>
                                <div>106</div>
                            </div>
                            <div id="fuerza">
                                <div>Fuerza</div>
                                <div>500</div>
                            </div>
                            <div id="ganadas">
                                <div>Peleas Ganadas</div>
                                <div>966</div>
                            </div>
                            <div id="velocidad">
                                <div>Velocidad</div>
                                <div>85</div>
                            </div>
                        </div>             
                    </div>

    return (playerCard);
}

export default Player;
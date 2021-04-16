import Player from "../Player/Player";
import { connect } from "react-redux";
import {repartirMazo} from "../../../api/actions"

const Tablero = ({repartirMazo}) => {
    return (
        <div>
            <Player />
            {/* <button onClick={repartirMazo}>Repartir</button> */}

        </div>
    );
}

/*const mapStateToProps = () => {};

const mapDispatchToProps = { repartirMazo };*/

export default connect()(Tablero);
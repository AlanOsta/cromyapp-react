import Tablero from "./ui/components/Tablero/Tablero"
import { Provider } from "react-redux"
import store  from "./api/store"

function App() {
  return (
    <Provider store={store}>
      <Tablero />
    </Provider>
  );
}

export default App;

  import './App.css';
import Titulo from './Titulo/Titulo';
import Imagen from './Imagen/Imagen';
import CardExplample from './Card/CardExplample';
import UncontrolledExample from './Carrousel/Carrousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Titulo />
      <Imagen />
      <CardExplample /> 
      <UncontrolledExample/>
    </>
  );
}

export default App;

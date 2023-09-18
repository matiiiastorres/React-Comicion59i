import './App.css';
import Titulo from './Titulo/Titulo';
import Imagen from './Imagen/Imagen';
import CardExplample from './Card/CardExplample';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login/Login';
import FormLoginValidation from './Login/FormLoginValidation';



function App() {
  return (
    <>
      <Login/>
      <Titulo />
      <Imagen />
      <CardExplample />
    </>
  );
}

export default App;

  import './App.css';
import Titulo from './Titulo/Titulo';

import Navbar from './Navbar/Navbar';
import UncontrolledExample from './Carrousel/Carrousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login/Login';
import FormLoginValidation from './Login/FormLoginValidation';



function App() {
  return (
    <>

      <Login/>

      <Navbar />

      <Titulo />

      <UncontrolledExample/>
      

    </>
  );
}

export default App;

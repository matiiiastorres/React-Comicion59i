  import './App.css';
import Titulo from './Titulo/Titulo';

import Navbar from './Navbar/Navbar';
import UncontrolledExample from './Carrousel/Carrousel';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Titulo />

      <UncontrolledExample/>
      

    </>
  );
}

export default App;

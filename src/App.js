import './App.css';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
import ListadoCitas from './components/ListadoCitas';
import { useState } from 'react';

function App(){
  const[citas, setCitas] = useState([{
    mascota: "Nina",
    owner: "Martin",
    fecha: "2021-08-05",
    hora: "08:20",
    sintomas: "Le duele la pierna"
  }])
}

function App() {
  return (
    <Formulario setCitas={setCitas}/>   
  );
}

export default App;

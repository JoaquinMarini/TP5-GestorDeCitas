import Formulario from './components/Formulario';
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

  return (
    <>
      <div className="text-white bg-gradient-to-bl from-[#A446B2] to-[#FF0066] min-h-[100vh]">
        <h1 className='text-4xl font-bold text-center tracking-tighter py-8'>ADMINISTRADOR DE PACIENTES</h1>
        <div className="flex justify-around flex-col md:flex-row"></div>
          <Formulario setCitas={setCitas}/>   
          <ListadoCitas citas={citas} setCitas={setCitas}/>
      </div>
    </>
  
  );
}
export default App;
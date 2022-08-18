import Formulario from './components/Formulario';
import ListadoCitas from './components/ListadoCitas';
import { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import "./App.css"

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
      <Container>
        <h1 className='titulo'>ADMINISTRADOR DE PACIENTES</h1>
          <Row className='justify-content-center'>
            <Col  md lg='5'>
              <Formulario className="formulario" setCitas={setCitas}/>
            </Col>
            <Col md lg='5'>
              <ListadoCitas className = "listado" citas={citas} setCitas={setCitas}/>
            </Col>
          </Row>
      </Container>
    </>
  
  );
}
export default App;

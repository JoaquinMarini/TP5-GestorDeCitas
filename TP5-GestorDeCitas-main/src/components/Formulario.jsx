import { useState } from 'react';
import {Button, Form} from 'react-bootstrap';

export default function Formulario( {setCitas} ){
    const [mascota, setMascota] = useState("")
    const [dueño, setDueño] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [sintomas, setSintomas] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();
      setCitas(prev => [...prev, {
          mascota,
          dueño,
          fecha,
          hora,
          sintomas
      }])
      setMascota("")
      setDueño("")
      setFecha("")
      setHora("")
      setSintomas("")
  }


function onSubmit(e) {
    e.preventDefault()
}

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="Mascota">
        <Form.Label>Nombre Mascota </Form.Label>
        <Form.Control type="text" placeholder="Nombre Mascota " value={mascota} onChange={e => setMascota(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Dueño">
        <Form.Label>Nombre Dueño</Form.Label>
        <Form.Control type="text" placeholder="Nombre Dueño" value={dueño} onChange={e => setDueño(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Fecha">
        <Form.Label>Fecha</Form.Label>
        <Form.Control type="date" label="" value={fecha} onChange={e => setFecha(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Hora">
        <Form.Label>Hora</Form.Label>
        <Form.Control type="time" placeholder="" value={hora} onChange={e => setHora(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Sintomas">
        <Form.Label>Sintomas</Form.Label>
        <Form.Control type="text" placeholder="" value={sintomas} onChange={e => setSintomas(e.target.value)}/>
      </Form.Group>


      <Button variant="primary" type="submit">
        AGREGAR CITA
      </Button>
    </Form>
  );
}


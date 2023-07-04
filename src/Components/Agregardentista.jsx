import { useState } from "react"
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios"


export const AgregarDentista = () => {

  
  let navigate = useNavigate()

  const [id_dentista] = useState(0)
  const [nombre,setNombre] = useState("")
  const [apellido,setApellido] = useState("")
  const [dni,setDni] = useState()
  const [matricula,setMatricula] = useState (0)
  const [sexo, setSexo] = useState ("")
  const [turno, setTurno] = useState ("")
  const [idUsuario, setIdUsuario] = useState (0)
 

  const handleAgregar =()=>{
    Axios.post("http://localhost:8000/dentista/registrar",{
      id_dentista: id_dentista,
      nombre: nombre,
      apellido: apellido,
      dni: dni,
      matricula: matricula,
      sexo: sexo,
      turno:turno,
      iduser: idUsuario

    }).then(()=>{
      alert("Dentista agregado")
      navigate('/dentistas',{ replace: true })
    })
  }
 

  return (
      
      <div className="container p-5">
          
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control placeholder="Apellido" onChange={(e) => setApellido(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>DNI</Form.Label>
              <Form.Control placeholder="DNI" onChange={(e) => setDni(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>N° Matricula</Form.Label>
              <Form.Control placeholder="Ingrese su n° de Matricula" onChange={(e) => setMatricula(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Sexo</Form.Label>
              <Form.Select onChange={(e) => setSexo(e.target.value)}>
                <option value="seleccion"> seleccione un campo </option>
                <option value="Hombre"> Hombre </option>
                <option value="Mujer">Mujer</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Turno</Form.Label>
              <Form.Select onChange={(e) => setTurno(e.target.value)}>
                <option value="Mañana"> Mañana </option>
                <option value="Tarde"> Tarde </option>
                <option value="Noche"> Noche </option>
              </Form.Select>
              
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Id Usuario</Form.Label>
              <Form.Control placeholder="Id Usuario" onChange={(e) => setIdUsuario(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">

            <Button variant="success" onClick={handleAgregar}>Agregar</Button>

            </Form.Group>
            
                  
      </div>
  )
}

export default AgregarDentista
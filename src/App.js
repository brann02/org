import { useState } from 'react';
import { v4 as uuid} from "uuid"
import './App.css';
import Header from "./componentes/Header/Header"; 
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App(){
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
    id: uuid(),
    equipo:"Front End",
    foto:"https://github.com/brann02.png",
    nombre: "Brando Mendez",
    puesto: "instructor",
    fav : true

  },
  { 
    id: uuid(),
    equipo:"Programacion",
    foto:"https://github.com/brann02.png",
    nombre: "Brando Mendez",
    puesto: "instructor",
    fav : false

  },
  {

  }
])

const [equipos, actualizarEquipos] = useState([
  {
    id: uuid(),
    titulo: "Programacion",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9"

  },
{
  id: uuid(),
  titulo: "Front End",
  colorPrimario: "#82CFFA",
  colorSecundario: "#E8F8FF"
},
{
  id: uuid(),
  titulo: "Data Science",
  colorPrimario: "#A6D157",
  colorSecundario: "#F0F8E2"
},
{    
  id: uuid(),
  titulo: "Devops",
  colorPrimario: "#E06B69",
  colorSecundario: "#FDE7E8"
},
{
  id: uuid(),
  titulo: "UX y Diseño",
  colorPrimario: "#DB6EBF",
  colorSecundario: "#FAE9F5"
},
{
  id: uuid(),
  titulo: "Movil",
  colorPrimario: "#FFBA05",
  colorSecundario: "#FFF5D9"
},
{
  id: uuid(),
  titulo: "Innovacion y Gestion",
  colorPrimario: "#FF8A29",
  colorSecundario: "#FFEEDF"
},

])

  //Ternario --> condiciion ? seMuestra : noSeMuestra

  const cambiarMostrar  = () => {
    actualizarMostrar(!mostrarFormulario)
  }
//Registrar Colaborador
const registrarColaborador = (colaborador) =>{
  console.log("Nuevo colaborador", colaborador);
 //Spread Operator
  actualizarColaboradores([...colaboradores, colaborador])

}

//Eliminar Colaborador
const eliminarColaborador = (id) => {
  console.log("Eliminar Colaborador", id);
  const nuevosColaboradores = colaboradores.filter
  ((colaborador) => 
  colaborador.id !== 
  id )
  actualizarColaboradores(nuevosColaboradores)
}


//Actuliazar color de Equipo
const actualizarColor = (color, id) =>{
  console.log("Actualizar" , color,id)
  const equiposActualizados = equipos.map((equipo) =>{
    if(equipo.id === id){
      equipo.colorPrimario = color

    }
    return equipo


  })
  actualizarEquipos(equiposActualizados)
}
//Crear Equipo
const crearEquipo = (nuevosEquipo) => {
console.log(nuevosEquipo )
actualizarEquipos([...equipos,{...nuevosEquipo, id: uuid()}])

}
const like = (id) => {
  console.log("like", id )
  const colaboradoresActualizados =
  colaboradores.map((colaborador)  =>{
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav

    }
    return colaborador
  }) 
  actualizarColaboradores(colaboradoresActualizados)
  
}
  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></> }*/}
      {mostrarFormulario && <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo)}
       registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      />
       
        
      }
     
      <MiOrg cambiarMostrar={cambiarMostrar} />
    {
      equipos.map((equipos) => <Equipo 
      datos={equipos} 
      key={equipos.titulo}
      colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipos.titulo)}
      eliminarColaborador = {eliminarColaborador}
      actualizarColor={actualizarColor}
     like={like}
     />)
}
 
 <Footer /> 
    


    </div>
  );
  }

export default App;

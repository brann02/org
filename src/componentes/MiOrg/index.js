 import { useState } from "react"
 import "./MiOrg.css";
 
 const MiOrg = (props)=> {
    //Estado - Hooks
    //useState
    //const [nombreVariable,funcionActuliza] = useState(valorInicial)
    
console.log(props)
//const [mostrar, actualizarMostrar] = useState(true)
//const manejarClick = () => {
 // console.log("Mostrar /Ocultar elemento", !mostrar);
//  actualizarMostrar(!mostrar)
//}  
return <section className= "orgSection" >
        <h3 className="title">Mi Organizacio</h3>
        <img src = "/img/Img.png" alt ="Img" onClick={props.cambiarMostrar} />

    </section>
}

export default MiOrg;






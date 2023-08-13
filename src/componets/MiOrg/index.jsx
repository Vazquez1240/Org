import './MiOrg.css';
import { useState } from 'react';

const MiOrg = (props) => {

    // Estado - hooks 

    // useState

    // useState()

    // const [nombreVariable, funcionActualiza] = useState(valorInicial)

    // Definimos los estados de mostrar elemento;
    //const [mostrar, actualizarMostrar] = useState(true);

    //const ManejarClick= () => {
        
      //  console.log("Mostar/Ocultar elemento");
        //actualizarMostrar(!mostrar);
    //}

    return (
        <section className='orgSection'>
            <h3 className='title'>Mi organizacion</h3>
            <img src="/img/add.svg" alt="add" onClick={props.cambiarMostrar}/>
        </section>
    )
}

export default MiOrg;
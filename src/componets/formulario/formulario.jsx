import './formulario.css';
import { useState } from 'react';
import CampoTexto from '../campoTexto/index.jsx';
import ListaOpciones from '../ListaOpciones/index.jsx';
import Boton from '../Boton/index.jsx';

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo,actualizarTitulo] = useState("");
    const [color,actualizarColor] = useState("");


    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (event) => {
        event.preventDefault();
        console.log("Manejar el envio");
        let datosAEnviar = {
            nombre: nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo,
            fav: false
        }
        

        registrarColaborador(datosAEnviar);
    }


    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({ titulo, colorPrimario:color });
    }

    return (
        <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <CampoTexto texto='Nombre' placehorlder="ingresar Nombre" required={true}
                valor={nombre} actualizarValor={actualizarNombre}/>

                <CampoTexto texto='Puesto' placehorlder= "Ingresar Puesto" required={true}
                valor={puesto} actualizarValor={actualizarPuesto}/>

                <CampoTexto texto='Foto' placehorlder="Ingresar enlace de foto" required={true}
                valor={foto} actualizarValor={actualizarFoto}/>

                <ListaOpciones
                valor={equipo} actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}/>

                <Boton>Crear</Boton>
            </form>

            <form className='form-equipos' onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <CampoTexto texto='Titulo' placehorlder="ingresar titulo" required={true}
                valor={titulo} actualizarValor={actualizarTitulo}/>

                <CampoTexto texto='Color' placehorlder= "Ingresar el color (Hexadecimal)" required={true}
                valor={color} actualizarValor={actualizarColor}
                type="color"/>

                <Boton>Registrar Equipo</Boton>
            </form>
        </section>
        
    );
};


export default Formulario;
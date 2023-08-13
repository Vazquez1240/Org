import './ListaOpciones.css';

const ListaOpciones = (props) => {

    // Metodo map -> arreglo.map( (equipo, index) => {
        //return <option>equipo</option>;
    //})

    

    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value)
    }

    return (
        <div className='lista-opciones'>

            <label>EQUIPOS</label>
            
            <select  value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
                { props.equipos.map((equipo,index) => <option key={index}>{equipo}</option>) }
            </select>
        </div>
    )
}

export default ListaOpciones;
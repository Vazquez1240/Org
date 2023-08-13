import './Equipo.css'
import Colaborador from '../Colaborador/index.jsx'
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    // Destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    const estiloTitulo = {borderColor: colorPrimario}

    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.5)
    }
    

    

    return(
        <>
            { 
                colaboradores.length > 0 &&
                <section className="equipo" style={obj}>

                    <input
                        type="color"
                        value={colorPrimario}
                        className='input-color'
                        onChange={(evento) => {
                        actualizarColor(evento.target.value, id);
                     }}/>


                    <h3 style={estiloTitulo}>{titulo}</h3>
                    <div className='colaboradores'>
                        {
                            colaboradores.map( ( colaborador, index  ) => <Colaborador 
                            datos={colaborador} 
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}/> )
                        }
                    </div>
                </section>
            }
        </>
    )
}

export default Equipo;
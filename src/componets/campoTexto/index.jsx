import './campoTexto.css';


export default function CampoTexto(props){
    
    //Desctructuracion 
    const { type = "text" } = props

    const manejarCambioo = (e) => {
        props.actualizarValor(e.target.value)
        
    }

    return (
        <div className='campo-texto'>
            <label>{props.texto.toUpperCase()}</label>
            <input 
            type={type} 
            placeholder={props.placehorlder.toUpperCase()} 
            required={props.required} 
            value={props.valor} onChange={manejarCambioo}/>
        </div>
    )
}
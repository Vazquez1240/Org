import './App.css';
import Header from './componets/header/Header.jsx';
import Formulario from './componets/formulario/formulario.jsx';
import MiOrg from './componets/MiOrg/index.jsx';
import { useState } from 'react';
import Equipo from './componets/Equipo/index.jsx';
import Footer from './componets/Footer/index.jsx';
import { v4 as uuid } from 'uuid';


function App() {

  const [viewForm, updateValue] = useState(false );
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://scontent.ftsl1-1.fna.fbcdn.net/v/t39.30808-6/328877877_168376032633459_45415450003829493_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeGQsCjhoWNkGL_ZAKJfhe1SCaFaMAJhxjYJoVowAmHGNum6UpnXBqlv90mqqRSej5vdss85H3x5IMJGIDJ-ysRY&_nc_ohc=lL7poCrgtXgAX-MLY9J&_nc_ht=scontent.ftsl1-1.fna&oh=00_AfAxS669oTHDCvNicmI3kOKcDXB6_ea1TVynK-NAw08vtw&oe=64DCD6AA",
      nombre:"Alexis",
      puesto:"Desarrollador",
      fav:false
    },
    {
      id: uuid(),
      equipo: "Movil",
      foto: "https://scontent.ftsl1-1.fna.fbcdn.net/v/t1.6435-1/62155170_2302012863345994_6769372485793087488_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeGEWghEzWa3QJ1CWjmyqYHa34JCrio9iIjfgkKuKj2IiB_bIlhrp_7KSKzBJGLJq1myTpp1XOX6Ti678I2VQBgo&_nc_ohc=pWAuFGzO4xkAX9T3cY6&_nc_ht=scontent.ftsl1-1.fna&oh=00_AfDrp7hD0rNHMGSlTjGiRs0VllJcn48I0SOVvuRdvhhK3A&oe=64FFE0FE",
      nombre:"Tobe Gomalez",
      puesto:"Desarrollador",
      fav:false
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/Vazquez1240.png",
      nombre:"Martin",
      puesto:"Desarrollador Front End",
      fav:false
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://scontent.ftsl1-1.fna.fbcdn.net/v/t39.30808-6/296242378_5668899346487484_3215455917000051842_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeF4C7qOt5LsiUZMnLsponQPP1PE8UEC8Gk_U8TxQQLwae3xH7Nfd9gFOwiH9isIeUY5gORmzIGl9Vryh8nIyvYF&_nc_ohc=RKjcM3ty3jAAX8zgDq9&_nc_ht=scontent.ftsl1-1.fna&oh=00_AfCuqWI1cSXLxdr01owjbeVMBTw0j1IXVhnLgSc-GIiGBg&oe=64DD29BE",
      nombre:"Karen Mariel",
      puesto:"Diseñadora UX",
      fav:false
    }
  ]);

  const [equipos, actualizarEquipos] = useState([
      {
        id: uuid(),
        titulo:"Programacion",
        colorPrimario: '#57C278',
        colorSecundario: '#D9F7E9' 
      },
      {
        id: uuid(),
        titulo:"Front End",
        colorPrimario: '#82CFFA',
        colorSecundario: '#E8F8FF' 
      },
      {
        id: uuid(),
        titulo:"Data Science",
        colorPrimario: '#A6D157',
        colorSecundario: '#F0F8E2' 
      },
      {
        id: uuid(),
        titulo:"Devops",
        colorPrimario: '#E06B69',
        colorSecundario: '#FDE7E8' 
      },
      {
        id: uuid(),
        titulo:"UX y Diseño",
        colorPrimario: '#DB6EBF',
        colorSecundario: '#FAE9F5' 
      },
      {
        id: uuid(),
        titulo:"Movil",
        colorPrimario: '#FFBA05',
        colorSecundario: '#FFF5D9' 
      },
      {
        id: uuid(),
        titulo:"Innovacion y gestion",
        colorPrimario: '#FF8A29',
        colorSecundario: '#FFEEDF' 
      }
    ]
  )
  
  // Ternario --> Condicion ? seMuestra : noSeMuestra

  // condicion && seMuestra 
  
  const cambiarMostrar = () => {
    updateValue(!viewForm)
  }

  // Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador ", colaborador);
    
    // Spread operator
    // hace una copia de lo que tenemos por eso los tres puntos
    // despues añadira el objeto recibido
    actualizarColaboradores([...colaboradores, colaborador]);
  }


  // Eliminar Colaborador

  const eliminarColaborador = (id) => {
    console.log('Eliminar Colaborador ', id);
    const nuevosColaboradores = colaboradores.filter( (colaborador) => colaborador.id !== id )
    actualizarColaboradores(nuevosColaboradores)
  }


  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log('Color actualizado ', color, id);
    const equiposActualizados = equipos.map( (equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color;
        
      }
      return equipo;
    })
    actualizarEquipos(equiposActualizados)
  }


  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }


  const like = (id) => {
    
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador;
    })

    actualizarColaboradores(colaboradoresActualizados)
  }
  
  
  return (
    <div>
      <Header />
      {
       viewForm && <Formulario 
       equipos={equipos.map( (equipo) => equipo.titulo )}
       registrarColaborador={registrarColaborador}
       crearEquipo={crearEquipo}/>
       }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map( (equipo) => {
          // Siempre que trabajemos con map es importante utilzar key ya que es una llave unica para la etiqueta
          return <Equipo datos={equipo} key={equipo.titulo}
          
          // El filter nos va a ayudar a hacer un filtrado en este caso el equipo del colaborador y el titulo del equipo
          // Si son iguales los mandara a esa parte
           colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
           eliminarColaborador={eliminarColaborador}
           actualizarColor={actualizarColor}
           like={like}/>
        } )
      }

      <Footer/>
      
    </div>
  );
}

export default App;

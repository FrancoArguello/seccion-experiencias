import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contendor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre el IFTS N° 03:</h1>
      <Testimonio 
      nombre = 'Franco Argüello'
      pais = 'Argentina'
      imagen ='franco'
      cargo = 'Ingeniero de Software'
      empresa = 'Fundación Pescar'
      testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en la carrera como desarrollador de Software. En un año tenía un trabajo de seis cifras como ingeniero de software. El IFTS N° 03 cambió mi vida.'/>
      <Testimonio 
      nombre = 'Joan Maldonado'
      pais = 'Argentina'
      imagen ='joan'
      cargo = 'Ingeniero de Software'
      empresa = 'Globant'
      testimonio='Estudiar de manera autodidacta y por sobre todo haciendo la carrera de Desarrollador de Software en el IFTS N°03 me abrieron muchas puertas a nuevos trabajos uno mejor que otro.El IFTS N° 03 cambió mi perfil profesional.'/>

<Testimonio 
      nombre = 'Ricardo Rojo'
      pais = 'Argentina'
      imagen ='ricardo'
      cargo = 'Ingeniero de Software'
      empresa = 'NeuquenIT'
      testimonio='El IFTS N° 03 fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble'/>
      </div>
    </div>
  );
}

export default App;

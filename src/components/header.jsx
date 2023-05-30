import '../components/header.css'
//import { BiMenu } from 'react-icons/bi';
//import { GrClose } from 'react-icons/gr';

let vacio = '';
function Header() {
  const openMenu = () =>{
    let menu_desplegable = document.getElementById('menu');
    let boton_cerrar = document.getElementById('x');
    menu_desplegable.classList.toggle('abrir_menu');
    boton_cerrar.classList.toggle('colocar_x');
  }
  return (
     <header>
     
        <div className='barras'>
     
              <button onClick={openMenu} className='boton_menu' id='x'></button>
        </div>
        <nav id='menu' className="desplegable">
          <ul >
            <li><a href={vacio}>Home</a></li>
            <li><a href={vacio}>About</a></li>
            <li><a href={vacio}>Explore</a></li>
            <li><a href={vacio}>Gallery</a></li>
            <li><a href={vacio}>Contact</a></li>
          </ul>
        </nav>       
        
      </header>
    
  );
}

export default Header;

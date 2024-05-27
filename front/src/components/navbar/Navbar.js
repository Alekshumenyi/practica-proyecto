
import './navbar.css';

export default function NavBar() {
    return (
    <div class="topnav" id="myTopnav">
        <a href=""> <img src=".\assets\Logo(1).png" className="logo" alt="logo"/>  </a>
        <a href="#home">Chats</a>
        <a href="#news">Explorar Grupos</a>
        <a href="#contact">Contactos</a>
        <a href="#about">OWL's</a>
        <a href="#configuración">Configuración</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a>
    </div>        
    )
}


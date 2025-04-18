import '../css/App.css'
import logo from '../assets/logo.png'

function Header() {

    return (
        <header>

            <a href="#home"><img src={logo} height="60px" className="logo" alt="Logo" /></a>

            <nav id="nav"> 
                <a href="#graphic">Graphic Design</a> 
                <a href="#website">Websites</a> 
                <a href="#games">Games</a> 
                <a href="#mobile">Mobile Applications</a> 
                <a href="#research">Research</a> 
            </nav>
        </header>
    )
}

export default Header

import './Header.css';

const Header = () => {
 return(
    <div className="main"> 
       <nav className="menu">
          <a href="http://localhost:3000/" className="logo"><img src="/img/logo192.jpg" alt="logo" /></a>
            <li><a href="#about" > About</a></li>
            <li><a href="#skills" > Skills</a></li>            
            <li><a href="#projects" > Projects</a></li>        
            <li><a href="#contect" > Contact</a></li>
       </nav>     

    

    </div>
 )

}

export default Header;
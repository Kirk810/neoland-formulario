import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  
  return(
    <header className="Header">
      <nav>
        <NavLink to="/">Form</NavLink>
        <NavLink to="/api">Api</NavLink>
      </nav>
    </header>
  )
}

export default Header;
import React from "react"
import {Link} from "react-router-dom"
import "./navbar.css"
import { navItems } from "./Navitems";



const Navbar = () => {
    
    return(
        <>
            <nav className="navbar">
                <Link to="/" className="image"><img src="img.png" alt="logo"/></Link>
                <Link to="/" className="navbar-logo">BLOCKCHAIN QUALIFIED</Link>
                <ul className="nav-items">
                    {navItems.map((item) =>{
                        return(
                        <li key={item.id} className={item.cName}>
                            <Link to={item.path}>{item.title}</Link>
                        </li>
                        )
                    })}
                </ul>
               { /*<Button/>*/}
            </nav>
        </>
        
    )
}

export default Navbar
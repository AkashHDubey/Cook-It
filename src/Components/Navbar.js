import "./Navbar.css"
import {Link} from "react-router-dom"
import Searchbar from "./Searchbar"
import { useTheme } from "../hooks/useTheme"
import { useEffect } from "react"

export default function Navbar() {
  const {color } = useTheme()

  useEffect(() => {
    
    const element = document.querySelectorAll(".navbar a");
    const lastElement = element[(element.length-1)]

    lastElement.style.backgroundColor = color
    lastElement.style.color = 'white'
     
    lastElement.addEventListener("mouseover", function() {
      lastElement.style.backgroundColor = 'white'
      lastElement.style.color = color
     });
 
     lastElement.addEventListener("mouseout", function() {
      lastElement.style.backgroundColor = color
      lastElement.style.color = 'white'
     });
 
 }, [color]);

  return (
    <div className="navbar" style={{background:color}}>
      <nav >
       <Link to="/" className="brand">
         <h1>Cook It!</h1>
        </Link>
        <Searchbar/>
        <Link to="/create">
         <h1>Create Recipe</h1>
        </Link>
      </nav>
    </div>
  )
}

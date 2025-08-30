import { NavLink } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
export const Headers = ()=>{
  const [open ,setOpen] = useState(false);
  const handleHamburClick = ()=>{
    let menu = document.querySelector(".ham-menu");
    menu.addEventListener("click",function(){
      
    })
  }
  return <header>
    <div className="container">
      <div className="grid navbar-grid">
        <div className="logo">
          <NavLink to="/">
            <h1>World<span className="atlas">Atlas</span></h1>
          </NavLink>
        </div>
        <div className="ham-menu" onClick={()=>setOpen(!open)}>
          <RxHamburgerMenu className="hambur"/>
        </div>
        <nav className={`nav ${open?"open":""}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
             <li>
              <NavLink to="/about">About</NavLink>
            </li>
             <li>
              <NavLink to="/country">Country</NavLink>
            </li>
             <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="top-icon c-color" onClick={()=>setOpen(false)}>
              <RxCross2 className="open copen"/>
            </li>
          </ul>
         
        </nav>
        
      </div>
    </div>
  </header>
}
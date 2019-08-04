import React from "react";
import { NavLink } from 'react-router-dom';
import "./style.css";

function Nav() {
  return (
    <div>
      <ul className="nav nav-tabs">

         <li className="nav-item">
            <NavLink to='/' className="nav-link " exact activeClassName="selected">
               Products
            </NavLink>
         </li>

         <li className="nav-item">
            <NavLink to='/' className="nav-link " exact activeClassName="selected">
               Providers
            </NavLink>
         </li>

         <li className="nav-item">
            <NavLink to='/' className="nav-link " exact activeClassName="selected">
               Clients
            </NavLink>
         </li>

         <li className="nav-item">
            <NavLink to='/saved' className="nav-link" exact activeClassName="selected">
               Purchases
            </NavLink>
         </li>

         <li className="nav-item">
            <NavLink to='/' className="nav-link " exact activeClassName="selected">
               Sales
            </NavLink>
         </li>

         <li className="nav-item">
            <NavLink to='/' className="nav-link " exact activeClassName="selected">
               Kardex
            </NavLink>
         </li>

         <li className="nav-item">
            <NavLink to='/' className="nav-link " exact activeClassName="selected">
               Logout
            </NavLink>
         </li>

      </ul>
    </div>
  );
}

export default Nav;

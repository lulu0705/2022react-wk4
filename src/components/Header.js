import { useState } from "react";
import { Link } from "react-router-dom"


export default function Header() {
   return (
      <div className="header">
         <Link to="/">
            <h1 className="header-title">
               NORDIC NEST Shopping Cart
            </h1>
         </Link>
         <p
            className="header-slogan">
            An example made by Create-React-App.
         </p>
         <hr className="hr-header-line" />
      </div>
   );
}
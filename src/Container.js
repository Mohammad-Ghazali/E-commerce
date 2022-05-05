import React from "react";
import { Link } from "react-router-dom";
import "./Container.css";
//import Search from "./Search";

const Container = () => {
  return (
    <div>
      
      <nav className="header">
      <ul>
  <li> <Link className="link" to="/search">Search</Link></li>
  <li> <Link className="link" to="/products">Products</Link></li>
  
</ul>
     
        
      </nav>
    </div>
  );
};

export default Container;

import React from "react";
import { Link } from "react-router-dom";
import "./Container.css";

const Container = () => {
  return (
    <div>
      <nav className="header">
        <Link to="/products">Products</Link>
      </nav>
    </div>
  );
};

export default Container;

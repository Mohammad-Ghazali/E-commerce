import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import './Products.css'

function Products  () {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
      
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        
        { items.map(item => (
           <div className="pp" key={item.id}>
              
           <h3 >
           <Link className="name" to={`/products/${item.id}`}>{item.name}</Link>
             <img className="image" src={item.image}/>
          
           </h3>
           <p className="price">Rs {item.price}/-</p>
           
           <hr />
         </div>
         
        ))}
      </div>
    );
  }
}
 

export default Products;

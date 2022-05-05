import React, { useState, useEffect } from "react";
import './Search.css'


export default function Search() {

  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] =useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 


 useEffect(() => {
    const results = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);


  useEffect(() => {
    fetch(`http://localhost:5000/product?=${searchTerm}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
        },
      );
  }, []);
  
 
    return (
        <div>
            <input className="search11" type='text'  placeholder='Search products here...' onChange={handleChange}/>
          

          
            <ul>
         {searchResults.map(item => (
           <div className="container">
           <h1>{item.name}</h1>
           <p>Rs {item.price}/-</p>
           <p ><img className="image" src={item.image}/></p>
           <p>{item.description}</p>
          </div>
        ))}
      </ul>
      </div>
    );
  
}

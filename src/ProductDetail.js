import React, { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import './ProductDetail.css'


function ProductDetail() {
    const {id} = useParams()
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    

    useEffect(() => {
       
        fetch(`http://localhost:5000/product/${id}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
         
        
        )
        
    }, [])
   
  

      if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        return (
          <>
                
                 <h1 className="title1">{items.name}</h1>
                 
                 <p ><img className="image1" src={items.image}/></p>
                 <div className="con">
                 <p className="price1">Rs {items.price}/-</p>
                 <p className="disc1">{items.description}</p>
               </div>
               </>
      );}
            }
export default ProductDetail;
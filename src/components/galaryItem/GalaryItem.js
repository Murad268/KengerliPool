import React from 'react';
import './galaryItem.css'
const GalaryItem = ({state}) => {
   return (
  
         <div className="product-card">
            <div className="badge">Hot</div>
            <div className="product-tumb">
               <img src={state.img}alt=""/>
            </div>
            <div className="product-details">
               <span className="product-catagory">{state.catagoryName}</span>
               <h4><a href="">{state.goodName}</a></h4>
               <p>{state.desc}</p>
               <div className="product-bottom-details">
                  <div className="product-price">Malın qiyməti: {state.price} AZN</div>
                  <div className="product-delPrice">Malın çatdırılma ilə birgə qiyməti: {state.withDeliveryPrice} AZN</div>
               </div>
            </div>
         </div>
                
             
     
   );
};

export default GalaryItem;
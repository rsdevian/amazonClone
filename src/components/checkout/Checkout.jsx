import { useStateValue } from "../../context/stateProvider";
import "./Checkout.css"
import Subtotal from "./subtotal/subtotal";
import Checkoutproduct from "./checkoutProduct/CheckoutProduct.jsx"

import React, { useState } from 'react'

export default function Checkout() {

  const [ { basket }, dispatch ] = useStateValue();

  return (
      <div className="checkout">
          <div className="checkout__left">
              <img 
                className="checkout__ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                alt="checkout ad" 
              />
              <div>
                  <h2 className="checkout__title">Your Shopping Basket</h2>
                  {basket.map(item => (
                      <Checkoutproduct 
                          id={item.id} 
                          image={item.image} 
                          title={item.title} 
                          price={item.price} 
                          rating={item.rating}
                      />
                  ))}
              </div>
          </div>
          
          <div className="checkout__right">
              <Subtotal />
          </div>
      </div>
    )
}

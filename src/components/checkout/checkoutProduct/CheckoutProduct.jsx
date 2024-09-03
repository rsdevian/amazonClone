import { useStateValue } from "../../../context/stateProvider"
import "./CheckoutProduct.css"

import React from 'react'

export default function CheckoutProduct({ id, image, title, price, rating}) {
    
    const [ {basket}, dispatch] = useStateValue();

    function removeFromBasket() {
        //remove the item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    
    return (
        <div className="checkoutProduct">
            <img 
                className="checkoutProduct__image"
                src={image} 
                alt="image" 
            />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_,i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

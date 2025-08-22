import React from 'react'
import "./Subtotal.css"
import { useStateValue } from '../../../context/stateProvider'
import { getBasketTotal } from '../../../context/reducer';

export default function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  // Create the currency formatter instance
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className='subtotal'>
      <p>
        Subtotal ({basket.length} items):
        <strong>{formatter.format(getBasketTotal(basket))}</strong>
      </p>
      <small className='subtotal__gift'>
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button>Proceed to checkout</button>
    </div>
  )
}

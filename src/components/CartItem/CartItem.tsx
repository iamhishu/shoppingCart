import React from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext';
import {  Button, Stack } from 'react-bootstrap'
import Items from "../../data/items.json";
type cartItemProps = {
    id: number
    quantity: number
}
export function CartItem({ id, quantity }: cartItemProps) {

    const { removeFromCart } = useShoppingCart();
    const item = Items.find(item => item.id === id);

    if (item === null) return null;


  return (
      <Stack direction="horizontal" className='d-flex align-items-center justify-content-between'>
          <img src={item?.imgUrl} style={{ width: '150px', height: '75px', objectFit: 'revert' }} />
          <div className='me-auto mx-2'>
              <div>
                  {item.name} {quantity > 1 && <span className='text-muted' style={{ fontSize: '.65rem' }}> {quantity}x </span>}
                   <br />
                  <p style={{ fontSize: '.65rem' }}>
                      {item.price}
                  </p>
              </div>
          </div>
                <div className='text-muted ' style={{ fontSize: '.75rem' }}>
              {item.price * quantity + '$'}
              <Button variant="outline-secondary mx-1" size="sm" onClick={() => removeFromCart(item.id)}>
              X
              </Button>
          </div>
  </Stack>
  )
}

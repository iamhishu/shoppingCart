import React from "react";
import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../../utilities/CurrencyFormater";
import { useShoppingCart } from "../../context/ShoppingCartContext"
type StoreItemsProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function StoreItem({
  id,
  name,
  price,
  imgUrl,

}: StoreItemsProps) {
  const {         getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart} = useShoppingCart();
  const quantity = getItemQuantity(id);
  
  return (
    <Card className="h-100">
      <Card.Img
        src={imgUrl}
        variant="top"
        height="380px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{'$'+''+price}</span>
              </Card.Title>
              <div className="mt-auto">
                  {quantity === 0 ? (
                      <Button variant="outline-secondary" className="w-100" onClick={()=>increaseCartQuantity(id)}>
                          Add to cart
                      </Button>
                  ) : (
                          <div className="d-flex align-items-center flex-column" style={{gap:'.5rem'}}>
                              <div className="d-flex align-items-center justify-content-center" style={{gap:'.5rem'}}>
                                  <Button variant="outline-dark" size="sm" onClick={()=>decreaseCartQuantity(id)}>
                                  -
                                  </Button> 
                                  <div>
                                              <span className="fs-3">{quantity}</span> in cart
                                      </div>
                          
                                       <Button variant="outline-dark" size="sm" onClick={()=>increaseCartQuantity(id)}>
                                  +
                                  </Button> 
                              </div>
                          </div>
                  )}
              </div>
      </Card.Body>
    </Card>
  );
}

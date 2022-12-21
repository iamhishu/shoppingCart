import React from 'react';
import {Col,Row} from "react-bootstrap"
import storeItems from "../data/items.json"
import StoreItem from "../components/StoreItems/StoreItems"
export default function Store() {
  return (
          <Row md={2} xs={1} lg={3} className="g-3">
              {storeItems.map((element, index) =>
                  <Col key={element.id} >
                      <StoreItem {...element} />
                  </Col>
                  )}
</Row>
  );
}

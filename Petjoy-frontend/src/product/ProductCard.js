import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const ProductCard = ({ id, name, imgUrl }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/20"/>
      <Card.Title>
      <Link className="ProductCard card" to={`/products/${id}`}>
        {name}
     </Link>
      </Card.Title>

    </Card>

  );
};

export default ProductCard
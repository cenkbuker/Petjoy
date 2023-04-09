import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, imgUrl }) => {
  return (
    <Card className="my-3 p-3 rounded" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Link className="card-link" to={`/products/${id}`}>
          <Card.Title as="h4">{name}</Card.Title>
        </Link>
        <Button variant="primary" className="mt-2">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

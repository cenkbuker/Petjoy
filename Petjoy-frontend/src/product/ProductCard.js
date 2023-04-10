import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./ProductCard.css"

const ProductCard = ({ id, name, imgUrl }) => {
  return (
    <Card className="my-3 p-3 rounded" style={{ width: '18rem'}}>
     <Link className='cardtitle' to={`/products/${id}`}>
      <Card.Img variant="top" src={imgUrl} style={{ height: '200px', objectFit: 'scale-down' }} />
      <Card.Body>

          <Card.Title as="h4">{name}</Card.Title>

        <Button variant="secondary" className="mt-2" >
          Add to Cart
        </Button>
      </Card.Body>
      </Link>
    </Card>
  );
};

export default ProductCard;

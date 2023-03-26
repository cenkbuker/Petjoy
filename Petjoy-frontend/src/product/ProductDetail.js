import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PetJoy from '../api/api'
import LoadingSpinner from '../common/LoadingSpinner';
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";

function ProductDetail() {

  const [product, setProduct] = useState(null)
  const { name } = useParams()
  useEffect(function getProductAfterLoad() {

    async function getProduct(){
      setProduct(await PetJoy.getProduct(name))
    };
    getProduct()
  },[name]);

  if (!product) return <LoadingSpinner/>;
  return (
    <>
<Container fluid className='px-5'>
          <>
            <Row>
              <Col md={6}>
                <Image
                  src="https://picsum.photos/400/300"
                  alt={product.name}
                  className='fade-in'
                  fluid
                />
              </Col>
              <Col md={3}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h3>{product.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card className='rounded'>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col>
                          <strong>${product.price}</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                          {product.count_in_stock > 0
                            ? "In Stock"
                            : "Out Of Stock"}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Col className='d-grid gap-2'>
                        <Button
                          // onClick={addToCartHandler}
                          className='btn-block rounded'
                          type='button'
                          disabled={product.count_in_stock === 0}
                        >
                          Add To Cart
                        </Button>
                      </Col>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
            <Row className='me-3 '>
              <Card style={{ minHeight: "50px" }} className='rounded p-3 m-3'>
                Description: {product.description}
              </Card>
            </Row>
          </>
        
      </Container>
    </>
  )
}

export default ProductDetail
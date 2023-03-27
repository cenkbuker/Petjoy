import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import PetJoy from '../api/api'
import LoadingSpinner from '../common/LoadingSpinner';
import UserContext from "../login/UserContext";
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
  const { currentUser } = useContext(UserContext);
  const [product, setProduct] = useState(null)
  const [comment, setComment] = useState("");
  const { name } = useParams()
  useEffect(function getProductAfterLoad() {

    async function getProduct(){
      setProduct(await PetJoy.getProduct(name))
    };
    getProduct()
  },[name]);

  if (!product) return <LoadingSpinner/>;
  const handleChange = (e) => {
    const { value } = e.target
    setComment((data) => ({...data, value }))
  };

  async function handleSubmit(e){
    e.preventDefault();
    // let commentForm = await 
  }
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
            <Row>
              <Col md={6}>
                <h2>Reviews</h2>
                {product.review ? <ListGroup variant='flush'>
                    <ListGroup.Item >
                    </ListGroup.Item>
                </ListGroup> : 
                <h2>No reviews for this product</h2>
                }
              </Col>
              <Col md={6}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h2>Write a Customer Review</h2>
                    {currentUser ? (
                      <Form onSubmit={handleSubmit}>
                        <Form.Group controlId='comment'>
                          <Form.Label>Comment</Form.Label>
                          <Form.Control
                            as='textarea'
                            row='3'
                            value={comment}
                            onChange={handleChange}
                          ></Form.Control>
                        </Form.Group>
                        <Button
                          type='submit'
                          variant='primary'
                          className='my-3 rounded'
                        >
                          Submit
                        </Button>
                      </Form>
                    ) : (<div>
                        Please <Link to='/login'>sign in</Link> to write a
                        review{" "}
                    </div>

                    )}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </>
        
      </Container>
    </>
  )
}

export default ProductDetail
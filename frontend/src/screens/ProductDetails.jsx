import React, { useState, useEffect } from 'react';
import Product from '../products'
// import axios from 'axios'
import Rating from '../components/Rating';
import {Row, Col, ListGroup, Button, Image, ListGroupItem, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";

const Productdetails = ({history, match}) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(match.params.id));
      }, [dispatch, match]);
    // const product = Product.find((p) => p._id === match.params.id);
    // const [Products, setProducts] = useState([])
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const {data} = await axios.get(`/products/${match.params.id}`)
    //         setProducts(data)
    //     }
    //     fetchProducts()
    // },[])
    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`);
      };
  return (
  <div>
      <Link to="/" className="btn btn-light"> 
      <i class="fas fa-arrow-left"></i>
     &nbsp; GO BACK
      </Link>
      <Row>
          <Col md={6}>
          <Image src={product.image} alt={product.name} fluid/>
          
          </Col>
          <Col md={3}>
              <ListGroup varient="flush">
                  <ListGroupItem>
                      <h3>{product.name}</h3>
                  </ListGroupItem>
                <ListGroupItem>
                    <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
                </ListGroupItem>
                <ListGroupItem>
                    Price : ₹{product.price}
                </ListGroupItem>
                <ListGroupItem>
                    {product.description}
                </ListGroupItem>
              </ListGroup>
          </Col>
          <Col md={3}>
              <ListGroupItem>
                  <Row>
                      <Col>Status:</Col>
                      <Col>
                      {product.countInStock>0 ? 'In Stock' :'Out of Stock'}
                      </Col>
                  </Row>
                  </ListGroupItem>
                  {product.countInStock > 0 && (
            <ListGroupItem>
              <Row>
                <Col>Qty</Col>
                <Form.Control
                  as="select"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </Form.Control>
              </Row>
            </ListGroupItem>
          )}
                  <ListGroupItem>
                      <Button className="btn-block" type="button" onClick={addToCartHandler}>Add to cart</Button>
                  </ListGroupItem>
              {/* </ListGroupItem> */}
          </Col>
      </Row>


  </div>
  )
};

export default Productdetails;
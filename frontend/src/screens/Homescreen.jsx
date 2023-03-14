import React, { useEffect } from "react";
// import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
// import Products from "../products";
import {Row,Col} from "react-bootstrap";
import Productscreen from './Productscreen';
import Loader from '../components/shared/Loader';
import Message from '../components/shared/Message'



const Homescreen = () => {
 
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
      }, [dispatch]);
     

  return (
  <>
      {loading ? (
        <Loader />
        // <h2>Loading..</h2>
      ) : error ? (
        //   <h2>{error}</h2>
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          
          {products.map((product) => (
            <Col key={product._id} md={3}>
              <Productscreen product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};


export default Homescreen;

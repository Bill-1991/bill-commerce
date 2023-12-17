import React from 'react';
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Button, Container, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import del from "../assets/delete.png";

const Cart = ({ price, basketItems, handleInc, handleChange, handleDec, handleReset, handleRemoveFromCart, handleSubmit }) => {
  return (
    <Container fluid id="cart" className='cart' style={{position: "relative"}}>
    {basketItems.length === 0 ? 
       <Row><h1>You don't have anything in your cart yet...Search our <Link to="/anime/topanime">Top anime</Link></h1></Row>
      :
      <div>
      <Row>
      <p style={{ fontSize: "20px"}}>Total price: {price}</p>
        {basketItems.map(item => <Col xs={12} sm={6} md={6} lg={4} key={item.title}>
        <div className='d-grid all' style={{fontSize: "16px", fontWeight: "600", fontStyle: "oblique", maxHeight: "200px", backgroundColor: "rgba(0, 10, 0, 0.7)", color: "white", height: "fit-content", gridTemplateColumns: "35% 65%"}}>
          <img style={{width: "100%", height: "100%", maxHeight: "200px"}} src={item.images.jpg.image_url} alt={item.title} />
         <div className='d-grid' style={{ gridTemplateRows: "30% 20% 20% 30%", textAlign: "center"}}>
          <p style={{fontSize: "20px"}}>{item.title}</p>
          <div className="d-flex" style={{alignItems: "center", justifyContent: "center", gap: "10%"}}>
            <button style={{color: "red", border: "none", backgroundColor: "inherit"}} onClick={() => handleDec(item)}><h3>-</h3></button>
            <p>{item.count}</p>
            <button style={{color: "green", border: "none", backgroundColor: "inherit"}} onClick={() => handleInc(item)}><h3>+</h3></button>
          </div>
          <button style={{width: "fit-content", justifySelf: "center", height: "fit-content", backgroundColor: "inherit"}} onClick={() => handleReset(item)}>Reset</button>
          <div className='d-grid' style={{width: "100%", gridTemplateColumns: "50% 50%"}}>
            <p style={{alignSelf: "end", fontSize: "22px", color: "white"}}>{item.count * item.price}€</p>
            <button style={{color: "white", border: "none", backgroundColor: "inherit"}} onClick={() => handleRemoveFromCart(item)}><img style={{width: "40px", height: "40px"}} src={del} alt="delete" /></button>
          </div>
         </div> 
        </div>
        </Col>)}
      </Row>
      <Form className='d-grid cart-form'>
        <Form.Group className='d-grid control'>
          <Form.Control onChange={handleChange} type="text" placeholder="Fullname" />
          <Form.Control type="number" placeholder="69*********" />
          <Form.Control type="text" placeholder="Address" />
          <Form.Control type="text" placeholder="Give your comments" />
        </Form.Group>
        <Button onClick={() => handleSubmit()}>Send Order</Button>
      </Form>
      </div>
}
    </Container>
  )
}

export default Cart;
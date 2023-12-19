import React from 'react';
import SendForm from './SendForm'
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Button, Container, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import del from "../assets/delete.png";

const Cart = ({cartName, cartNum, cartAddress, cartText, cartSend, cartSubmit, handleCartSend, handleCartSubmit, handleCartName, handleCartNum, handleCartAddress, handleCartText, price, basketItems, handleInc, handleChange, handleDec, handleReset, handleRemoveFromCart, handleSubmit }) => {
  return (
    <Container fluid id="cart" className='cart' style={{position: "relative"}}>
      {basketItems.length === 0 ? 
        <Row  style={{opacity: cartSend === true ? "0" : "1"}}>
          <h1>You don't have anything in your cart yet...Search our 
            <Link to="/anime/topanime">Top anime</Link>
          </h1>
        </Row>
        :
      <div style={{opacity: cartSend === true ? "0" : "1"}}>
        <Row>
          <p style={{ fontSize: "30px"}}>Total price: {price}</p>
          {basketItems.map(item => 
          <Col xs={12} sm={6} md={6} lg={4} key={item.title}>
            <div className='d-grid all mt-2' style={{fontSize: "16px", fontWeight: "600", fontStyle: "oblique", maxHeight: "200px", backgroundColor: "rgba(0, 10, 0, 0.7)", color: "white", height: "fit-content", gridTemplateColumns: "35% 65%"}}>
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
        <Form id="form" className='d-grid cart-form'>
          <Form.Group className='d-grid control'>
            <Form.Control onChange={handleCartName} type="text" placeholder="Fullname" />
            <Form.Control onChange={handleCartNum} type="number" placeholder="69*********" />
            <Form.Control onChange={handleCartAddress} type="text" placeholder="Address" />
            <textarea onChange={handleCartText} style={{height: "120px"}} placeholder="Give your comments" />
          </Form.Group>
          <Button onClick={handleCartSend}>Send Order</Button>
        </Form>
      </div>
      }
      {
        cartSend === true ? 
        <SendForm cartName={cartName} cartNum={cartNum} cartAddress={cartAddress} cartText={cartText} cartSubmit={cartSubmit} cartSend={cartSend} handleCartSend={handleCartSend} handleCartSubmit={handleCartSubmit} basketItems={basketItems} price={price} />
        :
        undefined
      }
    </Container>
  )
}

export default Cart;
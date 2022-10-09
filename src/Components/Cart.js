import React from 'react'
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Button, Container, Form} from "react-bootstrap";
import { Link } from "react-router-dom"

const Cart = ({ price, basketItems, handleInc, handleChange, handleDec, handleReset, handleRemoveFromCart, handleSubmit }) => {
  return (
    <Container fluid id="cart" style={{position: "relative",}}>
    {basketItems.length === 0 ? 
       <Row><h1>You don't have anything in your cart yet...Search our <Link to="/anime">Top anime</Link></h1></Row>
      :
      <div>
      <Row>
        {basketItems.map(item => <Col xs={12} sm={6} md={6} lg={4} key={item.title}>
        <div className='d-grid mb-3 all' style={{backgroundColor: "white", color: "black", height: "30vh", gridTemplateColumns: "35% 65%"}}>
          <img style={{width: "100%", height: "30vh"}} src={item.images.jpg.image_url} alt={item.title} />
         <div className='d-grid' style={{ textAlign: "center"}}>
          <h6 style={{color: "rgba(200, 100, 180, 1)"}}>{item.title}</h6>
          <Row className="d-flex" style={{width: "100%"}}>
            <Col><button onClick={() => handleDec(item)}><h3 style={{color: "red"}}>-</h3></button></Col>
            <Col><h4>{item.count}</h4></Col>
            <Col><button onClick={() => handleInc(item)}><h3 style={{color: "green"}}>+</h3></button></Col>
          </Row>
          <Row><button onClick={() => handleReset(item)}>Reset</button></Row>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", alignSelf: 'end'}}>
            <h4 style={{justifySelf: "start"}}>{item.count * item.price}€</h4>
            <button style={{justifySelf: "end"}} onClick={() => handleRemoveFromCart(item)}><img alt="delete" /></button>
          </div>
         </div> 
        </div>
        </Col>)}
      </Row>
      <h2>Total price: {price}</h2>
      <Form>
        <Form.Group>
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

export default Cart
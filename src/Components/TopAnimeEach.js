import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import { Row, Col, Card } from 'react-bootstrap';
import cart from "../assets/cart.webp"


const AllTopAnime = (props) => {

  return (
    
         <Row style={{fontWeight: "700"}} id={props.eachTopAnime.title}>
          <Col xs={9} sm={8} md={6} lg={4}><img src={props.eachTopAnime.images.jpg.image_url} alt={props.eachTopAnime.title} /></Col>
         <Col xs={12} sm={12} md={6} lg={8} style={{ textAlign: "start"}}>
          <div className="d-grid" style={{width: "100%", gap: "10px", height: "fit-content"}}>
          <p style={{fontSize: "25px"}}>{props.eachTopAnime.title}</p>
          <hr></hr>
          <p style={{fontSize: "20px"}}>Rating: {props.eachTopAnime.rating}</p>
          <hr></hr>
          <p style={{fontSize: "20px"}}>Status: {props.eachTopAnime.status}</p>
          <hr></hr>
          <p style={{fontSize: "20px"}}>Score: {props.eachTopAnime.score}</p>
          <hr></hr>
          <div style={{display: "grid"}}>
          <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
            <p className='mt-2' style={{fontSize: "20px"}}>Genres: </p>
            <div style={{display: "grid", gap: "10px", gridTemplateColumns: "1fr 1fr 1fr"}}>{props.eachTopAnime.genres.map(genre => <Card style={{height: "fit-content", textAlign: "center", backgroundColor: "black", width: "105%", borderColor: "white"}}>{genre.name}</Card>)}</div>
            </div>
            <hr></hr>
            <div style={{display: "grid"}}>
              <button style={{height: "30px", justifySelf: "start", backgroundColor: "rgba(0, 0, 0, 0)"}} onClick={props.handleShowDesc}>{props.showDesc === true ? "Hide description" : "Show description"}</button>
              {props.showDesc === true ? <p>{props.eachTopAnime.synopsis}</p> : undefined}
              <hr></hr>
              </div>
          <div className='mt-2 d-flex eachtopcart' style={{justifyContent: "start", gap: "20px"}}>
           <p style={{alignSelf: "center", fontSize: "25px"}}>{props.eachTopAnime.price}€</p>
           <button onClick={() => props.handleAddToCartTop(props.eachTopAnime)} style={{justifySelf: "end", backgroundColor: "rgba(0, 0, 0, 0)"}}><img style={{width: "40px"}} src={cart} alt="To Cart" /></button>
            </div>
          </div>
          </div>
         </Col> 
        </Row>
      
  )
}

export default AllTopAnime
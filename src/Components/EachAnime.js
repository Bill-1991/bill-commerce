import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import { Row, Col } from 'react-bootstrap';
import cart from "../assets/cart.webp"


const EachAnime = (props) => {

  return (
         <Row id={props.anime.title} className="animes">
          <Col xs={12} sm={12} md={6} lg={6}><img src={props.anime.images.jpg.image_url} alt={props.anime.title} /></Col>
         <Col xs={12} sm={12} md={6} lg={6} style={{ textAlign: "start"}}>
          <div className="d-grid" style={{width: "100%", gap: "10px", height: "fit-content"}}>
          <h2>{props.anime.title}</h2>
          <hr></hr>
          <h4>Rating: {props.anime.rating}</h4>
          <hr></hr>
          <h4>Status: {props.anime.status}</h4>
          <hr></hr>
          <h4>Score: {props.anime.score}</h4>
          <hr></hr>
          <div style={{display: "grid"}}>
          <div style={{display: "flex", gap: "5px"}}>
            <h3 style={{alignSelf: "center"}}>Genres: </h3>
            <div style={{display: "grid", gap: "10px", gridTemplateColumns: "1fr 1fr 1fr"}}>{props.anime.genres.map(genre => <p style={{borderRadius: "100%", textAlign: "center", backgroundColor: "black", width: "100%"}}>{genre.name}</p>)}</div>
            </div>
            <hr></hr>
            <div style={{display: "grid"}}>
              <button style={{height: "30px", justifySelf: "start", backgroundColor: "rgba(0, 0, 0, 0)"}} onClick={props.handleShowDesc}>{props.showDesc === true ? "Hide description" : "Show description"}</button>
              {props.showDesc === true ? <p>{props.anime.synopsis}</p> : undefined}
              <hr></hr>
              </div>
          <div className='mt-2 d-flex eachcart' style={{justifyContent: "start", gap: "20px"}}>
           <h4 style={{alignSelf: "center"}}>{props.anime.price}€</h4>
           <button onClick={() => props.handleAddToCartAnime(props.anime)} style={{justifySelf: "end", backgroundColor: "rgba(0, 0, 0, 0)"}}><img style={{width: "40px"}} src={cart} alt="To Cart" /></button>
            </div>
          </div>
          </div>
         </Col> 
        </Row>
  )
}

export default EachAnime
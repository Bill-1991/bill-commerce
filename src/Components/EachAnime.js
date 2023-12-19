import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import { Row, Col, Card } from 'react-bootstrap';
import cart from "../assets/cart.webp"


const EachAnime = (props) => {

  return (
        <Row style={{fontWeight: "700"}} id={props.anime.title} className="animes">
          <Col xs={12} sm={12} md={6} lg={4}>
            <img style={{width: "320px"}} src={props.anime.images.jpg.image_url} alt={props.anime.title} />
          </Col>
          <Col xs={12} sm={12} md={6} lg={8} style={{ textAlign: "start"}}>
            <div className="d-grid" style={{width: "100%", gap: "10px", height: "fit-content"}}>
              <p style={{fontSize: "25px"}}>{props.anime.title}</p>
              <hr></hr>
              <p style={{fontSize: "20px"}}>Rating: {props.anime.rating}</p>
              <hr></hr>
              <p style={{fontSize: "20px"}}>Status: {props.anime.status}</p>
              <hr></hr>
              <p style={{fontSize: "20px"}}>Score: {props.anime.score}</p>
              <hr></hr>
              <div style={{display: "grid"}}>
                <div style={{display: "flex", gap: "5px"}}>
                  <p style={{alignSelf: "center"}}>Genres: </p>
                  <div style={{display: "grid", gap: "10px", gridTemplateColumns: "1fr 1fr 1fr"}}>
                    {props.anime.genres.map(genre => 
                      <Card style={{height: "fit-content", textAlign: "center", backgroundColor: "black", width: "105%", borderColor: "white"}}>{genre.name}
                      </Card>
                    )}
                  </div>
                </div>
                <hr></hr>
                <div style={{display: "grid"}}>
                  <button style={{height: "30px", justifySelf: "start", backgroundColor: "rgba(0, 0, 0, 0)"}} onClick={props.handleShowDesc}>
                    {props.showDesc === true ? "Hide description" : "Show description"}
                  </button>
                  {props.showDesc === true ? <p>{props.anime.synopsis}</p> : undefined}
                  <hr></hr>
                </div>
                <div className='mt-2 d-flex eachcart' style={{justifyContent: "start", gap: "20px"}}>
                  <p style={{alignSelf: "center"}}>{props.anime.price}€</p>
                  <button onClick={() => props.handleAddToCartAnime(props.anime)} style={{justifySelf: "end", backgroundColor: "rgba(0, 0, 0, 0)"}}>
                    <img style={{width: "40px"}} src={cart} alt="To Cart" />
                  </button>
                </div>
              </div>
            </div>
          </Col> 
        </Row>
  )
}

export default EachAnime
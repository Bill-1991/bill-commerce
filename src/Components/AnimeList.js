import React, { useEffect } from 'react';
import cart from "../cart.webp";
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AnimeList = ({ animeList, handleAddToCartAnime, setAnimeList }) => {

  return (
   <Container fluid id="anime">
    <Row style={{position: "relative", top: "50px", height: "150px", textAlign: "center"}}>
      <h2>Welcome! Please check out our top anime on sale this week!</h2>
    </Row>
      <Row>
       {animeList.map(anime => <Col xs={12} sm={6} md={6} lg={4} key={anime.title}>
        <div className='d-grid mb-3 all' style={{backgroundColor: "rgba(0, 10, 0, 0.7)", color: "white", height: "30vh", gridTemplateColumns: "35% 65%"}}>
          <img style={{width: "100%", height: "30vh"}} src={anime.images.jpg.image_url} alt={anime.title} />
         <div className='d-grid' style={{ textAlign: "center"}}>
          <h6>{anime.title}</h6>
          <p>{anime.synopsis.slice(0, 60)}...</p>
          <Link to={"/anime/" + anime.title}><button>See more</button></Link>
          <div className='d-grid' style={{width: "100%", gridTemplateColumns: "50% 50%", alignSelf: "end"}}>
           <h4 style={{alignSelf: "end", justifySelf: "center"}}>{anime.price}€</h4>
           <button onClick={() => handleAddToCartAnime(anime)} style={{justifySelf: "end", backgroundColor: "rgba(0, 0, 0 , 0)"}}><img style={{width: "40px"}} src={cart} alt="To Cart" /></button>
          </div>
         </div> 
        </div>
        </Col>)}
      </Row>
    </Container>
  )
}
export default AnimeList;

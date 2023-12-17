import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import cart from "../assets/cart.webp";
import glass from "../assets/glass.png";

const TopAnime = ({ searchValue, topAnime, handleAddToCartTop, handleSearch, handleSearchValue }) => {
  return (
    <Container id="topanime" fluid >
      <Row className='d-grid mt-5' style={{gridTemplateColumns: "50% 50%", position: "relative", textAlign: "center"}}>
      <div className="d-flex" style={{gap: "10px"}}>
      <Link to="/anime"><button  style={{backgroundColor: "rgba(0,0,0,0)", color: "aqua", border: "none"}}>All</button></Link>
      <Link to="/anime/topanime"><button style={{backgroundColor: "rgba(0,0,0,0)", color: "gold", border: "none"}}>Top</button></Link>
      </div>
      <div style={{display: "flex", width: "100%", height: "30px", justifyContent: "end"}}>
        <textarea value={searchValue} onChange={handleSearchValue} style={{width: "70%"}} placeholder="Search"></textarea>
        <Link to="/anime/search"><button onClick={handleSearch} style={{width: "40px"}}><img style={{width: "100%", height: "100%"}} src={glass} alt="magnifying glass"/></button></Link>
      </div>
    </Row>
    <hr></hr>
      <Row className='topAnime'>
       {topAnime.map(anime => <Col xs={12} sm={6} md={6} lg={4} key={anime.title}>
        <div className='d-grid mb-3 all' style={{ maxHeight: "200px", backgroundColor: "rgba(0, 10, 0, 0.7)", color: "white", height: "fit-content", gridTemplateColumns: "35% 65%"}}>
          <img style={{width: "100%",height: "100%", maxHeight: "200px"}} src={anime.images.jpg.image_url} alt={anime.title} />
         <div className='d-grid' style={{ textAlign: "center"}}>
          <h6>{anime.title}</h6>
          <p>{anime.synopsis.slice(0, 60)}...</p>
          <Link to={"/anime/topanime/" + anime.title}><button>See more</button></Link>
          <div className='d-grid' style={{width: "100%", gridTemplateColumns: "50% 50%", alignSelf: "end"}}>
           <h4 style={{alignSelf: "end", justifySelf: "center"}}>{anime.price}€</h4>
           <button onClick={() => handleAddToCartTop(anime)} style={{justifySelf: "end", backgroundColor: "rgba(0, 0, 0 , 0)", border: "none"}}><img style={{width: "40px"}} src={cart} alt="To Cart" /></button>
          </div>
         </div> 
        </div>
        </Col>)}
      </Row>
      </Container>
  )
}

export default TopAnime
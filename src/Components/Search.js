import React from 'react'
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap"
import cart from "../cart.webp"


const Search = (searchAnime, handleAddToCartSearch) => {
  console.log(searchAnime.searchAnime)
  return (
    <Row id="search" className='animelist'>
       {searchAnime.searchAnime.map(anime => <Col xs={12} sm={6} md={6} lg={4} key={anime.title}>
        <div className='d-grid mb-3 all' style={{backgroundColor: "rgba(0, 10, 0, 0.7)", color: "white", height: "fit-content", gridTemplateColumns: "35% 65%"}}>
          <img style={{width: "100%",height: "100%"}} src={anime.images.jpg.image_url} alt={anime.title} />
         <div className='d-grid' style={{ textAlign: "center"}}>
          <h6>{anime.title}</h6>
          <p>{anime.synopsis.slice(0, 60)}...</p>
          <Link to={"/anime/search/" + anime.title}><button>See more</button></Link>
          <div className='d-grid' style={{width: "100%", gridTemplateColumns: "50% 50%", alignSelf: "end"}}>
           <h4 style={{alignSelf: "end", justifySelf: "center"}}>{anime.price}€</h4>
           <button onClick={() => handleAddToCartSearch(anime)} style={{justifySelf: "end", backgroundColor: "rgba(0, 0, 0 , 0)"}}><img style={{width: "40px"}} src={cart} alt="To Cart" /></button>
          </div>
         </div> 
        </div>
        </Col>)}
      </Row>
  )
}

export default Search
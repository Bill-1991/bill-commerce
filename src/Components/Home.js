import React, { useEffect, useState } from 'react'
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom"
import cart from "../cart.webp"
import allChars from "../allchars.jpg"

const Home = ({ topAnime, handleAddToCartTop, loggedIn, loggedInUser }) => {
  const [count, setCount] = useState(0)

  setTimeout(() => {
    if (count === 3){
      setCount(0)
    }else {
      setCount(count + 1)
    }
  }, 3000)

  return (
    <Row className="home" style={{position: "fixed", top: "0", backgroundImage: `url(${allChars})`, backgroundSize: "cover", height: "100vh", width: "100%"}} id="/">
          <div className="slider" >
          <h4 className="slide" style={{display: count >= 0 && count < 1 ? "block" : "none", color: "rgba(0, 0, 0, 1)"}}>
              Everything a hardcore fan should have in his collection is here!!!
            </h4>
            <h4 className="slide" style={{display: count >= 1 && count < 2 ? "block" : "none",color: "rgba(0, 0, 0, 1)"}}>
              Everything a hardcore!!!
            </h4>
            <h4 className="slide" style={{display: count >= 2 && count < 3 ? "block" : "none", color: "rgba(0, 0, 0, 1)"}}>
              Everything!!!
            </h4>
          </div>
    </Row>
  )
}

export default Home


/* <Row style={{position: "relative", top: "50px", height: "150px", textAlign: "center"}}>
      <h2>Welcome {loggedIn === true ? loggedInUser.username : undefined}! Please check out our top anime on sale this week!</h2>
    </Row> */

/*<Row>
{topAnime.map(anime => <Col xs={12} sm={6} md={6} lg={4} key={anime.title}>
  <div className='d-grid mb-3 all' style={{backgroundColor: "rgba(0, 10, 0, 0.7)", color: "white", height: "30vh", gridTemplateColumns: "35% 65%"}}>
    <img style={{width: "100%", height: "30vh"}} src={anime.images.jpg.image_url} alt={anime.title} />
   <div className='d-grid' style={{ textAlign: "center"}}>
    <h6 style={{color: "rgba(200, 100, 180, 1)"}}>{anime.title}</h6>
    <p>{anime.synopsis.slice(0, 60)}...</p>
    <Link to={"/anime/" + anime.title}><button>See more</button></Link>
    <div className='d-grid' style={{width: "100%", gridTemplateColumns: "50% 50%", alignSelf: "end"}}>
     <h4 style={{alignSelf: "end", justifySelf: "center", color: "rgba(200, 100, 180, 1)"}}>{anime.price}€</h4>
     <button onClick={() => handleAddToCartTop(anime)} style={{justifySelf: "end", backgroundColor: "blue"}}><img style={{width: "40px"}} src={cart} alt="To Cart" /></button>
    </div>
   </div> 
  </div>
  </Col>)} */
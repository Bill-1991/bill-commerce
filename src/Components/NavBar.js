import React from 'react'
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"
import audio from "../audio.mp3"
import navCart from "../navCart.png"

const NavBar = (props) => {
  return (
      <Navbar className='d-grid nav' sticky="top" style={{backgroundColor: "rgba(100, 100, 255, 0.6)", gridTemplateColumns: "50% 35% 15%"}}>
        <div className='gen-nav' style={{alignSelf: props.collapse === false ? "center" : "start"}}>
          <h4 style={{justifySelf: "end"}}>{"Anim ( E ) - Quality"}</h4>
         <div className='d-flex' style={{gap: "5px", alignSelf: props.collapse === false ? "center" : "start"}}>
          <Link to="/"><Button className="gohome">Home</Button></Link>
          <Link to="/anime"><Button>Animelist</Button></Link>
         </div>
        </div>

        <div className='d-flex' style={{justifySelf: "end", gap: "20px",  alignSelf: props.collapse === false ? "center" : "start"}}>
        <Link to="/cart" style={{position: "relative"}}>
          <div style={{backgroundColor: "white", borderRadius: "100%", height: "30px", width: "30px", position: "absolute", left: "-30px"}}>
          <p style={{color: "red", fontSize: '20px', position: "absolute", left: "4px", top: "0"}}>{props.basketItems.length}</p>
          </div>
          <img src={navCart} alt="Cart" style={{position: "relative", width: "30px", height: "30px", justifySelf: "end"}} />
        </Link>
        <button onClick={props.handleSound} style={{justifySelf: "end", border: "none", color: props.sound === false ? "red" : "green"}}> <audio id="audio" src={audio} />{props.sound === false ? "Sound: OFF" : "Sound: ON"}</button>
        </div>

        {props.loggedInUser.loggedIn === false ? <div className="d-flex enter" style={{justifyContent: "end"}}>
      <Link to="/signin"><button>Sign up</button></Link>
      <Link to="/login"><button>Log in</button></Link></div>
      : <div className='loggedinnav' style={{alignItems: "center", justifySelf: "end"}}>
             <div className='nav-collapse'>
             <button onClick={props.handleCollapse} style={{border: "none"}}><img style={{width: "52px", height: "52px", borderRadius: "100%"}} src={props.image} alt="me"/></button>
             <div className="on-collapse" style={{display: props.collapse === false ? "none" : "grid"}}>
             <Link to="/"><Button style={{position: "relative", border: "none", right: "20px"}}><p>Profile</p></Button></Link>
             <Link to="/"><Button style={{position: "relative", border: "none", right: "20px"}}><p>Stuff</p></Button></Link>
             <Link to="/"><Button style={{position: "relative", border: "none", right: "20px"}} onClick={props.handleLoggedOut}><p>Log out</p></Button></Link> 
             </div>
             </div>
        </div>}
      </Navbar>
  )
}

export default NavBar
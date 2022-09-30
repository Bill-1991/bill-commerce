import React from 'react'
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom"
import audio from "../audio.mp3"
import navCart from "../navCart.png"

const NavBar = (props) => {
  return (
    
      <Navbar sticky="top" className='nav' style={{backgroundColor: props.collapse === false ? "rgba(100, 100, 255, 0.7)" : "rgba(100, 100, 255, 0.9)", gridTemplateColumns: "40% 35% 25%"}}>
        <div className='gen-nav' style={{position: "relative", display: "flex", alignSelf: "start"}}>
          <p className="logo" style={{fontSize: "20px", justifySelf: "end"}}>{"Anim ( E ) - Quality"}</p>
         <div className='d-flex'>
          <Link to="/"><Button className="gohome">Home</Button></Link>
          <Link to="/anime"><Button>Animelist</Button></Link>
         </div>
        </div>

        <div className='d-flex' style={{justifySelf: "end", gap: "10px",  alignSelf: "start"}}>
        <Link to="/cart" style={{position: "relative"}}>
          <div style={{backgroundColor: "white", borderRadius: "100%", height: "30px", width: "30px", position: "absolute", left: "-30px"}}>
          <p style={{color: "red", fontSize: '20px', position: "absolute", left: "4px", top: "0"}}>{props.basketItems.length}</p>
          </div>
          <img src={navCart} alt="Cart" style={{position: "relative", width: "30px", height: "30px", justifySelf: "end"}} />
        </Link>
        <button onClick={props.handleSound} style={{justifySelf: "end", border: "none", color: props.sound === false ? "red" : "green"}}> <audio id="audio" src={audio} />{props.sound === false ? "Sound: OFF" : "Sound: ON"}</button>
        </div>

        {props.loggedIn === false ? <div className="d-flex enter" style={{justifyContent: "end", alignSelf: "start"}}>
      <Link to="/signin"><button>Sign up</button></Link>
      <Link to="/login"><button>Log in</button></Link></div>
      : <div className='loggedinnav' style={{display: "grid", justifySelf: "center", alignSelf: "start"}}>
             <button onClick={props.handleCollapse} style={{border: "none", justifySelf: "center", position: "relative"}}><img style={{width: "40px", height: "40px", borderRadius: "100%"}} src={props.image.data} alt="me"/></button>
             <div className="navcollapse" style={{display: props.collapse === false ? "none" : "grid"}}>
             <Link to="/"><Button style={{position: "relative", border: "none"}}><p>Profile</p></Button></Link>
             <Link to="/"><Button style={{position: "relative", border: "none"}} onClick={props.handleLoggedOut}><p>Log out</p></Button></Link> 
             </div>
        </div>}
      </Navbar>
  )
}

export default NavBar
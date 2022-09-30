import React from 'react'
import {Navbar, Nav, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import navCart from "../navCart.png"
import audio from "../audio.mp3"

const NavMob = (props) => {
  return (
    <Navbar sticky="top" className="navmob" style={{backgroundColor: props.navCollapse === false ? "rgba(100, 100, 255, 0.7)" : "rgba(100, 100, 255, 0.9)", gridTemplateColumns: "80% 20%" }} expand="lg">
      <div className='d-flex gen-nav-mob' style={{alignSelf: "start", justifyItems: "start"}}>
          <p className='LOGO' style={{alignSelf: "start", fontSize: "18px", position: "relative", left: "0"}}>{"Anim(E)-Quality"}</p>
         <div className='d-flex' style={{alignSelf: "start", justifyItems: "start"}}>
          <Link to="/"><Button className="gohome">Home</Button></Link>
          <Link to="/anime"><Button>Animelist</Button></Link>
         </div>
        </div>
        <div className='d-grid'>
        <Navbar.Toggle onClick={props.handleNavCollapse} aria-controls="basic-navbar-nav" style={{border: "none", justifySelf: "center", position: "relative", left: "10px"}}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-grid me-auto" style={{justifyContent: "end", position: "relative"}}>
          {props.loggedIn === false ? <div style={{justifySelf: "center"}} className="d-grid mb-3 entermob">
          <Link className="mt-3" to="/signin"><button>Sign up</button></Link>
          <Link to="/login"><button>Log in</button></Link>
          <hr style={{color: "black"}}></hr>
          </div>
          
      : <div className='mt-3 loggedinnavmob' style={{justifySelf: "center"}}>
        <Link to="/profile"><button style={{border: "none"}}><img style={{width: "52px", height: "52px", borderRadius: "100%"}} src={props.image} alt="me"/></button></Link>
        <hr style={{color: "black"}}></hr>
        </div>}
            <div className='d-grid' style={{gap: "10px"}}>
        <Link className='d-grid cart' to="/cart" style={{position: "relative", justifySelf: "end", right: "15px"}}>
          <div style={{backgroundColor: "white", borderRadius: "100%", height: "30px", width: "30px", position: "absolute", left: "-30px", justifySelf: "center"}}>
          <p style={{color: "red", fontSize: '20px', position: "absolute", left: "4px", top: "0"}}>{props.basketItems.length}</p>
          </div>
          <img src={navCart} alt="Cart" style={{position: "relative", width: "30px", height: "30px", justifySelf: "end"}} />
        </Link>
        <hr style={{color: "black"}}></hr>
        <button onClick={props.handleSound} style={{justifySelf: "center", border: "none", color: props.sound === false ? "red" : "green"}}> <audio id="audio" src={audio} />{props.sound === false ? "Sound: OFF" : "Sound: ON"}</button>
        {props.loggedIn === true ? 
        <div>
        <hr style={{color: "black"}}></hr>
        <Link style={{justifySelf: "center"}} to="/"><Button style={{position: "relative", border: "none"}} onClick={props.handleLoggedOut}><p>Log out</p></Button></Link>
        </div>
        : undefined}
        </div>
          </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>
  )
}

export default NavMob
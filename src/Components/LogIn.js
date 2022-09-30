import React from 'react'
import {Container, Row, Form, Button} from "react-bootstrap"


const LogIn = (props) => {
    return (
      <div id="login" style={{height: "fit-content"}}>
        <Container>
          <Row>
          <Form className='logform'>
          <Form.Group className="mb-3 logname">
              <Form.Label>Username</Form.Label>
              <Form.Control value={props.logInUserName} id="logusername" onChange={props.handleLogInUserName} placeholder="Your username">
              </Form.Control>
          </Form.Group>
          <Form.Group className='mb-3 logpass'>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={props.logInPassWord} id="logpassword" onChange={props.handleLogInPassWord} placeholder="Your password">
              </Form.Control>
          </Form.Group>
          <Button style={{justifySelf: "center"}} onClick={props.handleLoggedInSubmit}>Log In</Button>
          </Form>
          </Row>
        </Container>
      </div>
    )
  }
  
  export default LogIn
import React from 'react'
import {Container, Form, Button} from "react-bootstrap"


const SignIn = (props) => {
  
  
  return (
    <div id="signin">
    <Container>
      <Form onSubmit={props.handleSubmitUser} className='signform'>
        <Form.Group className="mb-3 signname">
            <Form.Label>This will be your username</Form.Label>
            <Form.Control type="name" value={props.userName} id="username" onChange={props.handleNameChange} placeholder="eg: Vasileios Goodfellow">
            </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3 signpass'>
            <Form.Label>This will be your password</Form.Label>
            <Form.Control type="password" value={props.passWord} id="password" onChange={props.handlePassChange} placeholder="eg: K12345k@">
            </Form.Control>
            {props.wrongPass === true ? "Password must be equal or above 7 characters and contain at least one uppercase letter, one lowerCase, one number and one special character": undefined}
        </Form.Group>
        <Form.Group className='mb-3 signemail'>
            <Form.Label>This is your e-mail</Form.Label>
            <Form.Control type="email" value={props.email} id="email" onChange={props.handleEmailChange} placeholder="e.g: altzebill@gmail.com">
            </Form.Control>
        </Form.Group>
        <Form.Label  style={{width: "50%", justifySelf: "center"}}>Upload a pic!</Form.Label>
        <Form.Control className='mb-3'onChange={props.handleImage} style={{width: "50%", justifySelf: "center"}} type="file" name="my-prof-pic" />
        <Button style={{justifySelf: "center"}} onClick={props.handleSubmitUser}>Sign in</Button>
      </Form>
      </Container>
      </div>
  )
}

export default SignIn
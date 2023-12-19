import React from 'react';
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";

const SendForm = (props) => {
    return(
    <Card className='final'>
        {props.cartSubmit === false ?    
        <div className='finalStep'>
            <div className='items'>
                {props.basketItems.map(item => 
                    <p>Title: {item.title}, Number: {item.count}, Price: {item.price * item.count + "."}</p>
                )}
                <p className='total' style={{fontSize: "20px", color: "white"}}>Total: {props.price}</p>
                <hr />
            </div>
            <div className='info'>
                <p>Name: {props.cartName}</p>
                <p>Number: {props.cartNum}</p>
                <p>Address: {props.cartAddress}</p>
                <hr />
            </div>
            <div className='d-grid btns'>
                <p>Are you sure you want to continue?</p>
                <div className='d-flex finalBtns'>
                    <button style={{width: "20%", justifySelf: "start"}} onClick={props.handleCartSend}>Back</button>
                    <button style={{width: "20%", justifySelf: "end"}} onClick={props.handleCartSubmit}>Next</button>
                </div>
            </div>
        </div>
            :
        <div style={{gap: "100px", height: "500px"}} className='d-grid thanks'>
            <button style={{position: "absolute", borderRadius: "35%", top: "20px", right: "5px", fontSize: "25px", fontWeight: "900"}} onClick={props.handleCartSend}>X</button>
            <p className='d-flex' style={{justifySelf: "center", alignSelf: "center", fontSize: "40px", fontWeight: "900"}}>Thank you!!!</p>
        </div>  
        }
    </Card> 
    )
};

export default SendForm;
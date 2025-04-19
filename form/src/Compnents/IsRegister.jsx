import React from "react";
import Form from "./Form";
import './style.css'

var userIsRegistered = false;

function IsRegister(params) {
    
    return (
        <div className="container">
          <Form isRegistered={userIsRegistered} />
        </div>
      );
}
export default IsRegister;
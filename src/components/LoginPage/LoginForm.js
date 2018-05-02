import React, { Component } from 'react';
import axios from 'axios';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};

const buttonStyle = {
  marginBottom: 0
};

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  emailChange(e){
    this.setState({email:e.target.value});
  }

  passwordChange(e){
    this.setState({password:e.target.value});
  }
  handleFormSubmit(e) {
    e.preventDefault();
    if(this.state.email && this.state.password){
      axios.get("./data.json").then(response => {
        if(response.status === "1") console.log ("login Successful");
      })
      alert("Logged in Successfully!");
    } else{
      alert("Username or Password required");
    }

  }

  render() {
    return (
      <div style={divStyle}>
          <Form horizontal className="LoginForm" id="loginForm">
            <FormGroup controlId="formEmail">
              <FormControl value={this.state.email} onChange={this.emailChange} type="email" placeholder="Email Address" />
            </FormGroup>
            <FormGroup controlId="formPassword">
              <FormControl value={this.state.password} onChange={this.passwordChange} type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup style={buttonStyle} controlId="formSubmit">
              <Button bsStyle="primary" type="submit" onClick={this.handleFormSubmit}>
                Login
              </Button>
            </FormGroup>
          </Form>
      </div>
    )
  }
}

export default LoginForm;

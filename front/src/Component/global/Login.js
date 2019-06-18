import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import URL from './API/API';
import './css/bootstrap.css';
import "./css/login.css";
import NewCollection from "../NewCollection";
import CheckCollection from "../CheckCollection";


import {GetData} from './DATA'

class Login extends Component {

constructor(props) {
    super(props);
     this.handleClick = this.handleClick.bind(this);
     this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      usuario: "",
      password: "",
      isAuthenticated: false
    }
  }

  validateForm() {
    return this.state.usuario.length > 0 && this.state.password.length > 0;
  }
   /*   ----------------------------------------------------------------------------------*/

handleLogin() {
    console.log("USUARIO: " + this.state.usuario);
    console.log("Password: " + this.state.password);
}

handleClick() {
         var passw=this.state.password;
    var user=this.state.usuario;
    user=user.toUpperCase();
    user=user.trim();
   var URL = "http://localhost:9000/login/"+user+" "+"/"+ passw;



  alert(URL)

 

/*
  5ad221aa4c5ecbd86f8ed0a9541c5724
        ----------------------------------------------------*/
       GetData(URL).then((result)=>{
        let responseJson=result;
        console.log(responseJson);
        alert(responseJson.data['id_usuario'])
        if(responseJson.data['id_usuario']!=null){
          alert("ID")
          this.state.isAuthenticated=true;
          window.location = '/collection';
        }else{
          console.log("Error de usuario, ID no identificado");
          this.state.isAuthenticated=false;
        }
        alert(responseJson)
       });

          

    }
    /*   ----------------------------------------------------------------------------------*/
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  //aqui funcion al hacer click

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <div className="titulo">
        Login
        </div>
        <form onSubmit={this.handleClick}>
          <FormGroup controlId="usuario" bsSize="large">
            <ControlLabel className="input">Usuario</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.usuario}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel className="input">Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onChange=""
          >
            Ingresar
          </Button>
        </form>
        <div id="info">
        </div>

      </div>
    );
  }
}

export default Login;
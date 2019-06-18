import React, { Component } from "react";
import { Route, Switch , Redirect } from "react-router-dom"; 
import Login from "./Login";

class GuardarRuta extends Component {
	render(){

		const {
			isAuthenticated,
		}=this.context;

		if(!isAuthenticated){
			console.log("dsdsdadadadasdasdasdsdsad");
			return <Redirect to="/" />;
		}else{
			return <Redirect to="/collection" />;

		}

		return <Route {...this.props} />;
	}
}


GuardarRuta.contextType=Login;

export default GuardarRuta;
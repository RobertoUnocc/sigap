import React, {Component} from "react";
import './global/css/App.css';
import Header from './global/Header';
import Content from './global/Login';
import Footer from './global/Footer';
class newLogin extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}
export default newLogin;
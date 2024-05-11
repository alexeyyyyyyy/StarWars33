import React, {Component} from 'react';
import "./App.css";
import Header from "./components/Header.jsx";
import Switcher from "./components/Switcher.jsx";
import Footer from "./components/Footer.jsx";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Home"
        }
    }

    changePage = currentPage => {
        this.setState({currentPage})
    }
    //Todo **/2 use Navigation
    render() {
        return (
            <div>
                <Header changePage={this.changePage}/>
                <Switcher currentPage={this.state.currentPage}/>
                <Footer changePage={this.changePage}/>
            </div>
        );
    }
}

export default App;
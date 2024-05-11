import React, {Component} from 'react';
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import Contacts from "./Contacts.jsx";
import StarWars from "./StarWars.jsx";

class Switcher extends Component {
    render() {
          switch (this.props.currentPage) {
              case 'Home':
                  return <Home/>
              case 'About':
                  return <AboutMe/>
              case'Contact':
                  return <Contacts/>
              case 'StarWars':
                  return <StarWars/>
              default:
                  return  null;
          }
    }
}

export default Switcher;
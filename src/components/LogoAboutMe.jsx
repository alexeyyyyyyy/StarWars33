import React, {Component} from 'react';
import imgLogo from "../Images/9642bf_6c350b2212294c9f98f6581218f67ea2~mv2.jpg";
class LogoAboutMe extends Component {
    render() {
        return (
            <section className="float-start me-3 w-25">
                <img className="w-100" src={imgLogo} alt="hero"/>
            </section>
        );
    }
}


export default LogoAboutMe;

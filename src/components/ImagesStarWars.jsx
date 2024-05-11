import React, { Component } from 'react';
import Image1 from "../Images/DartVeiderStarWarsOtdel.jpg";
import Image2 from "../Images/StarWarOtdelNomer2.jpeg";

class ImagesStarWars extends Component {
    render() {
        return (
            <div className=" container mt-5">
                <div className=" row">
                    <div className=" col-md-6 d-flex mb-3">
                        <img className="  img-fluid rounded align-self-stretch" src={Image1} alt="Dart Veider" />
                    </div>
                    <div className="col-md-6 d-flex mb-3">
                        <img className="img-fluid rounded align-self-stretch" src={Image2} alt="Star Wars" />
                    </div>
                </div>
            </div>
        );
    }
}

export default ImagesStarWars;

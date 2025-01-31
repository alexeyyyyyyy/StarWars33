import React, { Component } from 'react';
import friend1 from '../Images/friend1.jpg';
import friend2 from '../Images/friend2.jpg';
import friend3 from '../Images/friend3.jpg';
import friend4 from '../Images/friend4.jpg';
import friend5 from '../Images/friend5.jpg';
import friend6 from '../Images/friend6.jpg';
import friend7 from '../Images/friend7.jpg';
import friend8 from '../Images/friend8.jpg';
import friend9 from '../Images/friend9.jpg';

const friendImages = [
    friend1, friend2, friend3, friend4, friend5,
    friend6, friend7, friend8, friend9
];

class DreamTeam extends Component {
    render() {
        return (
            <section className="float-end w-50 row border mx-1">
                <h2 className="col-12 text-center">Dream Team</h2>
                {friendImages.map((image, index) => (
                    <img key={index} className="col-4 p-1" src={image} alt={`friend ${index + 1}`} />
                ))}
            </section>
        );
    }
}

export default DreamTeam;

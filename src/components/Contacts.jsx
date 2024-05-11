import React, { Component } from 'react';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });
        setTimeout(() => {
            this.setState({
                isLoading: false
            });
        }, 1000);
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className="spinner-border text-success"></div>
            );
        } else {
            return (
                <div style={{ maxWidth: "330px", margin: "auto" }}>
                    <h2 style={{ color: "aquamarine", borderBottom: "2px solid white" }}>Contact Information</h2>
                    <p><strong>Name:</strong> Luke SkyWalker</p>
                    <p><strong>Email:</strong> JAVA-56@Star-Wars.com</p>
                    <p><strong>Phone:</strong> +1 123-456-7890</p>
                    <p><strong>Address:</strong> 123 Main Street, City-Mariupol))), Country-DeadStar</p>
                </div>
            );
        }
    }
}

export default Contacts;

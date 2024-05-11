import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

    sendEmail = () => {
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.setState({ isLoading: false });
            window.open("https://mail.google.com", "_blank");
        }, 1000);
    };

    render() {
        const { isLoading } = this.state;
        return (
            <footer className="row align-items-center justify-content-center">
                <div className="btn btn-danger col-2 offset-2 h-50" onClick={this.sendEmail}>
                    {isLoading ? (
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <p className="text-center m-0">Send me an <span className="email">email</span></p>
                    )}
                </div>
            </footer>
        );
    }
}

export default Footer;


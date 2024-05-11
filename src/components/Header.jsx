import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
                <header>
                    <nav className=" mt-1 ms-0" >
                        <ul className="nav" style={{justifyContent:'space-between'}} >
                            <li onClick={() => this.props.changePage('Home')} className=" nav-item btn btn-danger mx-1" >Home</li>
                            <li onClick={() => this.props.changePage('About')} className="nav-item btn btn-danger mx-1">About me</li>
                            <li onClick={() => this.props.changePage('StarWars')} className="nav-item btn btn-danger mx-1">Star Wars</li>
                            <li onClick={() => this.props.changePage('Contact')} className="nav-item btn btn-danger mx-1">Contact</li>
                        </ul>
                    </nav>
                    <h1 className="text-center py-4">Luke Skywalker</h1>
                </header>
        );
    }
}

export default Header;
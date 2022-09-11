import React, { Component } from "react";

class OuterNavbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/"><strong>Book My Courier</strong></a>
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link" href="/login">Login</a>
                                <a className="nav-link" href="/registration">Register</a>
                                <a className="nav-link" href="#">About Us</a>
                                <a className="nav-link" href="#">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default OuterNavbar;
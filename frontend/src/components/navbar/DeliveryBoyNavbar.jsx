import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class DeliveryBoyNavbar extends Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser() {
        sessionStorage.clear();
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/deliveryboy/home"><strong>Delivery Service</strong></a>
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link" href="/customer/history">Courier History</a>
                                <a className="nav-link" href="/">Profile</a>
                                <a className="nav-link" href="#">About Us</a>
                                <a className="nav-link" href="#">Contact Us</a>
                                <p className="nav-link" style={{cursor: "pointer"}} onClick={this.logoutUser}>Logout</p>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default withRouter(DeliveryBoyNavbar);
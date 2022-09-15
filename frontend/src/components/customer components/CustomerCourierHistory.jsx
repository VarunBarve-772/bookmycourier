import React, { Component } from "react";

import CustomerService from "../../services/CustomerService";
import CustomerNavbar from "../navbar/CustomerNavbar";

class CustomerCourierHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerCouriers: []
        }
    }

    componentDidMount() {
        CustomerService.getCustomerById(sessionStorage.getItem("userId"))
        .then((response) => {
            // console.log(response.data.bookedCourier);
            this.setState({customerCouriers: response.data.bookedCourier});
        });
    }

    render() {
        return(
            <div style={{
                backgroundColor: '#D3D3D3',
              }}>
                <CustomerNavbar />
                <div className="container">
                    {this.state.customerCouriers.map(
                        courier => {
                            return (
                                <div className="card text-dark bg-light my-3" key={courier.courierId}>
                                    <div className="card-body">
                                        <h5 className="card-title">Status: {courier.courierStatus}</h5>
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="card-text">Pickup Date: {courier.courierPickupDate.slice(0,10)}</p>
                                                <p className="card-text">Pickup Address: {courier.courierPickupAdd}</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="card-text">Delivery Date: {courier.courierDeliveryDate.slice(0,10)}</p>
                                                <p className="card-text">Delivery Address: {courier.courierDeliveryAdd}</p>
                                            </div>
                                        </div> <br/>
                                        <p className="card-text">Courier Booking Date: {courier.courierBookDate.slice(0,10)}</p>
                                    </div>
                                </div>        
                            );
                        }
                    )}
                </div>
            </div>
        );
    }
}

export default CustomerCourierHistory;
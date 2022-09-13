import React, { Component } from "react";

import DeliveryBoyNavbar from "../navbar/DeliveryBoyNavbar";
import DeliveryBoyService from "../../services/DeliveryBoyService";

class DeliveryBoyHome extends Component{
    constructor(props) {
        super(props);
        this.state = {
            deliveryBoyCouriers: []
        }
    }

    componentDidMount() {
        DeliveryBoyService.getDeliveryBoyById(1)
        .then((response) => {
            this.setState({deliveryBoyCouriers: response.data.bookedCourier})
        });
    }

    render() {
        return(
            <div>
                <DeliveryBoyNavbar />
                <div className="container">
                    {this.state.deliveryBoyCouriers.map(
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

export default DeliveryBoyHome;
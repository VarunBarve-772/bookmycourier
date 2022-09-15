import React, { Component } from "react";

import DeliveryBoyNavbar from "../navbar/DeliveryBoyNavbar";
import DeliveryBoyService from "../../services/DeliveryBoyService";
import BookedCourierService from "../../services/BookedCourierService";

class DeliveryBoyHome extends Component{
    constructor(props) {
        super(props);
        this.state = {
            deliveryBoyCouriers: [],
            status: '',
            courierId: '',
        }

        this.updateStatus = this.updateStatus.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
    }

    componentDidMount() {
        DeliveryBoyService.getDeliveryBoyById(1)
        .then((response) => {
            this.setState({deliveryBoyCouriers: response.data.bookedCourier})
        });
    }

    changeStatusHandler = (event, courierId) => {
        this.setState({
            status: event.target.value,
            courierId: courierId
        });
    }

    updateStatus = () => {
        let courier = {
            courierStatus: this.state.status
        }
        BookedCourierService.updateStatus(courier, this.state.courierId)
        .then((response) => {
            console.log(response.status);
            window.location.reload();
        })
    }

    render() {
        return(
            <div style={{
                backgroundColor: '#D3D3D3',
              }}>
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
                                        </div>
                                        <form>
                                            <div className="row py-2">
                                                <p className="card-text col-5">Courier Booking Date: {courier.courierBookDate.slice(0,10)}</p>

                                                <div className="col-7">
                                                    <label className="form-label col-2 mx-1" htmlFor='statusList'>Update Status</label>
                                                    <select id='statusList' className='col-3' onChange={(e) => {
                                                    this.changeStatusHandler(e, courier.courierId)
                                                }}>
                                                        <option disabled selected={true}>Select Status</option>
                                                        <option value={"Picked Up"}>Picked Up</option>
                                                        <option value={"On The Way"}>On The Way</option>
                                                        <option value={"Delivered"}>Delivered</option>
                                                    </select>
                                                    <button type="button" className="btn btn-primary col-2 mx-5" onClick={this.updateStatus}>Update</button>
                                                </div>

                                            </div>
                                        </form>
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
import React, { Component } from "react";

import ManagerNavbar from "../navbar/ManagerNavbar";
import ManagerService from "../../services/ManagerService";
import DeliveryBoyService from "../../services/DeliveryBoyService";
import BookedCourierService from "../../services/BookedCourierService";

class ManagerHome extends Component{
    constructor(props) {
        super(props);
        this.state = {
            courierList: [],
            deliveryBoyList: [],
            courierId: '',
            deliveryBoyId: '',
        }

        this.updateDeliveryBoy = this.updateDeliveryBoy.bind(this);
        this.changerDeliveryBoyHandler = this.changerDeliveryBoyHandler.bind(this);
        this.orderAccept = this.orderAccept.bind(this);
        this.orderReject = this.orderReject.bind(this);
    }

    componentDidMount() {
        ManagerService.getManagerById(sessionStorage.getItem("userId"))
        .then((response) => {
            let manager = response.data;
            // console.log(manager);
            if(manager.center) {
                this.setState({courierList: response.data.center.bookedCourier})
            } else {
                this.setState({courierList: []});
            }
        })

        DeliveryBoyService.getAllDeliveryBoy()
        .then((res) => {
            this.setState({deliveryBoyList: res.data});
        })
    }

    changerDeliveryBoyHandler = (event, courierId) => {
        this.setState({
            courierId: courierId,
            deliveryBoyId: event.target.value
        });
    }

    updateDeliveryBoy = () => {
        DeliveryBoyService.addCourier(this.state.deliveryBoyId, this.state.courierId)
        .then((response) => {
            window.location.reload();
        })
    }

    orderAccept = (event, courierId) => {
        let price = prompt("Please Enter Courier Price");
        if(price === null) {

        } else {
            let courier = {
                courierPrice: price,
                courierComment: '',
                courierStatus: "Accepted"
            }

            BookedCourierService.acceptCourier(courier, courierId)
            .then((response) => {
                console.log(response.data);
                window.location.reload();
            })
        }
    }

    orderReject = (event, courierId) => {
        let newComment = prompt("Are you sure you want to Reject? If yes then please add a comment!!!!");
        console.log(newComment);
        if(newComment === null) {

        } else {
            let courier = {
                courierComment: newComment,
                courierPrice: 0,
                courierStatus: "Rejected"
            }
            console.log(courier);
            BookedCourierService.rejectCourier(courier, courierId)
            .then((response) => {
                console.log(response.data);
                window.location.reload();
            })
        }

    }

    render() {
        return(
            <div>
                <ManagerNavbar />
                <div className="container">
                    {this.state.courierList.map(
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
                                        <div className="row">
                                            <p className="card-text col-6">Courier Booking Date: {courier.courierBookDate.slice(0,10)}</p>
                                            <div className="col-6">
                                                <button className="btn btn-success col-2 mx-2" onClick={(e)=>{
                                                    this.orderAccept(e, courier.courierId);
                                                } }>Accept</button>
                                                <button className="btn btn-danger col-2 mx-2" onClick={(e)=>{
                                                    this.orderReject(e, courier.courierId);
                                                } }>Reject</button>
                                            </div>
                                        </div>

                                        <form>
                                            <div className='row my-3'>
                                                <label className="form-label col-2" htmlFor='centerList'>Update Delivery Boy</label>
                                                <select id='deliveryBoyList' className='col-2' onChange={(e) => {
                                                    this.changerDeliveryBoyHandler(e, courier.courierId)
                                                }}>
                                                    <option disabled selected={true}>Select Delivery Boy</option>
                                                    {this.state.deliveryBoyList.map((deliveryBoy) => {
                                                        return(
                                                            <option key={deliveryBoy.deliveryBoyId} value={deliveryBoy.deliveryBoyId}>{deliveryBoy.deliveryBoyName}</option>
                                                        ); 
                                                    })}
                                                </select>
                                                <button type="button" className="btn btn-primary col-2 mx-5" onClick={this.updateDeliveryBoy}>Update</button>
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

export default ManagerHome;
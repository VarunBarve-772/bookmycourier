import React, { Component } from "react";

import BookedCourierService from "../../services/BookedCourierService";

class CustomerHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courierBookDate: new Date().toLocaleDateString(),
            courierPickupAdd: '',
            courierDeliveryAdd: '',
            courierPickupDate: '',
            courierDeliveryDate: '',
            courierStatus: 'Booked'
        }
        this.changePickupAddHandler = this.changePickupAddHandler.bind(this);
        this.changeDeliveryAddHandler = this.changeDeliveryAddHandler.bind(this);
        this.changePickupDateHandler = this.changePickupDateHandler.bind(this);
        this.changeDeliveryDate = this.changeDeliveryDate.bind(this);
        this.saveCourier = this.saveCourier.bind(this);
    }

    changePickupAddHandler = (event) => {
        this.setState({courierPickupAdd: event.target.value});
    }

    changeDeliveryAddHandler = (event) => {
        this.setState({courierDeliveryAdd: event.target.value});
    }

    changePickupDateHandler = (event) => {
        this.setState({courierPickupDate: event.target.value});
        this.changeDeliveryDate(event.target.value);
    }

    changeDeliveryDate = (pickupDate) => {
        let deliDate = new Date(pickupDate);
        deliDate.setDate(deliDate.getDate() + (Math.random() * 6) + 6);
        this.setState({courierDeliveryDate: deliDate.toLocaleDateString()});
        // console.log(deliveryDate.toLocaleDateString());

    }

    saveCourier = (e) => {
        e.preventDefault();
        let courier = {
            courierBookDate: this.state.courierBookDate,
            courierPickupAdd: this.state.courierPickupAdd,
            courierDeliveryAdd: this.state.courierDeliveryAdd,
            courierPickupDate: this.state.courierPickupDate,
            courierDeliveryDate: this.state.courierDeliveryDate,
            courierStatus: this.state.courierStatus
        }

        console.log(courier);
        BookedCourierService.saveCourier(courier)
        .then((response) => {
            console.log(response.status);
        })
    }

    render() {
        return (
            <div>
                <h1>Book Your Courier</h1>
                <form className="col-4">
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Pickup Address</label>
                        <input type="text" id="pickupAddress" className="form-control" value={this.state.courierPickupAdd} onChange={this.changePickupAddHandler} />
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Delivery Address</label>
                        <input type="text" id="deliveryAdd" className="form-control" value={this.state.courierDeliveryAdd} onChange={this.changeDeliveryAddHandler} />
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Pickup Date</label>
                        <input type="date" id="pickupDate" className="form-control" value={this.state.courierPickupDate} onChange={this.changePickupDateHandler} />
                        
                    </div>

                    <button type="button" className="btn btn-primary btn-block mb-4" onClick={this.saveCourier}>Register Manager</button>

                </form>
            </div>
        )
    }
}

export default CustomerHome;
import React, { Component } from "react";

class DeliveryBoyRegister extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Register Delivery Boy</h1>
                <form className="col-4">
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Delivery Boy Name</label>
                        <input type="text" id="deliveryBoyName" className="form-control" />
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Delivery Boy Email</label>
                        <input type="email" id="deliveryBoyEmail" className="form-control" />
                        
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Delivery Boy Mobile Number</label>
                        <input type="number" id="deliveryBoyMobile" className="form-control" />
                        
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Delivery Boy User Name</label>
                        <input type="text" id="deliveryBoyUsername" className="form-control" />
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Delivery Boy Password</label>
                        <input type="password" id="deliveryBoyPass" className="form-control" />
                       
                    </div>

                    <button type="button" className="btn btn-primary btn-block mb-4">Register Delivery Boy</button>

                </form>
            </div>
        )
    }
}
export default DeliveryBoyRegister;
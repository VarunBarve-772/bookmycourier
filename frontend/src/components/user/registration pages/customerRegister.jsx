import React, { Component } from "react";

class CustomerRegister extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Register Customer</h1>
                <form className="col-4">
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Customer Name</label>
                        <input type="text" id="custName" className="form-control" />
                        
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Customer Date Of Birth</label>
                        <input type="date" id="custDOB" className="form-control" />
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Customer Email</label>
                        <input type="email" id="custEmail" className="form-control" />
                        
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Customer Mobile Number</label>
                        <input type="number" id="custMobile" className="form-control" />
                        
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Customer Address</label>
                        <input type="text" id="custAdd" className="form-control" />
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Customer User Name</label>
                        <input type="text" id="custUsername" className="form-control" />
                       
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Customer Password</label>
                        <input type="password" id="custPass" className="form-control" />
                       
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Customer Wallet</label>
                        <input type="number" id="custWallet" className="form-control" />
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Customer Pin Code</label>
                        <input type="number" id="custPin" className="form-control" />
                        
                    </div>

                    <button type="button" className="btn btn-primary btn-block mb-4">Register Customer</button>

                </form>
            </div>
        )
    }
}
export default CustomerRegister;
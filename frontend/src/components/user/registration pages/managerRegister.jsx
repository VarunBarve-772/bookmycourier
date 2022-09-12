import React, { Component } from "react";

class ManagerRegister extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Register Manager</h1>
                <form className="col-4">
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Manager Name</label>
                        <input type="text" id="managerName" className="form-control" />
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Manager Email</label>
                        <input type="email" id="managerEmail" className="form-control" />
                        
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Manager Mobile Number</label>
                        <input type="number" id="managerMobile" className="form-control" />
                        
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Manager User Name</label>
                        <input type="text" id="managerUsername" className="form-control" />
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Manager Password</label>
                        <input type="password" id="managerPass" className="form-control" />
                       
                    </div>

                    <button type="button" className="btn btn-primary btn-block mb-4">Register Manager</button>

                </form>
            </div>
        )
    }
}
export default ManagerRegister;
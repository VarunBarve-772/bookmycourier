import React, { Component } from "react";

import CustomerService from "../../services/CustomerService";
import CustomerNavbar from "../navbar/CustomerNavbar";

class CustomerProfile extends Component{
    constructor(props){
        super(props);
        this.state={
            customer : {}
        }

    }

    componentDidMount(){
        CustomerService.getCustomerById(sessionStorage.getItem("userId"))
        .then((response) =>{
            this.setState({customer : response.data})
        })
    }

    render(){
        return(
            <div>
                <CustomerNavbar />
                <br /><br />
                <div className="card col-md-6 offset-md-3 ">
                    <h3 className="text-center">View Customer Profile</h3>
                        <div className="card-body">
                            <div className="row">
                                <label className="col-6"><b>Customer Name :</b></label>
                                <div className="col-6">{this.state.customer.custName}</div>
                            </div>
                            <div className="row">
                                <label className="col-6"><b>Customer Email :</b></label>
                                <div className="col-6">{this.state.customer.custEmail}</div>
                            </div>
                            <div className="row">
                                <label className="col-6"><b>Customer Mobile :</b></label>
                                <div className="col-6">{this.state.customer.custMobile}</div>
                            </div>
                            <div className="row">
                                <label className="col-6"><b>Customer User Name :</b></label>
                                <div className="col-6">{this.state.customer.custUsername}</div>
                            </div>
                            <div className="row">
                                <label className="col-6"><b>Customer Date Of Birth :</b></label>
                                <div className="col-6">{this.state.customer.custDOB}</div>
                            </div>
                            <div className="row">
                                <label className="col-6"><b>Customer Address :</b></label>
                                <div className="col-6">{this.state.customer.custAdd}</div>
                            </div>
                            <div className="row">
                                <label className="col-6"><b>Customer Wallet :</b></label>
                                <div className="col-6">{this.state.customer.custWallet}</div>
                            </div>
                            <div className="row">
                                <label className="col-6"><b>Customer Pin Code :</b></label>
                                <div className="col-6">{this.state.customer.custPin}</div>
                            </div>
                        </div>
                </div>
            </div>

        )
    }
}

export default CustomerProfile;
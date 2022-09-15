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
        console.log("snklnlv");
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
                                <label><b>Customer Name :</b></label>
                                <div style={{marginLeft:"10px"}}>{this.state.customer.custName}</div>
                            </div>
                            <div className="row">
                                <label><b>Customer Email :</b></label>
                                <div style={{marginLeft:"10px"}}>{this.state.customer.custEmail}</div>
                            </div>
                            <div className="row">
                                <label><b>Customer Mobile :</b></label>
                                <div style={{marginLeft:"10px"}}>{this.state.customer.custMobile}</div>
                            </div>
                            <div className="row">
                                <label><b>Customer User Name :</b></label>
                                <div style={{marginLeft:"10px"}}>{this.state.customer.custUsername}</div>
                            </div>
                            <div className="row">
                                <label><b>Customer Date Of Birth :</b></label>
                                <div style={{marginLeft:"10px"}}>{this.state.customer.custDOB}</div>
                            </div>
                            <div className="row">
                                <label><b>Customer Address :</b></label>
                                <div style={{marginLeft:"10px"}}>{this.state.customer.custAdd}</div>
                            </div>
                            <div className="row">
                                <label><b>Customer Wallet :</b></label>
                                <div style={{marginLeft:"10px"}}>{this.state.customer.custWallet}</div>
                            </div>
                            <div className="row">
                                <label><b>Customer Pin Code :</b></label>
                                <div style={{marginLeft:"10px"}}>{this.state.customer.custPin}</div>
                            </div>
                            {/* <div className="row">
                                <button type="button" className="btn btn-primary"
                                onClick={()=>this.goBack}>
                                    Customer Home
                                </button>
                            </div> */}
                        </div>
                </div>
            </div>

        )
    }
}

export default CustomerProfile;
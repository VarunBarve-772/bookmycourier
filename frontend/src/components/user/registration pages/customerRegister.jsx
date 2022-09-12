import React, { Component } from "react";
import CustomerService from "../../../services/CustomerService";

class CustomerRegister extends Component {
    constructor(props) {
        super(props);
        this.state={
            custName:'',
            custDOB:'',
            custEmail:'',
            custMobile:0,
            custAdd:'',
            custUsername:'',
            custPass:'',
            custWallet:0,
            custPin:0


        }
        this.changeCustomerNameHandler=this.changeCustomerNameHandler.bind(this);
        this.changeCustomerEmailHandler=this.changeCustomerEmailHandler.bind(this);
        this.changeCustomerMobileHandler=this.changeCustomerMobileHandler.bind(this);
        this.changeCustomerUsernameHandler=this.changeCustomerUsernameHandler.bind(this);
        this.changeCustomerPassHandler=this.changeCustomerPassHandler.bind(this);
        this.changeCustomerDOBHandler=this.changeCustomerDOBHandler.bind(this);
        this.changeCustomerAddHandler=this.changeCustomerAddHandler.bind(this);
        this.changeCustomerWalletHandler=this.changeCustomerWalletHandler.bind(this);
        this.changeCustomerPinHandler=this.changeCustomerPinHandler.bind(this);
        this.saveCustomer=this.saveCustomer.bind(this)
    }

    changeCustomerNameHandler = (event) => {
        this.setState({custName: event.target.value});
    }

    changeCustomerEmailHandler = (event) => {
        this.setState({custEmail: event.target.value});
    }

    changeCustomerMobileHandler = (event) => {
        this.setState({custMobile: event.target.value});
    }

    changeCustomerUsernameHandler = (event) => {
        this.setState({custUsername: event.target.value});
    }

    changeCustomerPassHandler = (event) => {
        this.setState({custPass: event.target.value});
    }

    changeCustomerDOBHandler = (event) => {
        this.setState({custDOB: event.target.value});
    }

    changeCustomerAddHandler = (event) => {
        this.setState({custAdd: event.target.value});
    }

    changeCustomerPinHandler = (event) => {
        this.setState({custPin: event.target.value});
    }

    changeCustomerWalletHandler = (event) => {
        this.setState({custWallet: event.target.value});
    }


    saveCustomer = (e) => {
        e.preventDefault();
        let customer = {
            custName:this.state.custName,
            custEmail:this.state.custEmail,
            custMobile:this.state.custMobile,
            custUsername:this.state.custUsername,
            custPass:this.state.custPass
           
        }
        console.log(customer);

        CustomerService.saveCustomer(customer)
        .then((response) => {
            console.log(response.status);
        });
        
    }


    render() {
        return (
            <div>
                <h1>Register Customer</h1>
                <form className="col-4">
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Customer Name</label>
                        <input type="text" id="custName" className="form-control" value={this.state.custName} onChange={this.changeCustomerNameHandler} />
                        
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Customer Date Of Birth</label>
                        <input type="date" id="custDOB" className="form-control" value={this.state.custDOB} onChange={this.changeCustomerDOBHandler}/>
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Customer Email</label>
                        <input type="email" id="custEmail" className="form-control" value={this.state.custEmail} onChange={this.changeCustomerEmailHandler}/>
                        
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Customer Mobile Number</label>
                        <input type="number" id="custMobile" className="form-control" value={this.state.custMobile} onChange={this.changeCustomerMobileHandler}/>
                        
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Customer Address</label>
                        <input type="text" id="custAdd" className="form-control" value={this.state.custAdd} onChange={this.changeCustomerAddHandler}/>
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Customer User Name</label>
                        <input type="text" id="custUsername" className="form-control" value={this.state.custUsername} onChange={this.changeCustomerUsernameHandler}/>
                       
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Customer Password</label>
                        <input type="password" id="custPass" className="form-control" value={this.state.custPass} onChange={this.changeCustomerPassHandler}/>
                       
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Customer Wallet</label>
                        <input type="number" id="custWallet" className="form-control" value={this.state.custWallet} onChange={this.changeCustomerWalletHandler}/>
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Customer Pin Code</label>
                        <input type="number" id="custPin" className="form-control" value={this.state.custPin} onChange={this.changeCustomerPinHandler}/>
                        
                    </div>

                    <button type="button" className="btn btn-primary btn-block mb-4" onClick={this.saveCustomer}>Register Customer</button>

                </form>
            </div>
        )
    }
}
export default CustomerRegister;
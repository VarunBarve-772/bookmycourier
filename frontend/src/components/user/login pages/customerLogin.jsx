import React, { Component } from "react";
import  { withRouter } from 'react-router-dom';

import CustomerService from "../../../services/CustomerService";

class CustomerLogin extends Component {
    constructor(props) {
        super(props);
        this.state={
           custUsername:'',
           custPass:''
        }
        this.changeCustomerUsernameHandler=this.changeCustomerUsernameHandler.bind(this);
        this.changeCustomerPassHandler=this.changeCustomerPassHandler.bind(this);
        this.loginCustomer=this.loginCustomer.bind(this)
    }


    changeCustomerUsernameHandler = (event) => {
        this.setState({custUsername: event.target.value});
    }

    changeCustomerPassHandler = (event) => {
        this.setState({custPass: event.target.value});
    }

    loginCustomer = (e) => {
        e.preventDefault();
        let customer = {
            custUsername:this.state.custUsername,
            custPass:this.state.custPass
           
        }

        CustomerService.loginCustomer(customer)
        .then((response) => {
            if(response.status === 200) {
                // console.log(response.data);
                sessionStorage.setItem("userId", response.data.custId);
                sessionStorage.setItem("userType", "Customer");
                this.props.history.push('/customer/home');
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Customer Login</h1>
                <form className="col-4">
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Username</label>
                        <input type="email" id="form2Example1" className="form-control" value={this.state.custUsername} onChange={this.changeCustomerUsernameHandler} />
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                        <input type="password" id="form2Example2" className="form-control" value={this.state.custPass} onChange={this.changeCustomerPassHandler}/>
                        
                    </div>

                    {/*<div className="row mb-4">
                        <div className="col">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>*/}

                    <button type="button" className="btn btn-primary btn-block mb-4" onClick={this.loginCustomer}>Sign in</button>

                    <div className="text-center">
                        <p>Not a member? <a href="/registration">Register</a></p>
                    </div>
                </form>
            </div>
        )
    }
}
export default withRouter(CustomerLogin);
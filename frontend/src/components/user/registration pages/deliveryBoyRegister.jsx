import React, { Component } from "react";
import DeliveryBoyService from "../../../services/DeliveryBoyService";

class DeliveryBoyRegister extends Component {
    constructor(props) {
        super(props);
        this.state={
            deliveryBoyName:'',
            deliveryBoyEmail:'',
            deliveryBoyMobile:0,
            deliveryBoyUsername:'',
            deliveryBoyPass:''
        }
        this.changeDeliveryBoyNameHandler=this.changeDeliveryBoyNameHandler.bind(this);
        this.changeDeliveryBoyEmailHandler=this.changeDeliveryBoyEmailHandler.bind(this);
        this.changeDeliveryBoyMobileHandler=this.changeDeliveryBoyMobileHandler.bind(this);
        this.changeDeliveryBoyUsernameHandler=this.changeDeliveryBoyUsernameHandler.bind(this);
        this.changeDeliveryBoyPassHandler=this.changeDeliveryBoyPassHandler.bind(this);
        this.saveDeliveryBoy=this.saveDeliveryBoy.bind(this)
    }

    changeDeliveryBoyNameHandler = (event) => {
        this.setState({deliveryBoyName: event.target.value});
    }

    changeDeliveryBoyEmailHandler = (event) => {
        this.setState({deliveryBoyEmail: event.target.value});
    }

    changeDeliveryBoyMobileHandler = (event) => {
        this.setState({deliveryBoyMobile: event.target.value});
    }

    changeDeliveryBoyUsernameHandler = (event) => {
        this.setState({deliveryBoyUsername: event.target.value});
    }

    changeDeliveryBoyPassHandler = (event) => {
        this.setState({deliveryBoyPass: event.target.value});
    }


    saveDeliveryBoy = (e) => {
        e.preventDefault();
        let deliveryBoy = {
           deliveryBoyName:this.state.deliveryBoyName,
           deliveryBoyEmail:this.state.deliveryBoyEmail,
           deliveryBoyMobile:this.state.deliveryBoyMobile,
           deliveryBoyUsername:this.state.deliveryBoyUsername,
           deliveryBoyPass:this.state.deliveryBoyPass
           
        }
        console.log(deliveryBoy);

        DeliveryBoyService.saveDeliveryBoy(deliveryBoy)
        .then((response) => {
            console.log(response.status);
        });
        
    }



    render() {
        return (
            <div>
                <h1>Register Delivery Boy</h1>
                <form className="col-4">
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Delivery Boy Name</label>
                        <input type="text" id="deliveryBoyName" className="form-control" value={this.state.deliveryBoyName} onChange={this.changeDeliveryBoyNameHandler}/>
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Delivery Boy Email</label>
                        <input type="email" id="deliveryBoyEmail" className="form-control" value={this.state.deliveryBoyEmail} onChange={this.changeDeliveryBoyEmailHandler}/>
                        
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Delivery Boy Mobile Number</label>
                        <input type="text" id="deliveryBoyMobile" className="form-control" value={this.state.deliveryBoyMobile} onChange={this.changeDeliveryBoyMobileHandler}/>
                        
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Delivery Boy User Name</label>
                        <input type="text" id="deliveryBoyUsername" className="form-control" value={this.state.deliveryBoyUsername} onChange={this.changeDeliveryBoyUsernameHandler}/>
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Delivery Boy Password</label>
                        <input type="password" id="deliveryBoyPass" className="form-control" value={this.state.deliveryBoyPass} onChange={this.changeDeliveryBoyPassHandler}/>
                       
                    </div>

                    <button type="button" className="btn btn-primary btn-block mb-4" onClick={this.saveDeliveryBoy}>Register Delivery Boy</button>

                </form>
            </div>
        )
    }
}
export default DeliveryBoyRegister;
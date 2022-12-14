import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import DeliveryBoyService from "../../../services/DeliveryBoyService";

class DeliveryBoyLogin extends Component {
    constructor(props) {
        super(props);
        this.state={
            deliveryBoyUsername:'',
            deliveryBoyPass:''
        }
        this.changeDeliveryBoyUsernameHandler=this.changeDeliveryBoyUsernameHandler.bind(this);
        this.changeDeliveryBoyPassHandler=this.changeDeliveryBoyPassHandler.bind(this);
        this.loginDeliveryBoy=this.loginDeliveryBoy.bind(this)

    }

    changeDeliveryBoyUsernameHandler = (event) => {
        this.setState({deliveryBoyUsername: event.target.value});
    }

    changeDeliveryBoyPassHandler = (event) => {
        this.setState({deliveryBoyPass: event.target.value});
    }

    loginDeliveryBoy = (e) => {
        e.preventDefault();
        let deliveryBoy = {
            deliveryBoyUsername:this.state.deliveryBoyUsername,
            deliveryBoyPass:this.state.deliveryBoyPass
        }
        // console.log(deliveryBoy);

        DeliveryBoyService.loginDeliveryBoy(deliveryBoy)
        .then((response) => {
            console.log(response.data);
            if(response.status === 200) {
                sessionStorage.setItem("userId", response.data.deliveryBoyId);
                sessionStorage.setItem("userType", "DeliveryBoy");
                this.props.history.push('/deliveryboy/home');
            }
        });
        
    }



    render() {
        return (
            <div style={{
                backgroundColor: '#D3D3D3	',
              }}>
                <h1>Delivery Boy Login</h1>
                <img src={require('../../../images/best-courier-service.jpeg')} style={{height:"200px"}}/>
                <form className="col-4">
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">Username</label>
                        <input type="email" id="form2Example1" className="form-control" required value={this.state.deliveryBoyUsername} onChange={this.changeDeliveryBoyUsernameHandler}/>
                        
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                        <input type="password" id="form2Example2" className="form-control" required value={this.state.deliveryBoyPass} onChange={this.changeDeliveryBoyPassHandler}/>
                        
                    </div>

                   { /*<div className="row mb-4">
                        <div className="col">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>*/}

                    <button type="button" className="btn btn-primary btn-block mb-4" onClick={this.loginDeliveryBoy}>Sign in</button>

                    <div className="text-center">
                        <p>Not a member? <a href="/registration">Register</a></p>
                    </div>
                </form>
            </div>
        )
    }
}
export default withRouter(DeliveryBoyLogin);
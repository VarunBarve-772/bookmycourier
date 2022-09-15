import React, { Component } from "react";
import DeliveryBoyService from "../../services/DeliveryBoyService";
import DeliveryBoyNavbar from "../navbar/DeliveryBoyNavbar";

class DeliveryBoyProfile extends Component{

    constructor(props){
        super(props);
        this.state={
            deliveryBoy : {}
        }

    }

    componentDidMount(){
        DeliveryBoyService.getDeliveryBoyById(sessionStorage.getItem("userId"))
        .then((response) =>{
            this.setState({deliveryBoy : response.data})
        })
    }

    render(){
        return(
            <div>
                <DeliveryBoyNavbar />
                <br /><br />
                <div className="card col-md-6 offset-md-3 ">
                    <h3 className="text-center">View Delivery Boy Profile</h3>
                        <div className="card-body">
                            <div className="row">
                                <label><b>Delivery Boy Name :</b></label>
                                <div style={{marginLeft:"10px"}}>{this.state.deliveryBoy.deliveryBoyName}</div>
                            </div>
                            <div className="row">
                                <label><b>Delivery Boy Email :</b></label>
                                <div style={{marginLeft:"10px"}}>{this.state.deliveryBoy.deliveryBoyEmail}</div>
                            </div>
                            <div className="row">
                                <label><b>Delivery Boy Mobile :</b></label>
                                <div style={{marginLeft:"10px"}}>{this.state.deliveryBoy.deliveryBoyMobile}</div>
                            </div>
                            <div className="row">
                                <label><b>Delivery Boy User Name :</b></label>
                                <div style={{marginLeft:"10px"}}>{this.state.deliveryBoy.deliveryBoyUsername}</div>
                            </div>
                            <div className="row">
                                <button type="button" className="btn btn-primary"
                                onClick={()=>this.goBack}>
                                    Delivery Boy Home
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default DeliveryBoyProfile;
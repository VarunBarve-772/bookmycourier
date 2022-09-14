import React, { Component } from "react";

import CenterService from "../../services/CenterService";
import HeadManagerNavbar from "../navbar/HeadManagerNavbar";

class HeadManagerHome extends Component{
    constructor(props){
        super(props);
        this.state={
            centerName:'',
            centerPhone:'',
            centerPin:'',
            // centerPrice:0
        }

        this.changeCenterNameHandler=this.changeCenterNameHandler.bind(this);
        this.changeCenterPhoneHandler=this.changeCenterPhoneHandler.bind(this);
        this.changeCenterPinHandler=this.changeCenterPinHandler.bind(this);
        // this.changeCenterPriceHandler=this.changeCenterPriceHandler.bind(this);
        this.saveCenter=this.saveCenter.bind(this)

    }


    changeCenterNameHandler = (event) => {
        this.setState({centerName: event.target.value});
    }

    changeCenterPhoneHandler = (event) => {
        this.setState({centerPhone: event.target.value});
    }

    changeCenterPinHandler = (event) => {
        this.setState({centerPin: event.target.value});
    }

    // changeCenterPriceHandler = (event) => {
    //     this.setState({centerPrice: event.target.value});
    // }


    saveCenter = (e) => {
        e.preventDefault();
        let center = {
            centerName:this.state.centerName,
            centerPhone:this.state.centerPhone,
            centerPin:this.state.centerPin,
            // centerPrice:this.state.centerPrice,          
        }
        console.log(center);

        CenterService.saveCenter(center)
        .then((response) => {
            console.log(response.status);
        });
        
    }

    render(){
        return(
            <div>
                <HeadManagerNavbar />
                <h1>Register Center</h1>
                <form className="col-4">
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Center Name</label>
                        <input type="text" id="centerName" className="form-control" value={this.state.centerName} onChange={this.changeCenterNameHandler}/>
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Center Phone</label>
                        <input type="email" id="centerPhone" className="form-control" value={this.state.centerPhone} onChange={this.changeCenterPhoneHandler}/>
                        
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Center Pin</label>
                        <input type="text" id="centerPin" className="form-control" value={this.state.centerPin} onChange={this.changeCenterPinHandler} />
                        
                    </div>
                    {/* <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Center Price</label>
                        <input type="text" id="centerPrice" className="form-control" value={this.state.centerPrice} onChange={this.changeCenterPriceHandler}/>
                        
                    </div> */}


                    <button type="button" className="btn btn-primary btn-block mb-4" onClick={this.saveCenter} >Register Center</button>

                </form>
            </div>
        )
    }
}

export default HeadManagerHome;
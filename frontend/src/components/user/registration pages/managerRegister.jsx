import React, { Component } from "react";
import ManagerService from "../../../services/ManagerService";

class ManagerRegister extends Component {
    constructor(props) {
        super(props);
        this.state={
            managerName:'',
            managerEmail:'',
            managerMobile:'',
            managerUsername:'',
            managerPass:''
        }
        this.changeManagerNameHandler=this.changeManagerNameHandler.bind(this);
        this.changeManagerEmailHandler=this.changeManagerEmailHandler.bind(this);
        this.changeManagerMobileHandler=this.changeManagerMobileHandler.bind(this);
        this.changeManagerUsernameHandler=this.changeManagerUsernameHandler.bind(this);
        this.changeManagerPassHandler=this.changeManagerPassHandler.bind(this);
        this.saveManager=this.saveManager.bind(this)
    }


    changeManagerNameHandler = (event) => {
        this.setState({managerName: event.target.value});
    }

    changeManagerEmailHandler = (event) => {
        this.setState({managerEmail: event.target.value});
    }

    changeManagerMobileHandler = (event) => {
        this.setState({managerMobile: event.target.value});
    }

    changeManagerUsernameHandler = (event) => {
        this.setState({managerUsername: event.target.value});
    }

    changeManagerPassHandler = (event) => {
        this.setState({managerPass: event.target.value});
    }

    saveManager = (e) => {
        e.preventDefault();
        let manager = {
            managerName:this.state.managerName,
            managerEmail:this.state.managerEmail,
            managerMobile:this.state.managerMobile,
            managerUsername:this.state.managerUsername,
            managerPass:this.state.managerPass
           
        }
        console.log(manager);

        ManagerService.saveManager(manager)
        .then((response) => {
            console.log(response.status);
        });
        
    }



    render() {
        return (
            <div>
                <h1>Register Manager</h1>
                <img src={require('../../../images/reg4.png')} style={{height:"200px"}}/>
                <form className="col-4">
                <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Manager Name</label>
                        <input type="text" id="managerName" className="form-control" required  value={this.state.managerName} onChange={this.changeManagerNameHandler} />
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Manager Email</label>
                        <input type="email" id="managerEmail" className="form-control" required value={this.state.managerEmail} onChange={this.changeManagerEmailHandler}/>
                        
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Manager Mobile Number</label>
                        <input type="text" id="managerMobile" className="form-control" required size="10" value={this.state.managerMobile} onChange={this.changeManagerMobileHandler} />
                        
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Manager User Name</label>
                        <input type="text" id="managerUsername" className="form-control" required value={this.state.managerUsername} onChange={this.changeManagerUsernameHandler} />
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Manager Password</label>
                        <input type="password" id="managerPass" className="form-control" required pattern="[0-9a-fA-F]{6,10}" value={this.state.managerPass} onChange={this.changeManagerPassHandler} />
                       
                    </div>

                    <button type="button" className="btn btn-primary btn-block mb-4" onClick={this.saveManager}>Register Manager</button>

                </form>
            </div>
        )
    }
}
export default ManagerRegister;
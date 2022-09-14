import React, { Component } from "react";

import HeadManagerService from "../../../services/HeadManagerService";


class HeadManager extends Component {
    constructor(props) {
        super(props);
        this.state={
            headManagerName:'',
            headManagerEmail:'',
            headManagerMobile:'',
            headManagerUsername:'',
            headManagerPass:''
        }
        this.changeHeadManagerNameHandler=this.changeHeadManagerNameHandler.bind(this);
        this.changeHeadManagerEmailHandler=this.changeHeadManagerEmailHandler.bind(this);
        this.changeHeadManagerMobileHandler=this.changeHeadManagerMobileHandler.bind(this);
        this.changeHeadManagerUsernameHandler=this.changeHeadManagerUsernameHandler.bind(this);
        this.changeHeadManagerPassHandler=this.changeHeadManagerPassHandler.bind(this);
        this.saveHeadManager=this.saveHeadManager.bind(this)
    }

    changeHeadManagerNameHandler = (event) => {
        this.setState({headManagerName: event.target.value});
    }

    changeHeadManagerEmailHandler = (event) => {
        this.setState({headManagerEmail: event.target.value});
    }

    changeHeadManagerMobileHandler = (event) => {
        this.setState({headManagerMobile: event.target.value});
    }

    changeHeadManagerUsernameHandler = (event) => {
        this.setState({headManagerUsername: event.target.value});
    }

    changeHeadManagerPassHandler = (event) => {
        this.setState({headManagerPass: event.target.value});
    }

    saveHeadManager = (e) => {
        e.preventDefault();
        let headManager = {
            headManagerName:this.state.headManagerName,
            headManagerEmail:this.state.headManagerEmail,
            headManagerMobile:this.state.headManagerMobile,
            headManagerUsername:this.state.headManagerUsername,
            headManagerPass:this.state.headManagerPass
           
        }
        console.log(headManager);

        HeadManagerService.saveHeadManager(headManager)
        .then((response) => {
            console.log(response.status);
        });
        
    }


    render() {
        return (
            <div>
                <h1>Register Head Manager</h1>
                <form className="col-4">
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Head Manager Name</label>
                        <input type="text" id="headManagerName" className="form-control" value={this.state.headManagerName} onChange={this.changeHeadManagerNameHandler}/>
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Head Manager Email</label>
                        <input type="email" id="headManagerEmail" className="form-control" value={this.state.headManagerEmail} onChange={this.changeHeadManagerEmailHandler}/>
                        
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Head Manager Mobile Number</label>
                        <input type="text" id="headManagerMobile" className="form-control" value={this.state.headManagerMobile} onChange={this.changeHeadManagerMobileHandler} />
                        
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Head Manager User Name</label>
                        <input type="text" id="headManagerUsername" className="form-control" value={this.state.headManagerUsername} onChange={this.changeHeadManagerUsernameHandler}/>
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Head Manager Password</label>
                        <input type="password" id="headManagerPass" className="form-control" value={this.state.headManagerPass} onChange={this.changeHeadManagerPassHandler}/>
                       
                    </div>

                    <button type="button" className="btn btn-primary btn-block mb-4" onClick={this.saveHeadManager} >Register Head Manager</button>

                </form>
            </div>
        )
    }
}
export default HeadManager;
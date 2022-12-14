import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import ManagerService from "../../../services/ManagerService";

class ManagerLogin extends Component {
    constructor(props) {
        super(props);
        this.state={
            managerUsername:'',
            managerPass:''
        }
        this.changeManagerUsernameHandler=this.changeManagerUsernameHandler.bind(this);
        this.changeManagerPassHandler=this.changeManagerPassHandler.bind(this);
        this.loginManager=this.loginManager.bind(this)
    }


    changeManagerUsernameHandler = (event) => {
        this.setState({managerUsername: event.target.value});
    }

    changeManagerPassHandler = (event) => {
        this.setState({managerPass: event.target.value});
    }

    loginManager = (e) => {
        e.preventDefault();
        let manager = {
            managerUsername:this.state.managerUsername,
            managerPass:this.state.managerPass
           
        }
        // console.log(manager);

        ManagerService.loginManager(manager)
        .then((response) => {
            // console.log(response.status);
            if(response.status === 200) {
                sessionStorage.setItem("userId", response.data.managerId);
                sessionStorage.setItem("userType", "Manager");
                this.props.history.push('/manager/home');
            }
        });
        
    }

    render() {
        return (
            <div>
                <h1>Manager Login</h1>
                <img src={require('../../../images/manager.png')} style={{height:"200px"}}/>
                <form className="col-4">
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Username</label>
                        <input type="email" id="form2Example1" className="form-control" required value={this.state.managerUsername} onChange={this.changeManagerUsernameHandler}/>
                        
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                        <input type="password" id="form2Example2" className="form-control" required value={this.state.managerPass} onChange={this.changeManagerPassHandler}/>
                        
                    </div>

                   {/* <div className="row mb-4">
                        <div className="col">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>*/}

                    <button type="button" className="btn btn-primary btn-block mb-4" onClick={this.loginManager}>Sign in</button>

                    <div className="text-center">
                        <p>Not a member? <a href="/registration">Register</a></p>
                    </div>
                </form>
            </div>
        )
    }
}
export default withRouter(ManagerLogin);
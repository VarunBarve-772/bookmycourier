import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import HeadManagerService from "../../../services/HeadManagerService";

class HeadManagerLogin extends Component {
    constructor(props) {
        super(props);
        this.state={
            headManagerUsername:'',
            headManagerPass:''
        }
        this.changeHeadManagerUsernameHandler=this.changeHeadManagerUsernameHandler.bind(this);
        this.changeHeadManagerPassHandler=this.changeHeadManagerPassHandler.bind(this);
        this.loginHeadManager=this.loginHeadManager.bind(this)
    }

    changeHeadManagerUsernameHandler = (event) => {
        this.setState({headManagerUsername: event.target.value});
    }

    changeHeadManagerPassHandler = (event) => {
        this.setState({headManagerPass: event.target.value});
    }

    loginHeadManager = (e) => {
        e.preventDefault();
        let headManager = {
            headManagerUsername:this.state.headManagerUsername,
            headManagerPass:this.state.headManagerPass
           
        }
        console.log(headManager);

        HeadManagerService.loginHeadManager(headManager)
        .then((response) => {
            // console.log(response.status);
            if(response.status === 200) {
                sessionStorage.setItem("userId", response.data.headManagerId);
                sessionStorage.setItem("userType", "HeadManager");
                this.props.history.push('/headmanager/home');
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Head Manager Login</h1>
                <img src={require('../../../images/logo3.png')} style={{height:"200px"}}/>
                <form className="col-4">
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Username</label>
                        <input type="email" id="form2Example1" className="form-control" required value={this.state.headManagerUsername} onChange={this.changeHeadManagerUsernameHandler} />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                        <input type="password" id="form2Example2" className="form-control" required value={this.state.headManagerPass} onChange={this.changeHeadManagerPassHandler}/>
                    </div>

                    {/* <div className="row mb-4">
                        <div className="col">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div> */}

                    <button type="button" className="btn btn-primary btn-block mb-4" onClick={this.loginHeadManager}>Sign in</button>

                    <div className="text-center">
                        <p>Not a member? <a href="/registration">Register</a></p>
                    </div>
                </form>
            </div>
        )
    }
}
export default withRouter(HeadManagerLogin);
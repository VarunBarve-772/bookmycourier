import React, { Component } from "react";
import headManagerService from "../../services/headManagerService";
import HeadManagerNavbar from "../navbar/HeadManagerNavbar";


class HeadManagerProfile extends Component{
        constructor(props){
            super(props);
            this.state={
                headManager : {}
            }
        }

        componentDidMount(){
        headManagerService.getHeadManagerById(sessionStorage.getItem("userId")).then((response) =>{
            this.setState({headManager : response.data})
        })
    }

    render(){
        return(
            <div>
                <HeadManagerNavbar />
                <br /><br />
                <div className="card col-md-6 offset-md-3 ">
                    <h3 className="text-center">View Head Manager Profile</h3>
                        <div className="card-body">
                            <div className="row">
                                <label className="col-6"><b>Head Manager Name :</b></label>
                                <div className="col-6">{this.state.headManager.headManagerName}</div>
                            </div>
                            <div className="row">
                                <label className="col-6"><b>Head Manager Email :</b></label>
                                <div className="col-6">{this.state.headManager.headManagerEmail}</div>
                            </div>
                            <div className="row">
                                <label className="col-6"><b>Head Manager Mobile :</b></label>
                                <div className="col-6">{this.state.headManager.headManagerMobile}</div>
                            </div>
                            <div className="row">
                                <label className="col-6"><b>Head Manager User Name :</b></label>
                                <div className="col-6">{this.state.headManager.headManagerUsername}</div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }

}

export default HeadManagerProfile;
import React, { Component } from "react";
import ManagerService from "../../services/ManagerService";
import ManagerNavbar from "../navbar/ManagerNavbar";



class ManagerProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            manager : {}
        }
    }

    componentDidMount(){
        ManagerService.getManagerById(sessionStorage.getItem("userId"))
        .then((response) =>{
            this.setState({manager : response.data})
        })
    }


    render(){
        return(
            <div>
                <ManagerNavbar />
                <br /><br />
                <div className="card col-md-6 offset-md-3 ">
                    <h3 className="text-center">View Manager Profile</h3>
                        <div className="card-body">
                            <div className="row">
                                <label className="col-6"><b>Manager Name :</b></label>
                                <div className="col-6">{this.state.manager.managerName}</div>
                            </div>
                            <div className="row">
                                <label className="col-6"><b>Manager Email :</b></label>
                                <div className="col-6">{this.state.manager.managerEmail}</div>
                            </div>
                            <div className="row">
                                <label className="col-6"><b>Manager Mobile :</b></label>
                                <div className="col-6">{this.state.manager.managerMobile}</div>
                            </div>
                            <div className="row">
                                <label className="col-6"><b>Manager User Name :</b></label>
                                <div className="col-6">{this.state.manager.managerUsername}</div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }

}




export default ManagerProfile;
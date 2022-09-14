import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import ManagerService from '../../services/ManagerService';
import CenterService from '../../services/CenterService';
import HeadManagerNavbar from '../navbar/HeadManagerNavbar';

class ManagerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            managerList: [],
            centerList: [],
            managerId: 0,
            centerId: 0
        }

        this.changeManagerCenterHandler = this.changeManagerCenterHandler.bind(this);
        this.updateCenterManager = this.updateCenterManager.bind(this);
    }

    componentDidMount() {
        ManagerService.getAllManagers()
        .then((response) => {
            console.log(response.data);
            this.setState({managerList: response.data});
        })

        CenterService.getAllCenters()
        .then((response) => {
            // console.log(response.data)
            this.setState({centerList: response.data});
        })
    }

    changeManagerCenterHandler = (event, managerId) => {
        this.setState({
            managerId: managerId,
            centerId: event.target.value
        });
    }

    updateCenterManager = () => {
        // console.log(this.state.centerId, this.state.managerId);
        ManagerService.addCenter(this.state.managerId, this.state.centerId)
        .then((response) => {
            // console.log(response.status);
            // this.props.history.push("/headmanager/manager");
            window.location.reload();
        })
    }

    render() {
        let centerName = null;
        return (
            <div>
                <HeadManagerNavbar />
                <div className="container">
                    {this.state.managerList.map(
                        manager => {
                            if(manager.center) {
                                centerName = manager.center.centerName;
                            } else {
                                centerName = "None";
                            }
                            return (
                                <div className="card text-dark bg-light my-3" key={manager.managerId}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-3">
                                            <p className="card-text">Manager Name: {manager.managerName}</p>
                                            </div>
                                            <div className="col-3">
                                            <p className="card-text">Manager Email: {manager.managerEmail}</p>
                                            </div>
                                            <div className='col-3'>
                                            <p className="card-text">Manager Mobile: {manager.managerMobile}</p>
                                            </div>
                                            <div className='col-3'>
                                            <p className="card-text">Current Center: {centerName}</p>
                                            </div>
                                        </div> 
                                        <form>
                                            <div className='row my-3'>
                                                <label className="form-label col-2" htmlFor='centerList'>Update Center</label>
                                                <select id='centerList' className='col-2' onChange={(e) => {
                                                    this.changeManagerCenterHandler(e, manager.managerId)
                                                }}>
                                                    <option disabled selected={true}>Select Center</option>
                                                    {this.state.centerList.map((center) => {
                                                        return(
                                                            <option key={center.centerId} value={center.centerId}>{center.centerName}</option>
                                                        ); 
                                                    })}
                                                </select>
                                                <button type="button" className="btn btn-primary col-2 mx-5" onClick={this.updateCenterManager}>Update</button>
                                            </div>
                                            {/* <datalist id='centerSuggestions'>
                                                {this.state.centerList.map((center) => {
                                                    return(
                                                        <option key={center.centerId} value={center.centerId}>{center.centerName}</option>
                                                    );
                                                })}
                                            </datalist>
                                            <input autoComplete='on' list='centerSuggestions' onChange={this.changerManagerCenterHandler}/> */}
                                        </form>
                                    </div>
                                </div>        
                            );
                        }
                    )}
                </div>
            </div>
        );
    }
}

export default withRouter(ManagerList);
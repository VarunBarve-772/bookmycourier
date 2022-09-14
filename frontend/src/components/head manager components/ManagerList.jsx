import React, { Component } from 'react';

import ManagerService from '../../services/ManagerService';
import CenterService from '../../services/CenterService';
import HeadManagerNavbar from '../navbar/HeadManagerNavbar';

class ManagerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            managerList: [],
            centerList: [],
            managerId: '',
            centerId: ''
        }

        this.changerManagerCenterHandler = this.changerManagerCenterHandler.bind(this);
        this.updateCenterManager = this.updateCenterManager.bind(this);
    }

    componentDidMount() {
        ManagerService.getAllManagers()
        .then((response) => {
            // console.log(response.data);
            this.setState({managerList: response.data});
        })

        CenterService.getAllCenters()
        .then((response) => {
            // console.log(response.data)
            this.setState({centerList: response.data});
        })
    }

    changerManagerCenterHandler = (event, managerId) => {
        console.log(event.target.value, managerId);
    }

    updateCenterManager = () => {

    }

    render() {
        return (
            <div>
                <HeadManagerNavbar />
                <div className="container">
                    {this.state.managerList.map(
                        manager => {
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
                                            <p className="card-text">Current Center: {manager.center}</p>
                                            </div>
                                        </div> 
                                        <form>
                                            <div className='row my-3'>
                                                <label className="form-label col-2" htmlFor='centerList'>Update Center</label>
                                                <select id='centerList' className='col-2' onChange={(e) => {
                                                    this.changerManagerCenterHandler(e, manager.managerId)
                                                }}>
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

export default ManagerList;
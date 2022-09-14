import React, { Component } from 'react';

import CenterService from '../services/CenterService';
import CustomerNavbar from './navbar/CustomerNavbar';
import HeadManagerNavbar from './navbar/HeadManagerNavbar';

class CenterList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            centerList: [],
            navbarState: ''
        }

    }

    componentDidMount() {
        if(sessionStorage.getItem("userType") === "Customer") {
            this.setState({navbarState: <CustomerNavbar />});
        } else {
            this.setState({navbarState: <HeadManagerNavbar />});
        }

        CenterService.getAllCenters()
        .then((response) => {
            // console.log(response.data);
            this.setState({centerList: response.data});
        })
    }

    render() {
        return (
            <div>
                {this.state.navbarState}
                <div className="container">
                    {this.state.centerList.map(
                        center => {
                            return (
                                <div className="card text-dark bg-light my-3" key={center.centerId}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-4">
                                            <p className="card-text">Center Name: {center.centerName}</p>
                                            </div>
                                            <div className="col-4">
                                            <p className="card-text">Center Phone: {center.centerPhone}</p>
                                            </div>
                                            <div className='col-4'>
                                            <p className="card-text">Center Pin: {center.centerPin}</p>
                                            </div>
                                        </div> 
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

export default CenterList;
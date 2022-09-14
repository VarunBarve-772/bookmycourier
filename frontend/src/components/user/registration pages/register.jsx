import React, { Component } from "react";

import OuterNavbar from "../../navbar/OuterNavbar";
import CustomerRegister from './CustomerRegister';
import ManagerRegister from './ManagerRegister';
import DeliveryBoyRegister from './DeliveryBoyRegister';
import HeadManager from "./HeadManagerRegister";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: <CustomerRegister />
        }

        this.changeFormState = this.changeFormState.bind(this);
    }

    changeFormState(formState) {
        this.setState({form: formState})
    }

    render() {
        return (
            <div style={{
                backgroundColor: '#D3D3D3	',
              }}>
                <OuterNavbar />

                <div>
                    <ul className="nav justify-content-end">
                        <li className="nav-link btn btn-outline-primary" style={{cursor:"pointer"}} onClick={() => this.changeFormState(<HeadManager/>)}>
                            Register Head Manager
                        </li>

                        <li className="nav-link btn btn-outline-primary" style={{cursor:"pointer"}} onClick={() => this.changeFormState(<ManagerRegister/>)}>
                            Register Manager
                        </li>

                        <li className="nav-link btn btn-outline-primary" style={{cursor:"pointer"}} onClick={() => this.changeFormState(<DeliveryBoyRegister/>)}>
                            Register Delivery Boy
                        </li>

                        <li className="nav-link btn btn-outline-primary" style={{cursor:"pointer"}} onClick={() => this.changeFormState(<CustomerRegister/>)}>
                            Register Customer
                        </li>
                    </ul>
                </div>

                {this.state.form}
            </div>
        )
    }
}
export default Login;
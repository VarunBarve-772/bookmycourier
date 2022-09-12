import React, { Component } from "react";

import OuterNavbar from "../../navbar/outerNavbar";
import CustomerRegister from './customerRegister';
import ManagerRegister from './managerRegister';
import DeliveryBoyRegister from './deliveryBoyRegister';
import HeadManager from "./headManagerRegister";

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
            <div>
                <OuterNavbar />

                <div>
                    <ul className="nav justify-content-end">
                        <li className="nav-link" style={{cursor:"pointer"}} onClick={() => this.changeFormState(<HeadManager/>)}>
                            Register Head Manager
                        </li>

                        <li className="nav-link" style={{cursor:"pointer"}} onClick={() => this.changeFormState(<ManagerRegister/>)}>
                            Register Manager
                        </li>

                        <li className="nav-link" style={{cursor:"pointer"}} onClick={() => this.changeFormState(<DeliveryBoyRegister/>)}>
                            Register Delivery Boy
                        </li>

                        <li className="nav-link" style={{cursor:"pointer"}} onClick={() => this.changeFormState(<CustomerRegister/>)}>
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
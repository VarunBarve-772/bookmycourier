import React, { Component } from "react";

import OuterNavbar from "../../navbar/outerNavbar";
import AdminLogin from "./adminLogin";
import CustomerLogin from "./customerLogin";
import DeliveryBoyLogin from './deliveryBoyLogin';
import ManagerLogin from './managerLogin';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: <CustomerLogin />
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
                        <li className="nav-link" style={{cursor:"pointer"}} onClick={() => this.changeFormState(<AdminLogin/>)}>
                            Admin Login
                        </li>

                        <li className="nav-link" style={{cursor:"pointer"}} onClick={() => this.changeFormState(<ManagerLogin/>)}>
                            Manager Login
                        </li>

                        <li className="nav-link" style={{cursor:"pointer"}} onClick={() => this.changeFormState(<DeliveryBoyLogin/>)}>
                            Delivery Boy Login
                        </li>

                        <li className="nav-link" style={{cursor:"pointer"}} onClick={() => this.changeFormState(<CustomerLogin/>)}>
                            Customer Login
                        </li>
                    </ul>
                </div>

                {this.state.form}
            </div>
        )
    }
}
export default Login;
import React, { Component } from "react";
import OuterNavbar from "./navbar/outerNavbar";

class LandingPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <OuterNavbar/>
            </div>
        )
    }
}
export default LandingPage;
import React from "react";
import '../../assets/css/lottery.scss';
import {
    Link, NavLink
} from 'react-router-dom';
class Header extends React.Component {

    state = {

    }
    handleChangeFirstName = (event) => {
        this.setState({ firstName: event.target.value });
    }

    render() {
        return (
            <>
                <div className="header">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top topnav">
                        <div className="container">

                            <img src={require('../../assets/images/logo1.png')} width="150" height="50" className="img-responsive" alt="Image" />

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item active">
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/admin">Admin</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <a className="nav-link" href="#" >Log In</a>
                            </div>
                        </div>
                    </nav>
                </div>

            </>
        )
    };
}
export default Header;
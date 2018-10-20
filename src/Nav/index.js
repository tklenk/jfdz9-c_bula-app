import React, {Fragment} from 'react';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Button from "@material-ui/core/es/Button/Button";
import {Link} from 'react-router-dom';
import logo from './logo.png';
import signin from './signin.svg';
import signup from './signup.svg';
import search from './search.svg';
import './nav.css';
import Logout from ".././Auth/logout";
import IsAdmin from ".././Auth/isAdmin";

const styleNav = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // position: 'sticky'
};
const styleNavIcons = {
    display: 'flex',
    flexDirection: 'row'
};

function Nav() {
    return (
        <Fragment>
            <AppBar position="static" className="navigation">
                <Toolbar style={styleNav}>
                    <Button>
                        <Link to="/dashboard"><img src={logo} alt="logo C-bulla"/></Link>
                    </Button>
                    <div style={styleNavIcons} className="navButtonAll">
                        <Button className="navButton">
                            <Link to="/home"><img src={search} alt=""/>
                                <div className="navButtonIcon">Wyszukaj</div>
                            </Link>
                        </Button>
                        <Logout>
                            <Button className="navButton">
                                <Link to="/signIn"><img src={signin} alt=""/>
                                    <div className="navButtonIcon">Zaloguj</div>
                                </Link>
                            </Button>
                            <Button className="navButton">
                                <Link to="/signUp"><img src={signup} alt=""/>
                                    <div className="navButtonIcon">Zarejestruj</div>
                                </Link>
                            </Button>
                        </Logout>
                        <IsAdmin>
                            <Button className="navButton">
                                <Link to="/adminPanel"><img src={signup} alt=""/>
                                    <div className="navButtonIcon">Panel Administratora</div>
                                </Link>
                            </Button>
                        </IsAdmin>
                    </div>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default Nav;

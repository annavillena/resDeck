import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import Menu from '../Menu/Menu'
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div>
            <div id='nav-container'>
                <div id='left-side-navbar'>
                    <Link to='/'>
                        <Logo />
                    </Link>
                </div>

                <div id='right-side-navbar'>
                    <Menu currentUserName={props.currentUserName}/>
                </div>
            </div>
        </div>
    )
}

export default NavBar

import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import Menu from '../Menu/Menu'
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div>
            <div id='nav-container'>
                <div className='left-side-navbar'>
                    <Link to='/'>
                        <Logo />
                    </Link>
                </div>

                <div className='right-side-navbar'>
                    <Menu currentUserName={props.currentUserName}/>
                </div>
            </div>
        </div>
    )
}

export default NavBar

import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import Menu from '../Menu/Menu'
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <div id='nav-container'>
                <div className='left-side-navbar'>
                    <Link to='/'>
                        <Logo />
                    </Link>
                </div>

                <div className='right-side-navbar'>
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default NavBar

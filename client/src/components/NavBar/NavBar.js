import React from 'react';
import Logo from '../Logo'
import Menu from '../Menu/Menu';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <div id='nav-container'>
                <div className='left-side-navbar'>
                    <Logo />
                    <h1 id='title'>resDeck</h1>
                </div>

                <div className='right-side-navbar'>
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default NavBar

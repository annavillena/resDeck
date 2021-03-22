import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './Menu.css'
import NotificationBadge from './NotificationBadge'

const MenuContainer = styled.div`
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    width: 33vw;
    height: 100vh;
    background-color: #0D1B4C;
    color: #F3ECC8;

    #close {
        float: right;
        margin-top: 32px;
        margin-right: 32px;
    }
    
    a {
        text-decoration: none;
        color: #F3ECC8;

        :hover {
            color: white;
        }
    }

    h1 {
        font-weight: 500;
        font-size: 55px;
        line-height: 67px;
        margin-left: 8%;
        margin-top: 15%;
        font-family: 'Montserrat';
    }
`

const LogoutContainer = styled.div`
    position: absolute;
    bottom: 16px;
    right: 32px;
    display: flex;
    flex-direction: row;

    h2 {
        font-weight: 500;
        font-size: 36px;
        font-family: 'Montserrat';
        margin-right: 16px;
    }

    svg {
        margin-top: 6px;
    }
`

const MenuOptions = styled.div`
    margin-left: 10%;
    margin-top: 48px;

    h2 {
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 42px;
        line-height: 51px;
        margin: 0 !important;
        margin-bottom: 16px !important;
    }

    #notifications {
        display: flex;
        flex-direction: row;

        svg {
            margin-top: 4px !important;
            margin-left: 32px !important;
        }
    }

`


const Menu = (props) => {
    return (
        <div id='menu-wrapper'>
            <svg id='hamburger-menu' onClick={() => {document.getElementById('menu').style.display = 'block'}} width="70" height="47" viewBox="0 0 70 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 23.5H68.5" stroke="#0D1B4C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 1H68.5" stroke="#0D1B4C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 46H68.5" stroke="#0D1B4C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            <MenuContainer id='menu'>

                <svg id='close' onClick={() => {document.getElementById('menu').style.display = 'none'}} width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.7049 1L1 27" stroke="#F3ECC8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 1L28.7049 27" stroke="#F3ECC8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <Link to='/profile'>
                    <h1>{props.name || 'Wally Worker'}</h1>
                </Link>

                <MenuOptions>
                    <Link to='/feed'>
                        <h2>Feed</h2>
                    </Link>
                    <div id='notifications'>
                        <Link to='/notifications'>
                            <h2>Notifications</h2>
                        </Link>
                        <NotificationBadge id='badge' notifs={props.notifs || 2} />
                    </div>
                    <Link to='/messages'>
                        <h2>Messages</h2>
                    </Link>
                    <Link to='/saved-resumes'>
                        <h2>Saved Resumes</h2>
                    </Link>
                    <Link to='/settings'>
                        <h2>Settings</h2>
                    </Link>
                </MenuOptions>

                <Link to='/'>
                    <LogoutContainer>
                        <h2>LOGOUT</h2>
                        <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 29H5.33333C4.44928 29 3.60143 28.6839 2.97631 28.1213C2.35119 27.5587 2 26.7956 2 26V5C2 4.20435 2.35119 3.44129 2.97631 2.87868C3.60143 2.31607 4.44928 2 5.33333 2H12" stroke="#F3ECC8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M23.6665 23L31.9998 15.5L23.6665 8" stroke="#F3ECC8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M32 15.5H12" stroke="#F3ECC8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </LogoutContainer>
                </Link>

            </MenuContainer>
        </div>
    )
}

export default Menu

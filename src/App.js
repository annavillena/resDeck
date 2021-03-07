import styled from 'styled-components'
import './App.css'
import Logo from './components/Logo'
import ResumeIllustration from './components/ResumeIllustration'


const NavBar = styled.div`
    /* Positioning Properties */
    position: absolute;
    top: 40px;
    width: 100vw;
    height: 64px;

    /* Flex Properties */
    display: flex;
    justify-content: space-between;
    align-items: center;

    #title {
        margin-left: 15px;
        color: #0D1B4C;
        font-family: 'Montserrat';
        font-size: 64px;
        font-weight: 400;
    }

    button {
        width: 155px;
        height: 60px;
        font-family: 'Lato';
        font-size: 24px;
    }

    #login-button {
        color: #0D1B4C;
        background-color: white;
        border: none;
    }

    #sign-up-button {
        color: #F3ECC8;
        background-color: #0D1B4C;
        border-radius: 15px;
    }

    button + button {
        margin-left: 30px;
    }
`

const Hero = styled.div`
    /* Positioning Properties */
    width: 100vw;
    margin-top: 190px;

    /* Flex Properties */
    display: flex;
    flex-direction: row;

    #container {
        /* Positioning Properties */
        height: 65vh;
        width: 71vw;
        padding-bottom: 40px !important;

        /* Visual Properties */
        background-color: #F3ECC8;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;

        /* Flex Properties */
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
            /* Positioning Properties */
            width: 50vw;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
            margin-left: 6vw;

            /* Font Properties */
            color: #0D1B4C;
            line-height: 78px;
            font-family: 'Montserrat';
            font-weight: 500;
            font-size: 4rem;
        }

        h2 {
            /* Positioning Properties */
            width: 50vw;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
            margin-left: 6vw;

            /* Font Properties */
            color: #0D1B4C;
            line-height: 51px;
            font-family: 'Montserrat';
            font-weight: 400;
            font-size: 42px;
        }

        h1 + h2 {
            margin-top: 8px !important;
        }
    }

    #illustration {
        margin-top: -1vw !important;
        margin-left: -15vw !important;
        height: 65vh;
    }
`


const App = () =>  {
    return (
        <div>
            <NavBar>
                <div className='left-side-navbar'>
                    <Logo />
                    <h1 id='title'>resDeck</h1>
                </div>

                <div className='right-side-navbar'>
                    <button id='login-button'>LOGIN</button>
                    <button id='sign-up-button'>SIGN UP</button>
                </div>
            </NavBar>

            <Hero>
                <div id='container'>
                    <h1>A community for</h1>
                    <h1>free <strong>resume reviews</strong></h1>
                    <h2>Receive resume feedback.</h2>
                    <h2>Give resume feedback.</h2>
                    <h2>Connect with others.</h2>
                    <h2><strong>Get the dream job.</strong></h2>
                </div>

                <div id='illustration'>
                    <ResumeIllustration />
                </div>
            </Hero>
        </div>
    )
}

export default App

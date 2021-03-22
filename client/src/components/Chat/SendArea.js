import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    /* Display */
    display: flex;
    flex-direction: row;

    /* Position */
    position: absolute;
    bottom: 0;

    /* Size */
    width: 100%;
    height: 20%;

    /* Misc */
    border-top: 3px solid #0D1B4C;

    #send-button-container {
        display: flex;
        justify-content: right;
        width: 15%;
        cursor: pointer;
    }

    #send-button {
        align-self: flex-end;
        color: #0D1B4C;
        margin-right: 8px;
        margin-bottom: 8px;
    }
`

const ChatBox = styled.textarea`
    /* Sizing */
    width: 85%;
    height: 100%;

    /* Font */
    font-family: 'Lato';
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    /* Padding/Margin */
    box-sizing: border-box;
    margin: 0 !important;
    padding-top: 10px;
    padding-left: 10px;

    /* Misc */
    border: none;
    resize: none;
    overflow: scroll;

    ::placeholder {
        color: #888888;
    }

    :focus {
        outline: none;
    }
`


const SendArea = (props) => {

    /* When enter pressed in ChatBox */
    const chatEnter = (e) => {
        /* Enter = code 13 */
        if (e.keyCode == 13 && !e.shiftKey) {
            /* Prevent new line */
            e.preventDefault()

            /* Send message behavior */
            props.submitSendMessage()
        }
    }

    return (
        <Container>
            <ChatBox placeholder='Type a message...' value={props.sendMessage} onChange={props.handleSendMessageChange} onKeyDown={chatEnter} />
            <div id='send-button-container' onClick={props.submitSendMessage}>
                <svg id='send-button' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 17.0417H33.0833" stroke="#0D1B4C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.041 1L33.0827 17.0417L17.041 33.0833" stroke="#0D1B4C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </Container>
    )
}

export default SendArea

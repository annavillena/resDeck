import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaLinkedin } from 'react-icons/fa'
import TimeStamp from './Timestamp'
import Message from './Message'


const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
`

const Title = styled.div`
    /* Display */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    /* Size */
    width: 100%;
    height: 15%;

    /* Misc */
    border-bottom: 3px solid #0D1B4C;

    #linkedin-icon {
        color: #2867b2;
    }

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 + a {
        margin-left: 10px;
    }

    h1, #linkedin-icon {
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 36px;
        line-height: 44px;
    }
`

const MessageArea = styled.div`
    height: 69.2%;
    padding-left: 10px;
    padding-right: 10px;
    overflow: scroll;
`

const SendContainer = styled.div`
    /* Display */
    display: flex;
    flex-direction: row;

    /* Position */
    position: absolute;
    bottom: 0;

    /* Size */
    width: 100%;
    height: 15%;

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
    height: 90%;

    /* Font */
    font-family: 'Lato';
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    /* Padding/Margin */
    padding-left: 10px;
    padding-right: 10px;
    transform: translateY(5%);

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

const Chat = (props) => {

    /* States */
    const [sendMessage, setSendMessage] = useState('')
    const [messages, setMessages] = useState(props.messages)

    /* On ChatBox change */
    const handleSendMessageChange = (e) => {
        setSendMessage(e.target.value)
    }

    /* Add new message to state when "sent" */
    const submitSendMessage = () => {
        /* Do not send if empty */
        if (sendMessage == '') {
            return
        }

        /* Push new message to state */
        messages.push({
            user: 1,
            name: props.user,
            date: new Date(),
            time: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
            messageContent: sendMessage
        })

        /* Reset message state */
        setSendMessage('')
    }

    /* When enter pressed in ChatBox */
    const chatEnter = (e) => {
        /* Enter = code 13 */
        if (e.keyCode == 13 && !e.shiftKey) {
            /* Prevent new line */
            e.preventDefault()

            /* Send message behavior */
            submitSendMessage()
        }
    }

    /* Scroll to bottom of chat when new message sent */
    useEffect(() => {
        document.getElementById('dummy').scrollIntoView()
    })

    return (
        <Container>

            <Title>
                <h1>{props.otherUser || 'Other user not found'}</h1>
                <a href='https://LinkedIn.com/'>
                    <FaLinkedin id='linkedin-icon' />
                </a>
            </Title>

            <MessageArea id='message-area' >
                {messages.map((message, i, messages) => {
                    if (i == 0 || messages[i - 1].date.toDateString() != message.date.toDateString()) {
                        return (
                            <>
                                <TimeStamp date={message.date}/>
                                <Message user={message.user} name={message.name} messageContent={message.messageContent} time={message.date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})} />
                            </>
                        )
                    }
                    return (
                        <Message user={message.user} name={message.name} messageContent={message.messageContent} time={message.date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})} />
                    )
                })}
                <div id='dummy'></div>
            </MessageArea>

            <SendContainer>
                <ChatBox placeholder='Type a message...' value={sendMessage} onChange={handleSendMessageChange} onKeyDown={chatEnter} />
                <div id='send-button-container' onClick={submitSendMessage}>
                    <svg id='send-button' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 17.0417H33.0833" stroke="#0D1B4C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.041 1L33.0827 17.0417L17.041 33.0833" stroke="#0D1B4C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </SendContainer>

        </Container>
    )
}

export default Chat
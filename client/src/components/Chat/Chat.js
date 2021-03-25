import React, { useState } from 'react'
import styled from 'styled-components'
import { FaLinkedin } from 'react-icons/fa'
import MessageArea from './MessageArea'
import SendArea from './SendArea'


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


const Chat = (props) => {

    /* States */
    const [sendMessage, setSendMessage] = useState('')
    const [messages, setMessages] = useState(props.messages || [])

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

    return (
        <Container>

            <Title>
                <h1>{props.otherUser || 'Other user not found'}</h1>
                <a href='https://www.linkedin.com/in/williamhgates/'>
                    <FaLinkedin id='linkedin-icon' />
                </a>
            </Title>

            <MessageArea messages={messages} />

            <SendArea sendMessage={sendMessage} handleSendMessageChange={handleSendMessageChange} submitSendMessage={submitSendMessage} />

        </Container>
    )
}

export default Chat

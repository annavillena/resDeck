import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaLinkedin } from 'react-icons/fa'
import TimeStamp from './Timestamp'
import Message from './Message'


const Container = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    position: relative;
`

const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15%;
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
    padding-left: 10px;
    padding-right: 10px;
    height: 69.2%;
    overflow: scroll;
`

const SendContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    border-top: 3px solid #0D1B4C;
    height: 15%;
    position: absolute;
    bottom: 0;

    #send-button-container {
        width: 15%;
        display: flex;
        justify-content: right;
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
    width: 85%;
    height: 75px;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    resize: none;
    border: none;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    overflow: scroll;

    ::placeholder {
        color: #888888;
    }

    :focus {
        outline: none;
    }
`

const Chat = (props) => {

    const [sendMessage, setSendMessage] = useState('')
    const [messages, setMessages] = useState(props.messages)

    const handleSendMessageChange = (e) => {
        setSendMessage(e.target.value)
    }

    const submitSendMessage = () => {
        if (sendMessage == '') {
            return
        }

        messages.push({
            user: 1,
            name: 'Wally Worker',
            date: new Date(),
            time: '8:01 AM',
            messageContent: sendMessage
        })
        setSendMessage('')
    }

    const chatEnter = (e) => {
        if (e.keyCode == 13 && !e.shiftKey) {
            submitSendMessage()
        }
    }

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
                    if (i == 0) {
                        return (
                            <>
                                <TimeStamp date={message.date}/>
                                <Message user={message.user} name={message.name} messageContent={message.messageContent} time={message.time} />
                            </>
                        )
                    }
                    else {
                        const previousMessage = messages[i - 1]
                        if (previousMessage.date.toDateString() != message.date.toDateString()) {
                            return (
                                <>
                                    <TimeStamp date={message.date}/>
                                    <Message user={message.user} name={message.name} messageContent={message.messageContent} time={message.time} />
                                </>
                            )
                        }
                        else {
                            return (
                                <Message user={message.user} name={message.name} messageContent={message.messageContent} time={message.time} />
                            )
                        }
                    }
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
import React from 'react'
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

    h1 + #linkedin-icon {
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
    height: 69.5%;
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
    return (
        <Container>
            <Title>
                <h1>{props.otherUser || 'Nicholas Networks'}</h1>
                <FaLinkedin id='linkedin-icon' />
            </Title>
            <MessageArea>
                <TimeStamp date={Date()}/>
                <Message user='1' messageContent='Hello!' time='8:02 AM'/>
                <Message user='1' messageContent='I like your resume, but focus more on leadership skills!' time='8:03 AM'/>
                <Message user='2' name='Nicholas Networks' messageContent='Thanks for letting me know, we should connect on LinkedIn!' time='10:25 AM'/>
            </MessageArea>
            <SendContainer>
                <ChatBox placeholder='Type a message...' />
                <div id='send-button-container'>
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
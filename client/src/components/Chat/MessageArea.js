import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import TimeStamp from './Timestamp'
import Message from './Message'


const Container = styled.div`
    height: 64.2%;
    padding-left: 12px;
    padding-right: 12px;
    overflow: scroll;
    scroll-behavior: smooth;
`


const MessageArea = (props) => {

    const [messages, setMessages] = useState(props.messages)

    useEffect(() => {
        document.getElementById('dummy').scrollIntoView()
    })

    return (
        <Container>
            {messages.map((message, i, messages) => {

                /* If first message or new day */
                if (i == 0 || messages[i - 1].date.toDateString() != message.date.toDateString()) {
                    return (
                        <>
                            <TimeStamp date={message.date}/>
                            <Message displayHeader={true} user={message.user} name={message.name} messageContent={message.messageContent} time={message.date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})} />
                        </>
                    )
                }

                /* If not from same user or 1 hour passed*/
                if (messages[i - 1].user != message.user || Math.abs(messages[i - 1].date - message.date) / 36e5 > 1) {
                    return (
                        <Message displayHeader={true} user={message.user} name={message.name} messageContent={message.messageContent} time={message.date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})} />
                    )
                }

                /* Otherwise, no message header */
                return (
                    <Message displayHeader={false} user={message.user} name={message.name} messageContent={message.messageContent} time={message.date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})} />
                )

            })}
            <div id='dummy'></div>
        </Container>
    )
}

export default MessageArea

import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => {if (props.user === 1) { return 'flex-end'} return 'flex-start'}};
    width: 100%;
`

const Name = styled.h2`
    font-family: 'Lato';
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 0px;
    margin-top: 0px;
`

const Time = styled.h3`
    font-family: 'Lato';
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;

    margin-top: 0px;
    margin-bottom: 5px;
`

const MessageContent = styled.p`
    /* Size */
    width: 75%;

    /* Font */
    font-family: 'Lato';
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: ${props => {if (props.user === 1) { return 'right'} return 'left'}};

    /* Margin */
    margin-top: 0px;
    margin-bottom: 0px;
`

const Message = (props) => {
    if (props.displayHeader) {
        return (
            <Container user={props.user}>
                <Name>{props.name || 'Name not found'}</Name>
                <Time>{props.time || 'Time not found'}</Time>
                <MessageContent title={props.time} user={props.user}>{props.messageContent || 'Message not found'}</MessageContent>
            </Container>
        )
    }
    return (
        <Container user={props.user}>
            <MessageContent title={props.time} user={props.user}>{props.messageContent || 'Message not found'}</MessageContent>
        </Container>
    )
}

export default Message
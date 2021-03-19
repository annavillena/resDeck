import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${props => {if (props.user == '1') { return 'flex-end'} return 'flex-start'}};
`

const Name = styled.h2`
    font-family: 'Lato';
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 0px;
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
    width: 75%;
    text-align: ${props => {if (props.user == '1') { return 'right'} return 'left'}};
    font-family: 'Lato';
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 0px;
`

const Message = (props) => {
    return (
        <Container user={props.user}>
            <Name>{props.name || 'Wally Worker'}</Name>
            <Time>{props.time || '8:01 AM'}</Time>
            <MessageContent user={props.user}>{props.messageContent || 'Thanks for the advice, Nicholas!'}</MessageContent>
        </Container>
    )
}

export default Message
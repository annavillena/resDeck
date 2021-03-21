import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h3 {
        width: 30%;
        display: flex;
        justify-content: center;
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
    }
`

const HorizontalLine = styled.div`
    width: 35%;
    border-bottom: 2px solid #0D1B4C;
`


const TimeStamp = (props) => {
    let date = ''
    if (new Date().toDateString() == props.date.toDateString()) {
        date = 'TODAY'
    }
    else {
        date = props.date.toDateString()
    }
    return (
        <Container>
            <HorizontalLine />
            <h3>{date || 'Date Not found'}</h3>
            <HorizontalLine />
        </Container>
    )
}

export default TimeStamp
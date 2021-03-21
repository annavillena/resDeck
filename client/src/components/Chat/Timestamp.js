import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    /* Display */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    /* Size */
    width: 100%;

    h3 {
        /* Display */
        display: flex;
        justify-content: center;

        /* Size */
        width: 30%;

        /* Font */
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

    /* Get Today and Yesterday dates */
    const today = new Date()
    let yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    
    /* Determine if date is today or yesterday */
    if (today.toDateString() == props.date.toDateString()) {
        date = 'TODAY'
    }
    else if (yesterday.toDateString() == props.date.toDateString()) {
        date = 'YESTERDAY'
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
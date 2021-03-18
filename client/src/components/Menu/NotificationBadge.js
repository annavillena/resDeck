import React from 'react'

const NotificationBadge = (props) => {
    let num = props.notifs

    if (num <= 0) {
        return (null)
    }

    else if (num > 9) {
        num = '9+'
    }

    return (
        <svg height='42' width='42'>
            <circle cx='21' cy='21' r='21' fill='#F3ECC8' />
            <text x='50%' y='50%' text-anchor='middle' font-size='28px' fontFamily='Montserrat' stroke='#0D1B4C' dy='.3em'>{num}</text>
        </svg>
    )
}

export default NotificationBadge

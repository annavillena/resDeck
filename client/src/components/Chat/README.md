# Chat Component

**Still a work in progress.**


## Current Features
- Close match to wireframe design
- Responsive to width and height (to some extent)
- Display messages from array of objects
- Add timestamp of day of messages
- Update messages state when current user sends a message (resets on refresh)
- Scroll to bottom of messages when a new message appears (state updates)


## How to Use
1. Import ```Chat``` from the ```Chat``` component directory.
2. Implement the ```Chat``` component like below:
```
<Chat user='Wally Worker' otherUser='Nicholas Networks' messages={dummyData} />
```


## Props

### user
The name of the current user.

### otherUser
The name of the user that the current user is sending messages to.

### messages
An array **sorted by age** of objects with the following data:
```
{
    user: 1,                    /* integer: 1 = user, 2 = otherUser */
    name: 'Wally Worker',       /* string: name of sender */
    date: Date(),               /* Date: date of message sent */
    time: '8:01 AM',            /* string: time of message sent */
    messageContent: 'Hello!'    /* string: message content */
}
```


## Example messages Array
```
const today = new Date();
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1)

const dummyData = [
    {
        user: 1,
        name: 'Wally Worker',
        date: yesterday,
        time: '8:01 AM',
        messageContent: 'Hello!'
    },
    {
        user: 1,
        name: 'Wally Worker',
        date: yesterday,
        time: '8:02 AM',
        messageContent: 'I like your resume, but you should focus more on leadership skills!'
    },
    {
        user: 2,
        name: 'Nicholas Networks',
        date: today,
        time: '10:25 AM',
        messageContent: 'Thanks for letting me know, we should connect on LinkedIn!'
    },
    {
        user: 2,
        name: 'Nicholas Networks',
        date: today,
        time: '10:26 AM',
        messageContent: 'Any other suggestions?'
    }
]
```


## To Do
- Improve overall functionality ()
- Get message time from date property
- Fix input being too large at smaller heights
- Improve UX
- Profile pictures


## Dependencies
- react-icons
- styled-components
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
2. Implement the ```Chat``` component like below (find ```dummyData``` further down):
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
    user: 1,                                /* integer: 1 = user, 2 = otherUser */
    name: 'Wally Worker',                   /* string: name of sender */
    date: new Date('2021-03-19T14:32:00Z'), /* Date: date of message sent */
    messageContent: 'Hello!'                /* string: message content */
}
```


## Example messages Array
```
const dummyData = [
    {
        user: 1,
        name: 'Wally Worker',
        date: new Date('2021-03-19T14:32:00Z'),
        messageContent: 'Hello!'
    },
    {
        user: 1,
        name: 'Wally Worker',
        date: new Date('2021-03-19T14:33:00Z'),
        messageContent: 'I like your resume, but you should focus more on leadership skills!'
    },
    {
        user: 2,
        name: 'Nicholas Networks',
        date: new Date('2021-03-20T18:16:00Z'),
        messageContent: 'Thanks for letting me know, we should connect on LinkedIn!'
    },
    {
        user: 2,
        name: 'Nicholas Networks',
        date: new Date('2021-03-20T18:16:00Z'),
        messageContent: 'Any other suggestions?'
    }
]
```


## To Do
- Improve overall functionality
- Improve UX
- Profile pictures


## Dependencies
- react-icons
- styled-components
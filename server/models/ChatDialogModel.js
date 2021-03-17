const mongoose = require('mongoose')

const ChatDialog = new mongoose.Schema({
    QBDialogId: { type: String, required: true },
    QBOccupantsId: [{
        userOne : String, //initializes chat dialog
        userTwo : String
    }]
});

module.exports = mongoose.model('ChatDialog', ChatDialog);
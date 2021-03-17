const QB = require('../config/QuickBloxSession'),
    ChatDialog = require('../models/ChatDialogModel');

module.exports = {
    //create new chat
    createChat: async (req, res) => {
        try {
            var params = {
                type: 3,
                occupants_ids: [req.body.recipientId]
            };

            QB.chat.dialog.create(params, function(error, conversation) {
                if (error) {
                    console.log(error);
                }
                else {
                    let occupantsIds = {
                        userOne: req.body.senderId, //initializes chat dialog
                        userTwo: req.body.recipientId
                    }
                    let chatDialog = new ChatDialog({
                        QBDialogId: conversation.data._id,
                        QBOccupantsId: occupantsIds
                    })
                    chatDialog.save();
                    res.status(200).send(chatDialog);
                }
            });
        } catch(err) {
            alert(err);
        }
    },

    // send chat message
    sendMessage: async (req, res) => {
        try {
            var message = {
                type: "chat",
                body: req.body.message,
                extension: {
                  save_to_history: 1,
                  dialog_id: req.body.QBDialogId //get id from chatdialog model
                },
                markable: 1
              };
              
              var opponentId = req.body.recipientId;
              try {
                message.id = QB.chat.send(opponentId, message);
              } catch (e) {
                if (e.name === 'ChatNotConnectedError') {
                  // not connected to chat
                }
              }
              
              //...
              
              QB.chat.onMessageListener = onMessage;
        } catch(err) {
            alert(err);
        }
    }
};
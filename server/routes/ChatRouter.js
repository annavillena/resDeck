const express = require('express'),
    ChatRouter = express.Router(),
    ChatController = require('../controllers/ChatController.js')

ChatRouter.post('/chatRoom', ChatController.createChat);
ChatRouter.post('/sendMessage', ChatController.sendMessage);

  
module.exports = ChatRouter;
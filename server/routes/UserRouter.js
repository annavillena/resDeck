const express = require('express'),
    UserRouter = express.Router(),
    UserController = require('../controllers/UserController.js'),
    verifyToken = require('../authHelperFunctions').verifyToken;

UserRouter.route('/').get(UserController.index).post(UserController.create);

UserRouter.post('/authenticate', UserController.authenticate);
UserRouter.get('/count', UserController.count);

UserRouter.put('/:id', UserController.update);
UserRouter.get('/:id', UserController.show);
UserRouter.delete('/:id', UserController.destroy);

UserRouter.use(verifyToken);
UserRouter.route('/:id').get(UserController.show).patch(UserController.update).delete(UserController.destroy);

  
module.exports = UserRouter;
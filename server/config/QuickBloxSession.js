const QB = require('quickblox'),
    config = require('./config');

 //initialize QuickBlox for chat messaging
 QB.init(config.qb.APPLICATION_ID, config.qb.AUTH_KEY, config.qb.AUTH_SECRET, config.qb.ACCOUNT_KEY);
 QB.createSession(function(error, result) {
    if (error) {
        console.log(error);
    }
    else {
        console.log('QuickBlox Initalized: ' + result);
    }
 });

 module.exports = QB;
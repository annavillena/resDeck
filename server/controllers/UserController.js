const User = require('../models/UserModel.js'),
    signToken = require('../authHelperFunctions').signToken,
    QB = require('../config/QuickBloxSession');

module.exports = {
    // list users
    index: async (req, res) => {
        try {
            const users = await User.find({});
            res.json(users);
        } catch(err) {
            alert(err);
        }
    },

    // get one user
    show: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.json(user);
        } catch(err) {
            alert(err);
        }
    },

    // creates new user
    create: async (req, res) => {
        try {
            User.findOne ({ email: req.body.email }).then(user => {
                if (user) {
                    return res.status(400).json({ email: "Email already exists" });
                }
            });
                
            const user = await User.create(req.body);
            const token = await signToken(user);

            const QBparams = {
                email: req.body.email,
                password: req.body.password,
                full_name: req.body.name
            }
            QB.users.create(QBparams, function(error, result) {
                if (error) {
                    console.log("Create user error: " + JSON.stringify(error));
                }
                else {
                    console.log(result);
                    user.QBId = result.id;
                    user.save();
                    
                    QB.createSession(QBparams, function(error, result) {
                        if (error) {
                            console.log(JSON.stringify(error));
                        }
                        else {
                            console.log(result);
                        }
                    });
                }
            });

            if (token) {
                return res.status(200).send({success: true, message: "User successfully created, token attached", token});
            }

        } catch(err) {
            console.log(err);
            res.json({success: false, code: err.code});
        }
    },

    // update a user
    update: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if(!user) {
                return res.status(404).send({ msg: "Invalid user" });
            }
            // if (!user.validPassword(req.body.password)) {
            //     return res.status(400).send({ msg: "The password is not valid." });
            // }
            Object.assign(user, req.body);
            await user.save();

            return res.status(200).send({ msg: "User successfully updated" });
        } catch(err) {
            res.json({success: false, code: err.code});
        }
    },

    count: async (req, res) => {
        User.countDocuments({}, function(err, count){
            if(err){
                res.status(404).send(err);
            }
            else{
                res.status(200).json(count);
            }
        });
    },

    // delete a user
    destroy: async (req, res) => {
        try {
            const user = await User.findByIdAndRemove(req.params.id);
            res.json({success: true, message: "User deleted", user});
        } catch(err) {
            res.json({success: false, code: err.code});
        }
    },

    authenticate: async (req, res) => {
        const user = await User.findOne({email: req.body.email});

        if(!user || !user.validPassword(req.body.password)) {
            return res.status(400).send({success: false, message: "Invalid Login"});
        }

        const QBparams = {
            email: req.body.email,
            password: req.body.password,
            full_name: req.body.name
        }
        QB.login(QBparams, function(error, result) {
            if (error) {
                console.log("Login user error: " + JSON.stringify(error));
            }
            else {
                console.log(result);
                QB.createSession(QBparams, function(error, result) {
                    if (error) {
                        console.log(JSON.stringify(error));
                    }
                    else {
                        console.log(result);
                    }
                });
            }
        });

        const token = await signToken(user);
        return res.status(200).send({success: true, message: "User successfully logged in, token attached", token});
    }
};
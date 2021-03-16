const mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');

const User = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    isJobSeeker: { type: Boolean, default: false },
    isProfessional: { type: Boolean, default: false },
    linkedInProfileURL: { type: String },
    date: { type: Date, default: Date.now }
});

// adds method to user to create hashed password
User.methods.generateHash = function(password) { //bcrypt function to hash passwords
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// adds method to user to check if password is correct
User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// had to add this, checks if password was changed before saving
User.pre('save', function(next) { //Prehook
    if(this.isModified('password')) {
        this.password = this.generateHash(this.password);
    }
    next(); //Continue to next middleware; like save password to database
});

module.exports = mongoose.model('User', User);
const mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    isJobSeeker: { type: Boolean, default: false },
    isProfessional: { type: Boolean, default: false },
    linkedInProfileURL: { type: String },
    date: { type: Date, default: Date.now }
});


// adds method to user to create hashed password
UserSchema.methods.generateHash = function(password) { //bcrypt function to hash passwords
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// adds method to user to check if password is correct
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// had to add this, checks if password was changed before saving
UserSchema.pre('save', function(next) { //Prehook
    if(this.isModified('password')) {
        this.password = this.generateHash(this.password);
    }
    next(); //Continue to next middleware; like save password to database
});

const User = mongoose.model('user', UserSchema);
module.exports = User;
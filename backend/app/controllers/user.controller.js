const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require("../services/user.service").User;

// Register account user
exports.registerUser = function (req, res, next) {
    bcrypt.hash(req.body.password, saltRounds, (error, hash) => {
        const user = new User({
            dateOfBirth: req.body.dateOfBirth,
            name: req.body.name,
            password: hash,
            sex: req.body.sex,
            phone: req.body.phone,
        });
        if (error) return error;
        user.save();
        res.send(user)
        // register account complete
        
        console.log("Register account complete");
    })
    
}
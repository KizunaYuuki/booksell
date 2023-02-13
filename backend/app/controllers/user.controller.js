const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require("../services/user.service");

// Register account user
exports.registerUser = function (req, res, next) {
    bcrypt.hash(req.body.password, saltRounds, (error, hash) => {
        const user = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            password: hash,
            order: req.body.order,
        });
        if (error) return error;
        user.save();
        res.send(user)
        // register account complete
        
        console.log("Register account complete");
    })
    
}
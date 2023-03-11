const bcrypt = require('bcrypt');
const saltRounds = 10;
const Admin = require("../services/admin.service");
const User = require("../services/user.service");
const DiscountCode = require("../services/discountCode.service");

// Create account admin
exports.createAccountAdmin = function (req, res, next) {
    bcrypt.hash(req.body.password, saltRounds, (error, hash) => {
        const admin = new Admin({ adminname: req.body.adminname, password: hash });
        if (error) return error;
        admin.save();
        // create account complete
        console.log("Create account complete");
    })
    next()
}

// login for admin
exports.loginAdmin = function (req, res, next) {

    Admin.findOne({ adminname: req.body.adminname }, (error, admin) => {
        if (admin) {

            bcrypt.compare(req.body.password, admin.password, (error, same) => {
                if (same) {
                    console.log("Pass match");
                    req.session.adminId = admin._id
                    loggedIn = req.session.adminId;
                    // console.log(loggedIn);
                    // req.session.discountCode = admin.discountCode;
                    console.log(req.session)
                    // next();
                    res.send(admin)
                    // res.redirect("/");

                } else {
                    console.log("Pass not match");
                    // res.redirect("/auth/login");
                    next();
                }
            })
        } else {
            console.log("Admin not found")
            next()
        }
    })
}

// logout for admin
exports.logoutAdmin = function (req, res, next) {
    // req.session.destroy(() => {
    //     res.redirect('/')
    // })
    req.session = null
    res.redirect('/')
}

// auth login when logined
exports.authMiddleware = function (req, res, next) {
    if (!req.session.adminId) {
        return res.redirect('/')
    }
    next()
}

// manage account user - Quản lý người dung

// block account user - Khoá, mở tài khoản người dùng bằng biến statusUser trong schema của người dùng 
exports.block_activateAccountUser = function (req, res, next) {
    const tempId = req.params.id;
    User.findOne({ _id: tempId }, function (error, temp) {
        if (error) {
            console.log(error)
        }
        else {
            User.findByIdAndUpdate( tempId, { statusUser: !temp.statusUser }, function (error, user) {
                if (user) {
                    console.log("Updated User: ", user._id);
                }
            })
        }
    });
    next()
}

// Tìm tất cả người dùng trong cơ sở dữ liệu
exports.findAllUser = function (req, res, next) {
    User.find((error, user) => {
        if (user) {
            console.log(user);
            res.send(user);
        } else
            next();
    })
}

// Tìm một người dùng trong cơ sở dữ liệu
exports.findOneUserById = function (userId, req, res, next) {

}


// Tạo mã giảm giá
exports.createDiscountCode = function (req, res, next) {
    let temp = req.session.discountCode++;
    let tempDiscountCode = ''
    if ((temp => 0) && (temp < 10)) {
        tempDiscountCode= "000000000" + req.session.discountCode;
    } else if ((temp => 10) && (temp < 100)) {
        tempDiscountCode= "00000000" + req.session.discountCode;
    } else if ((temp => 100) && (temp < 1000)) {
        tempDiscountCode= "0000000" + req.session.discountCode;
    } else if ((temp => 1000) && (temp < 10000)) {
        tempDiscountCode= "000000" + req.session.discountCode;
    } else if ((temp => 10000) && (temp < 100000)) {
        tempDiscountCode= "00000" + req.session.discountCode;
    } else if ((temp => 100000) && (temp < 1000000)) {
        tempDiscountCode= "0000" + req.session.discountCode;
    } else if ((temp => 1000000) && (temp < 10000000)) {
        tempDiscountCode= "000" + req.session.discountCode;
    } else if ((temp => 10000000) && (temp < 100000000)) {
        tempDiscountCode= "00" + req.session.discountCode;
    } else if ((temp => 100000000) && (temp < 1000000000)) {
        tempDiscountCode= "0" + req.session.discountCode;
    } else if ((temp => 1000000000) && (temp < 10000000000)) {
        tempDiscountCode= "" + req.session.discountCode;
    } else 
        console.log("Discount > 10*10");

     // tạo _id cho mã giảm giá
    
    const discountCode = new DiscountCode({
        _id: tempDiscountCode,
        typeDiscount: req.body.typeDiscount,
        startDay: req.body.startDay,
        expiry: req.body.expiry,
        discountValue: req.body.discountCode,
        availability: req.body.availability,
    })

    discountCode.save();
    // register account complete
    console.log("Create discount code complete");

    Admin.findByIdAndUpdate( req.session.adminId, { discountCode: req.session.discountCode }, function (error, admin) {
        if (admin) {
            console.log("Updated discountCode: ", admin._id);
        }
    });
    next();
}

const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route");
const adminRouter = require("./app/routes/admin.route");
const userRouter = require("./app/routes/user.route");
const ApiError = require("./app/api-error");

const app = express();
// const expressSession = require('express-session');
// app.use(expressSession({
//     secret: 'keyboard cat'
// }))

// // Tạo biến toàn cầu để ẩn nút Login và Signup khi đã đăng nhập
// global.loggedIn = null;

// app.use("*", (req, res, next) => {
//     loggedIn = req.session.adminId;
//     next();
// })


// test cookie-session
var cookieSession = require('cookie-session')
app.use(cookieSession({
  name: 'session',
  keys: ['/* secret keys */'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))



app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);
app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
    // req.session.test = 1
    console.log(req.session.adminId)
    res.json({
        message: "Welcome to contact book application."
    });
});
// handle 404 response
app.use((req, res, next) => {
    // Code ở đây sẽ chạy khi không có route được định nghĩa nào
    // khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi
    return next(new ApiError(404, "Resource not found"));
});
// define error-handling middleware last, after other app.use() and routes calls
app.use((error, req, res, next) => {
    // Middleware xử lý lỗi tập trung.
    // Trong các đoạn code xử lý ở các route, gọi next(error)
    // sẽ chuyển về middleware xử lý lỗi này
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});


module.exports = app;
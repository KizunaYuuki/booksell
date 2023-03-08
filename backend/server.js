const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");


// mongoose
const mongoose = require("mongoose");

async function startServer() {
    try {
        await MongoDB.connect(config.db.uri); // get uri
        console.log("Connected to the database!"); // notice connected
        const PORT = config.app.port; // get port to /app/config/index.js
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT} | http://localhost:${PORT}`);
        });

        // connect by mongoose
        mongoose.set('strictQuery', false);
        await mongoose.connect(config.db.uri, (err) => {
            if (err) console.log('server fail');
            console.log("Connected to the database by mongoose!");
        });

    } catch (error) {
        console.log("Cannot connect to the database!", error);
        process.exit();
    }
}
startServer();
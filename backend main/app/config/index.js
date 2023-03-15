const config = {
    app: {
        port: process.env.PORT || 3000,
    },

    db: {
        uri: process.env.MONGODB_URI || "mongodb+srv://mongo:mongo@clusternienluan.jqgy2ey.mongodb.net/BooksStore?retryWrites=true&w=majority"
    }
};

module.exports = config;
const ApiError = require("../api-error");
const MongoDB = require("../utils/mongodb.util");
const BooksService = require("../services/books.service");

exports.create = async (req, res, next) => {
    if (!req.body?.bookName) {
        return next(new ApiError(400, "Name can not be empty"));
    }

    try {
        const booksService = new BooksService(MongoDB.client);
        const document = await booksService.create(req.body);

        return res.send(document);
    }
    catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the product")
        );
    }
}

exports.findAll = async (req, res, next) => {
    let documents = []

    try {
        const booksService = new BooksService(MongoDB.client);
        // const { phone } = req.query;
        documents = await booksService.find({});

        // else{
        //     documents = await booksService.find({})
        // }
    }
    catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the product")
        );
    }
    return res.send(documents);
}

exports.findOne = async (req, res, next) => {
    try {
        const booksService = new BooksService(MongoDB.client);
        const document = await booksService.findById(req.params.id);
        if (!document) {
            return next(new ApiError(404, "Product not found"));
        }
        return res.send(document);
    }
    catch (error) {
        return next(
            new ApiError(500, `Error retrieving product with id=${req.parmas.id}`)
        );
    }
}

exports.update = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(400, "Data to update can not be empty"));
    }

    try {
        const booksService = new BooksService(MongoDB.client);
        const document = await booksService.update(req.params.id, req.body);
        if (!document) {
            return next(new ApiError(404, "Product not found"));
        }
        return res.send({ message: "Product was updated successfully" });
    } catch (error) {
        return next(
            new ApiError(500, `Error updating product with id=${req.params.id}`)
        );
    }
};

exports.pushImg = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(400, "Data to update can not be empty"));
    }

    try {
        const booksService = new BooksService(MongoDB.client);
        const document = await booksService.pushImg(req.params.id, req.body);
        if (!document) {
            return next(new ApiError(404, "Product not found"));
        }
        return res.send({ message: "Product was updated successfully" });
    } catch (error) {
        return next(
            new ApiError(500, `Error updating product with id=${req.params.id}`)
        );
    }
};

exports.removeImg = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(400, "Data to update can not be empty"));
    }

    try {
        const booksService = new BooksService(MongoDB.client);
        const document = await booksService.removeImg(req.params.id, req.body);
        if (!document) {
            return next(new ApiError(404, "Product not found"));
        }
        return res.send({ message: "Product was updated successfully" });
    } catch (error) {
        return next(
            new ApiError(500, `Error updating product with id=${req.params.id}`)
        );
    }
};

exports.delete = async (req, res, next) => {
    try {
        const booksService = new BooksService(MongoDB.client);
        const document = await booksService.delete(req.params.id);
        if (!document) {
            return next(new ApiError(404, "Product not found"));
        }
        return res.send({ message: "Product was deleted successfully" });
    } catch (error) {
        return next(
            new ApiError(500, `Could not delete product with id=${req.params.id}`)
        );
    }
};

exports.deleteAll = async (req, res, next) => {
    try {
        const booksService = new BooksService(MongoDB.client);

        if (req.body) {
            const deletedCount = await booksService.deleteAll(req.body);
            return res.send({
                message: `${deletedCount} product were deleted successfully`
            });
        }


    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while removing all product")
        );
    }
};

exports.dropCollection = async (req, res, next) => {
    try {
        const booksService = new BooksService(MongoDB.client, req.params.name);
        const kq = await booksService.drop()
        return res.send(kq)

    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while removing all diary")
        );
    }
};



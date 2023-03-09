const ApiError = require("../api-error");
const MongoDB = require("../utils/mongodb.util");
const CommentsService = require("../services/comments.service");

exports.create = async (req, res, next) => {
    try {
        const commentsService = new CommentsService(MongoDB.client);
        const document = await commentsService.create(req.body);

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
        const commentsService = new CommentsService(MongoDB.client);
        // const { phone } = req.query;
        documents = await commentsService.find({});

        // else{
        //     documents = await commentsService.find({})
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
        const commentsService = new CommentsService(MongoDB.client);
        const document = await commentsService.findById(req.params.id);
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


exports.delete = async (req, res, next) => {
    try {
        const commentsService = new CommentsService(MongoDB.client);
        const document = await commentsService.delete(req.params.id);
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
        const commentsService = new CommentsService(MongoDB.client);

        if (req.body) {
            const deletedCount = await commentsService.deleteAll(req.body);
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
        const commentsService = new CommentsService(MongoDB.client, req.params.name);
        const kq = await commentsService.drop()
        return res.send(kq)

    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while removing all diary")
        );
    }
};



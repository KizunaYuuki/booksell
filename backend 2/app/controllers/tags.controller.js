const ApiError = require("../api-error");
const MongoDB = require("../utils/mongodb.util");
const TagsService = require("../services/tags.service");

exports.create = async (req, res, next) => {
    if (!req.body?.nameTag) {
        return next(new ApiError(400, "Name can not be empty"));
    }

    try {
        const tagsService = new TagsService(MongoDB.client);
        const document = await tagsService.create(req.body);

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
        const tagsService = new TagsService(MongoDB.client);
        // const { phone } = req.query;
        documents = await tagsService.find({});

        // else{
        //     documents = await tagsService.find({})
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
        const tagsService = new TagsService(MongoDB.client);
        const document = await tagsService.findById(req.params.id);
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
        const tagsService = new TagsService(MongoDB.client);
        const document = await tagsService.delete(req.params.id);
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
        const tagsService = new TagsService(MongoDB.client);

        if (req.body) {
            const deletedCount = await tagsService.deleteAll(req.body);
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
        const tagsService = new TagsService(MongoDB.client, req.params.name);
        const kq = await tagsService.drop()
        return res.send(kq)

    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while removing all diary")
        );
    }
};



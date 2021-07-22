const Image = require("../models/imageModel");

exports.getAllImages = async (req, res, next) => {
    try {
        const images = await Image.find();

        //SENDING RESPONSE
        res.status(201).json({
            status: "success",
            results: images.length,
            images: images
        });
    } catch (error) {
        res.status(400).json({
            status: "failure",
            message: error.message
        });
    }
}

exports.insertImage = async (req, res, next) => {
    try {
        const newImage = await Image.create({
            ImgName: req.body.ImgName,
            ImgURL: req.body.ImgURL,
            ImgDetails: req.body.ImgDetails,
        });
        
        res.status(201).json({
            status: "success",
            data: newImage
        });
    } catch (error) {
        res.status(400).json({
            status: "failure",
            message: error.message
        });
    }
}
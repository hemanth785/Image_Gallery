const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    ImgName: {
        type: String,
        required: [true,"please provide image name"],
        unique: true,
    },
    ImgURL: {
        type: String,
        required: [true,"please mention image url"],
        unique: true,
    },
    ImgDetails: {
        type: String,
        required: [true,"please mention details of image"],
        unique: true,
    }
});


const Image = mongoose.model("Image",imageSchema);
module.exports = Image;
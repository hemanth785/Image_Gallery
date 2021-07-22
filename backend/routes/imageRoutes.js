const express = require('express');
const image = require('../controllers/imageController')

const Router = express.Router();

Router.route("/")
      .get(image.getAllImages)

Router.route("/new")
      .post(image.insertImage)

module.exports = Router;
const express = require("express");
const mongoose = require("mongoose");
const mainRouter = express.Router();
const productModel = mongoose.model("Product");

module.exports.controllerFunction = function (app) {

    mainRouter.post("/readAll", async (req, res, next) => {
        productModel.find(function (err, doc) {
            if (err) {
                return res.send(err);
            } else {
                res.send(doc);
            }
        });
    })

    mainRouter.post("/readOne/:id", async (req, res, next) => {
        productModel.findById(req.params.id, function (err, doc) {
            if (err) {
                return res.send(err);
            } else {
                res.send(doc);
            }
        });
    });

    mainRouter.post("/readByUser/:id", async (req, res, next) => {
        productModel.find({ seller: req.params.id }, function (err, doc) {
            if (err) {
                return res.send(err);
            } else {
                res.send(doc);
            }
        });
    });

    mainRouter.post("/create", async (req, res, next) => {
        const newModel = new productModel({
            _id: Date.now(),
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            city: req.body.city,
            tags: req.body.tags,
            seller: req.body.seller,
            picture: req.body.picture,
            bid:[]
        });
        newModel.save(function (err, doc) {
            if (err) {
                console.log(err);
                return res.send(err);
            } else {
                console.log("created");
                res.send(doc)
            }
        });
    });

    mainRouter.post("/update/:id", async (req, res, next) => {
        productModel.findByIdAndUpdate(req.params.id, req.body,
            { upsert: true, new: true },
            function (err, doc) {
                if (err) {
                    return res.send(err);
                } else {
                    console.log("user updated");
                    res.send(doc);
                }
            });
    });

    mainRouter.post("/submitBid/:id", async (req, res, next) => {
        productModel.findByIdAndUpdate(req.params.id,
            { "$push": { "bid": req.body } },
            { upsert: true, new: true },
            function (err, doc) {
                if (err) {
                    return res.send(err);
                } else {
                    console.log("user updated");
                    res.send(doc);
                }
            });
    });

    mainRouter.post("/delete/:id", async (req, res, next) => {
        productModel.findByIdAndDelete(req.params.id, function (err, doc) {
            if (err) {
                return res.send(err);
            } else {
                res.send(doc);
            }
        });
    });

    mainRouter.post("/removeProduct/:id", async (req, res, next) => {
        productModel.findByIdAndUpdate(req.params.id,
            { "$pull": { "projects": req.body.projectId } },
            { new: true },
            function (err, doc) {
                if (err) {
                    return res.send(err);
                } else {
                    res.send(doc);
                }
            });
    });

    app.use("/product", mainRouter);
};

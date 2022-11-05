const express = require("express");
const mongoose = require("mongoose");

const mainRouter = express.Router();
const userModel = mongoose.model("User");
const productModel = mongoose.model("Product");


module.exports.controllerFunction = function (app) {

    mainRouter.post("/readAll", async (req, res, next) => {
        userModel.find(function (err, doc) {
            if (err) {
                return res.send(err);
            } else {
                res.send(doc);
            }
        });
    })

    mainRouter.post("/readOne/:id", async (req, res, next) => {
        userModel.findById(req.params.id, function (err, doc) {
            if (err) {
                return res.send(err);
            } else {
                res.send(doc);
            }
        });
    });

    mainRouter.post("/readOne/name", async (req, res, next) => {
        userModel.findOne({ name: req.body.name }, function (err, doc) {
            if (err) {
                return res.send(err);
            } else {
                res.send(doc);
            }
        });
    });

    mainRouter.post("/readOne/email", async (req, res, next) => {
        userModel.findOne({ email: req.body.email }, function (err, doc) {
            if (err) {
                return res.send(err);
            } else {
                res.send(doc);
            }
        });
    });

    mainRouter.post("/update/:id", async (req, res, next) => {
        userModel.findByIdAndUpdate(req.params.id, req.body,
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
        userModel.findByIdAndDelete(req.params.id, function (err, doc) {
            if (err) {
                return res.send(err);
            } else {
                console.log("user deleted");
                res.send(doc);
            }
        });
    });

    app.use("/user", mainRouter);
};

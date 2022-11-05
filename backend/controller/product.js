const express = require("express");
const mongoose = require("mongoose");
const mainRouter = express.Router();
const productModel = mongoose.model("Product");
const multer = require('multer')
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname)
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: 1 * 1000 * 5000 },
    fileFilter: function (req, file, cb) {
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);
        var extname = filetypes.test(path.extname(
            file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: File upload only supports the "
            + "following filetypes - " + filetypes);
    }
});

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

    mainRouter.post("/create", upload.single('cover'), async (req, res, next) => {
        var bs64 = fs.readFileSync(path.join('uploads/' + req.file.filename)).toString('base64');
        const newModel = new productModel({
            _id: Date.now(),
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            city: req.body.city,
            tags: req.body.tags,
            seller: req.user,
            picture: {
                data: bs64,
                contentType: 'image/png'
            },
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

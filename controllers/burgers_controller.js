// think of this as the main file 
// burger_controller - burger 

// controlls all functions for one tables routes
var express = require('express');
var db = require("../models");

// all api routes
var router = express.Router();

// routes

// -- get route for the root route using express
router.get("/", function (req, res) {
    db.Burger.findAll().then(function (data) {
        // console.log(data);
        res.render("index", { burgers: data });
    });
});

router.post("/burgers/insert", function (req, res) {
    // console.log(req.body);
    db.Burger.create(
        {
            burger_name: req.body.burger_name,
            devoured: 0
        }
    ).then(function (data) {
        res.redirect("/");
    });
});

router.put("/burgers/:id", function (req, res) {
    db.Burger.update(
        {
            devoured: 1
        },
        {
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            res.sendStatus(200);
        });
});

module.exports = router;
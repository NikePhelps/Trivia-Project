"use strict";
const express = require("express");
const router = express.Router();
const pool = require("./connection");

function selectAll(res) {
    pool.query("select * from scores").then(result => res.json(result.rows));
}


router.get("/scores", (req,res) => {
    selectAll(res);
})

router.post("/scores", (req, res) => {
    console.log(req.body.scores, typeof req.body.scores)
    pool.query("insert into scores(username, scores) values ($1::text, $2::int)",
    [
        req.body.username,
        req.body.score
    ]).then(()=> {
        selectAll(res);
        // res.json("score");
    });
})

module.exports = router;
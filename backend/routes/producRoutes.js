const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all products
router.get("/", (req, res) => {
    db.query("SELECT * FROM products", (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(result);
    });
});

// Add a product
router.post("/add", (req, res) => {
    const { name, price, description, image } = req.body;

    const sql =
        "INSERT INTO products(name, price, description, image) VALUES (?, ?, ?, ?)";

    db.query(
        sql,
        [name, price, description, image],
        (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Product Added Successfully"
            });
        }
    );
});

module.exports = router;
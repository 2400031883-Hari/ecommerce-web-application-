const express = require("express");
const router = express.Router();
const db = require("../db");

// Place Order
router.post("/add", (req, res) => {
    const { product_id, quantity } = req.body;

    const sql =
        "INSERT INTO orders(product_id, quantity) VALUES (?, ?)";

    db.query(sql, [product_id, quantity], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Order Placed Successfully"
        });
    });
});

// Get All Orders
router.get("/", (req, res) => {
    db.query("SELECT * FROM orders", (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
});

module.exports = router;
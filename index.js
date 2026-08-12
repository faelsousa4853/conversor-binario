const express = require("express");

const app = express();

app.get("/to-binary/:decimal", (req, res) => {
    const decimal = parseInt(req.params.decimal, 10);

    if (isNaN(decimal)) {
        return res.status(400).json({
            error: "Invalid decimal number"
        });
    }

    const binary = decimal.toString(2);

    res.json({
        decimal,
        binary
    });
});

module.exports = app;
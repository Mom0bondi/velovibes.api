const express = require("express");
const bikes = require("./bikes.json");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/bikes", (req, res) => {
    res.json(bikes);
});

app.get("/bikes/:bikeId", (req, res) => {
    const bikeId = req.params.bikeId;
    const bike = bikes.find(bike => bike.id == bikeId);
    if (!bike) {
        res.status(404).send("Bike not found");
    } else {
        res.json(bike);
    }
});

app.get("/bon", (req, res) => {
    res.send("Hello BON!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
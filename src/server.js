const express = require("express");
const koderRouter = require("./routes/koders.router");
const mentorsRouter = require("./routes/mentors.router");

const app = express();

// Middleware
app.use(express.json());
app.use("/koders", koderRouter);
app.use("/mentors", mentorsRouter);

app.get("/", (request, response) => {
    response.json({
        message: "Koder API v1"
    });
});

module.exports = app;

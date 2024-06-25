const express = require("express");
const cors = require("cors");
const koderRouter = require("./routes/koders.router");
const mentorsRouter = require("./routes/mentors.router");
const authLog = require("./routes/auth.router");
const generationRouter = require("./routes/generation.router");

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5173", // Cambia esto al dominio de tu frontend
    credentials: true, // Permite el envío de cookies y credenciales
  })
);
// Middleware
// app.use(cors());
app.use(express.json());
app.use("/koders", koderRouter);
app.use("/mentors", mentorsRouter);
app.use("/auth", authLog);
app.use("/generation", generationRouter);

app.get("/", (request, response) => {
  response.json({
    message: "Koder API v1",
  });
});

module.exports = app;

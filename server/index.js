const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getGif, getFour, getFive } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/gif", getGif)
app.get("/api/four", getFour)
app.get("/api/five", getFive)

app.listen(4000, () => console.log("Server running on 4000"));

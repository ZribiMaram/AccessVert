const express = require("express");
const { default: mongoose } = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch");

require("dotenv").config();

const app = express();
app.use(bodyParser.json());
const corsOptions = {
    origin: function (origin, callback) {
        const allowedOrigins = ["http://localhost:3001"];
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};
app.use(cors(corsOptions));

// MongoDB connection
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

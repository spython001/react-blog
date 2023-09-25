const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet"); //DOES NOTHING HERE; REMEMBER TO REMOVE
const morgan = require("morgan");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {console.error(err);});

//MIDDLE-WARES
app.use(express.json());
app.use(helmet());
app.use(morgan("common"))


app.use("/api/auth", authRoute);

app.listen("5000", () =>{
    console.log('Backend server is running');
});
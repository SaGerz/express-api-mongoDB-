const express = require("express");
const cors = require("cors");
const db = require("./App/models");
const mongoose = require('mongoose');


const app = express();

const corsOption = {
    origin: "*"
}

// Register cors midleware
app.use(cors(corsOption));

app.use(express.json());


// Koneksi database
mongoose.set("strictQuery", true);
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {console.log("Connect DB Succes")})
    .catch((error) => {
        console.log(`Error message : ${error.message}`)
        process.exit();
    })


require('./App/routes/dosen_routes')(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {console.log(`SERVER RUNN ON PORT ${PORT}`)});


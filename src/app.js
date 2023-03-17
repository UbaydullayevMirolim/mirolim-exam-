require('dotenv').config();
const express = require('express');
const fileUpload = require("express-fileupload")
const app = express();
const router = require("./routes/admin.routes")
const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(fileUpload());
app.use("/", router);


app.listen(PORT, () => {
    console.log(PORT)
})
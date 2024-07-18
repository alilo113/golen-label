const express = require("express")
const app = express()
const port = 3000
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/database")
.then(() => console.log("Database connected"))
.catch((error) => console.log(error))

app.get("/api", (req, res) => {
    res.json({message: "This is from the backend"})
})

app.listen(port, console.log(`This app listen to port ${port}`))
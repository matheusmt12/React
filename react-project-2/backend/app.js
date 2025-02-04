require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();


//config json 

app.use(express.json());
app.use(express.urlencoded({extended : false}))

//routers 

const router = require("./routers/Router.js");

app.use(router)

app.listen(port, () =>{
    console.log('server ligado', {port});
    
})
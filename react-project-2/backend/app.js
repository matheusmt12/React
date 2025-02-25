require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();


//config cors 

app.use(cors({credentials : true, origin : 'http://localhost:5173'}));


// upload photos

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//config db

require("./config/db.js");


//config json 



app.use(express.json());
app.use(express.urlencoded({extended : false}))

//routers 

const router = require("./routers/Router.js");

app.use(router)

app.listen(port, () =>{
    console.log('server ligado', {port});
    
})
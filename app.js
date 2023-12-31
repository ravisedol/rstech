const express = require('express');
const dotEnv = require('dotenv');
const path = require('path');
const cors = require('cors');
const app = express();


// Middleware
dotEnv.config();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// Time zone
process.env.TZ = "Asia/Calcutta";

// DB connect
const db = require('./config/db');
db(process.env.DB_HOST)
.then(() => console.log('DB Connected'))
.catch((error) => console.log(`DB Error: ${error}`));

//static file access
app.use(express.static(path.join(__dirname,'./frontend/build')));

// Route
app.use('/visitor',require('./routes/VisitorRoute'));
// app.use('/',(req,res,next) => {
//     return res.status(200).json({msg:"Welcome to node js"});
// });
app.use('*',(req,res) => {
    return res.sendFile(path.join(__dirname,"./frontend/build/index.html"));
})

module.exports = app;
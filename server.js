// modules =================================================
const express = require('express');

const app = express();

app.use(express.json());
// set our port
const port = 3000;

app.all('/*',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Method','GET,PUT,POST,DELETE,OPTIONS,PATCH');
    res.header('Access-Control-Allow-Headers','Content-Type,Authorization,Content-Length,X-Requested-With');
    next();
})

const infoRouter=require("./src/routers/info");
require('./src/db/mongoose');
app.use('/info',infoRouter);

// startup our app at http://localhost:3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
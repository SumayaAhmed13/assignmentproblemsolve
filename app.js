//Application Configuration

const express=require('express');

const app = express();

//External Import
 const router=require('./src/Routes/api');

//Application Routes

app.use('/api',router);


module.exports=app;
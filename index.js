
//External Module
const app=require('./app');

const dotenv=require('dotenv');
const mongoose=require('mongoose');
dotenv.config({path:'./config.env'});

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("DB Connected Successfully")}).catch((err)=> console.log(err));

app.listen(process.env.RUNNING_PORT,()=>{
    console.log(`Listen Port : ${process.env.RUNNING_PORT}`);
})

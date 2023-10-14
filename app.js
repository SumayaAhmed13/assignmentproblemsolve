//Application Configuration

const express=require('express');

const app = express();

//External Import
 const router=require('./src/Routes/api');

//Security Middleware

const cors =require('cors');
const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const hpp =require('hpp');

//Security Middleware Implemention
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(express.json());

//Request Limit

const limiter = rateLimit({
	windowMs: 60 * 1000, // 1 minute
	max: 10, 
	standardHeaders: 'draft-7', 
	legacyHeaders: false, 
	
});
app.use(limiter);

//Application Routes

app.use('/api/v1',router);

//undefined route
app.use('*',(req,res)=>{
    res.status(404).json({status:'Not Found',message:'404 status code'});
})
module.exports=app;
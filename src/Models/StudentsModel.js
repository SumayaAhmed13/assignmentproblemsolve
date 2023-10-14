const mongoose=require('mongoose');

const StudentSchema=mongoose.Schema({
    firstName:
    {
        type:String
    },
    lastName:
    {
        type:String
    },
    mobile:
    {
        type:String
    },
    email:{type:String},
    password:{type:String},
    address:{type:String},
    roll:{type:String},
    class:{type:String}
},{timestamps: true,versionKey:false});


const Student=mongoose.model('students',StudentSchema);
module.exports=Student
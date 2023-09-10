const createService= async(req,res)=>{

    res.send('Service Created Successfully');

}
const readService=async(req,res)=>{
    
    res.send('Get All Service');

}
const updateService=async(req,res)=>{
    
    res.send('Service Updated Successfully');

}

const deleteService=async(req,res)=>{
    
    res.send('Service Deleted Successfully');

}
module.exports={
    createService,
    readService,
    updateService,
    deleteService
}
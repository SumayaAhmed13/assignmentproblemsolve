const createTitle= async(req,res)=>{

    res.send('Title Created Successfully');

}
const readTitle=async(req,res)=>{
    
    res.send('Get All Title');

}
const updateTitle=async(req,res)=>{
    
    res.send('Title Updated Successfully');

}

const deleteTitle=async(req,res)=>{
    
    res.send('Title Deleted Successfully');

}
module.exports={
    createTitle,
    readTitle,
    updateTitle,
    deleteTitle
   
}
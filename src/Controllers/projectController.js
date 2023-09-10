const createProject= async(req,res)=>{

    res.send('Project Created Successfully');

}
const readProject=async(req,res)=>{
    
    res.send('Get All Project');

}
const updateProject=async(req,res)=>{
    
    res.send('Project Updated Successfully');

}

const deleteProject=async(req,res)=>{
    
    res.send('Project Deleted Successfully');

}
module.exports={
    createProject,
    readProject,
    updateProject,
    deleteProject
   
}
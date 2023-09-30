const createUser= async(req,res)=>{
    res.status(200).json({status:"success", data: "User Created Successfully"});
  }
  const readUser=async(req,res)=>{
       res.status(200).json({status:"success", data: "Get All User"});
  }
  const updateUser=async(req,res)=>{
      res.status(200).json({status:"success", data: "User Updated Successfully"});
  }
  
  const deleteUser=async(req,res)=>{
        res.status(200).json({status:"success", data: "User Deleted Successfully"});
  }
  module.exports={
      createUser,
      updateUser,
      readUser,
      deleteUser
  }
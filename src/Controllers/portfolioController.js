const createPortfolio= async(req,res)=>{
    res.status(200).json({status:"success", data: "Portfolio Created Successfully"});
}
const readPortfolio=async(req,res)=>{
  res.status(200).json({status:"success", data: "Get All Portfolio"});
}
const updatePortfolio=async(req,res)=>{
   res.status(200).json({status:"success", data: "Portfolio Updated Successfully"});
}

const deletePortfolio=async(req,res)=>{
  res.status(200).json({status:"success", data: "Portfolio Deleted Successfully"});
}
module.exports={
   createPortfolio,
   readPortfolio,
   updatePortfolio,
   deletePortfolio
 
}
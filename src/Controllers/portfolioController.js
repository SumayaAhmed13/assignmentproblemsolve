const createPortfolio= async(req,res)=>{

    res.send('Portfolio Created Successfully');

}
const readPortfolio=async(req,res)=>{
    
    res.send('Get All Portfolio');

}
const updatePortfolio=async(req,res)=>{
    
    res.send('Portfolio Updated Successfully');

}

const deletePortfolio=async(req,res)=>{
    
    res.send('Portfolio Deleted Successfully');

}
module.exports={
   createPortfolio,
   readPortfolio,
   updatePortfolio,
   deletePortfolio
 
}
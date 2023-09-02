const createProfit= async(req,res)=>{

    res.send('Profit Created Successfully');

}
const readProfit=async(req,res)=>{
    
    res.send('Get All Profit');

}
const updateProfit=async(req,res)=>{
    
    res.send('Profit Updated Successfully');

}

const deleteProfit=async(req,res)=>{
    
    res.send('Profit Deleted Successfully');

}
module.exports={
    createProfit,
    readProfit,
    updateProfit,
    deleteProfit
  
    
}
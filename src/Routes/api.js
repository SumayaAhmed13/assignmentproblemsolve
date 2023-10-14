const express=require('express');
const router=express.Router();
const studentCtrl=require("../Controllers/StudentController");

//Student Router
router.post("/create",studentCtrl.CreateStudent);
router.get("/get",studentCtrl.GetAllStudent);
router.post("/update/:id",studentCtrl.UpdateStudent);
router.post("/delete/:id",studentCtrl.DeleteStudent);
//Login
router.post("/login",studentCtrl.Login);

module.exports=router;
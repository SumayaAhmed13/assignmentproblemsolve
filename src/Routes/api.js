const express=require('express');
const router=express.Router();
const studentCtrl=require("../Controllers/StudentController");
const workCtrl=require("../Controllers/WorksController");
const TokenMiddleware=require("../Middleware/AuthVerifyMiddleware");


//Student Router
router.post("/create",studentCtrl.CreateStudent);
router.get("/get",studentCtrl.GetAllStudent);
router.post("/update/:id",studentCtrl.UpdateStudent);
router.post("/delete/:id",studentCtrl.DeleteStudent);

//Login Router
router.post("/login",studentCtrl.Login);

//Password Recover
router.get("/RecoverVerifyEmail/:email",studentCtrl.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",studentCtrl.OTPRecoverVerify);
router.post("/RecoverResetPass",studentCtrl.PassResetRecover);

//Works Router

router.post("/creatework",TokenMiddleware.TokenVerify,workCtrl.CreateWork);
router.get("/getallwork",TokenMiddleware.TokenVerify,workCtrl.GetAllWork);
router.post("/updatework/:id",TokenMiddleware.TokenVerify,workCtrl.UpdateWork);
router.post("/deletework/:id",TokenMiddleware.TokenVerify,workCtrl.DeleteWork)

module.exports=router;
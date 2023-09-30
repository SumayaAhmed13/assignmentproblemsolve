const express=require('express');
const router=express.Router();
const userCtrl=require('../Controllers/userController');
const adminCtrl=require('../Controllers/adminController');
const subAdminCtrl=require('../Controllers/subAdminController');
const postCtrl=require('../Controllers/postController');

//User Router
router.get('/user/read',userCtrl.readUser);
router.get('/user/create',userCtrl.createUser);
router.get('/user/update',userCtrl.updateUser);
router.get('/user/delete',userCtrl.deleteUser);


//Admin Router
router.get('/admin/read',adminCtrl.readAdmin);
router.get('/admin/create',adminCtrl.createAdmin);
router.get('/admin/update',adminCtrl.updateAdmin);
router.get('/admin/delete',adminCtrl.deleteAdmin);

//SubAdmin Router
router.get('/subAdmin/read',subAdminCtrl.readSubAdmin);
router.get('/subAdmin/create',subAdminCtrl.createSubAdmin);
router.get('/subAdmin/update',subAdminCtrl.updateSubAdmin);
router.get('/subAdmin/delete',subAdminCtrl.deleteSubAdmin);


//Post Router
router.get('/post/read',postCtrl.readPost);
router.get('/post/create',postCtrl.createPost);
router.get('/post/update',postCtrl.updatePost);
router.get('/post/delete',postCtrl.deletePost);

module.exports=router;
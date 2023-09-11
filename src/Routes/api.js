const express=require('express');
const router=express.Router();
const blogCtrl=require('../Controllers/blogController');
const commentCtrl=require('../Controllers/commentController');
const messageCtrl=require('../Controllers/messageController');
const portfolioCtrl=require('../Controllers/portfolioController');
const productCtrl=require('../Controllers/productController');


//Blog Router

router.get('/blog/read',blogCtrl.readBlog);
router.get('/blog/create',blogCtrl.createBlog);
router.get('/blog/update',blogCtrl.updateBlog);
router.get('/blog/delete',blogCtrl.deleteBlog);


//Comment Router
router.get('/comment/read',commentCtrl.readComment);
router.get('/comment/create',commentCtrl.createComment);
router.get('/comment/update',commentCtrl.updateComment);
router.get('/comment/delete',commentCtrl.deleteComment);

//Message Router
router.get('/message/read',messageCtrl.readMessage);
router.get('/message/create',messageCtrl.createMessage);
router.get('/message/update',messageCtrl.updateMessage);
router.get('/message/delete',messageCtrl.deleteMessage);


//Portfolio Router
router.get('/portfolio/read',portfolioCtrl.readPortfolio);
router.get('/portfolio/create',portfolioCtrl.createPortfolio);
router.get('/portfolio/update',portfolioCtrl.updatePortfolio);
router.get('/portfolio/delete',portfolioCtrl.deletePortfolio);


//Product Router
router.get('/product/read',productCtrl.readProduct);
router.get('/product/create',productCtrl.createProduct);
router.get('/product/update',productCtrl.updateProduct);
router.get('/product/delete',productCtrl.deleteProduct);

module.exports=router;
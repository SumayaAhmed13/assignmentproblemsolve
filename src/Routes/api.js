const express=require('express');
const router=express.Router();
const blogCtrl=require('../Controllers/blogController');
const blogDetailCtrl=require('../Controllers/blogDetailsController');
const commentCtrl=require('../Controllers/commentController');
const messageCtrl=require('../Controllers/messageController');
const portfolioCtrl=require('../Controllers/portfolioController');
const productCtrl=require('../Controllers/productController');
const profitCtrl=require('../Controllers/profitController');
const projectCtrl=require('../Controllers/projectController');
const serviceCtrl=require('../Controllers/serviceController');
const titleCtrl=require('../Controllers/titleController');

//Blog Router

router.get('/blog/read',blogCtrl.readBlog);
router.get('/blog/create',blogCtrl.createBlog);
router.get('/blog/update',blogCtrl.updateBlog);
router.get('/blog/delete',blogCtrl.deleteBlog);


//Blog Details Router
router.get('/blogDetails/read',blogDetailCtrl.readBlogDetail);
router.get('/blogDetails/create',blogDetailCtrl.createBlogDetail);
router.get('/blogDetails/update',blogDetailCtrl.updateBlogDetail);
router.get('/blogDetails/delete',blogDetailCtrl.deleteBlogDetail);

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

//Profit Router
router.get('/profit/read',profitCtrl.readProfit);
router.get('/profit/create',profitCtrl.createProfit);
router.get('/profit/update',profitCtrl.updateProfit);
router.get('/profit/delete',profitCtrl.deleteProfit);

//Project Router
router.get('/project/read',projectCtrl.readProject);
router.get('/project/create',projectCtrl.createProject);
router.get('/project/update',projectCtrl.updateProject);
router.get('/project/delete',projectCtrl.deleteProject);

//Service Router
router.get('/service/read',serviceCtrl.readService);
router.get('/service/create',serviceCtrl.createService);
router.get('/service/update',serviceCtrl.updateService);
router.get('/service/delete',serviceCtrl.deleteService);

//Title Router
router.get('/title/read',titleCtrl.readTitle);
router.get('/title/create',titleCtrl.createTitle);
router.get('/title/update',titleCtrl.updateTitle);
router.get('/title/delete',titleCtrl.deleteTitle);


module.exports=router;
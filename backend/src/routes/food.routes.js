const express = require('express');
const foodController=require('../controllers/food.controller');
const authMiddleware=require('../middlewares/auth.middleware');
const multer = require('multer');

const router = express.Router();

const upload=multer({
    storage: multer.memoryStorage()
})


router.post( '/add', authMiddleware.authFoodPartnerMiddleware, upload.single("video") , foodController.addFood);

module.exports=router;
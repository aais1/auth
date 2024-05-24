const {createUser,loginUser}=require('../controllers/userControllers')
const express = require('express');
const router = express.Router();

router.get('/',(res,resp)=>{
    resp.send("Hello from auth")
});

router.post('/login',loginUser);

router.post('/signup',createUser);


module.exports = router;
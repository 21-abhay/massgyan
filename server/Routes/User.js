const express = require('express');
const router = express.Router();
const loginController = require('../Controllers/User/Login');
const signinController = require('../Controllers/User/Signin');


router.post('/login', loginController);

router.post('/signin', signinController);

router.get('/logout', (req,res)=>{
    // req.user = '';
    res.status(200)
});

module.exports = router;
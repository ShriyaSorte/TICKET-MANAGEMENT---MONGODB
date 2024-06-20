const express = require('express');
const router = express.Router();
const userContoller = require('../controller/userController');

router.post('/adduser',userContoller.adduser);
router.get('/getuser',userContoller.getuser);
router.patch('/updateuser/:id',userContoller.updateuser);
router.delete('/deleteuser/:id',userContoller.deleteuser);

module.exports = router;
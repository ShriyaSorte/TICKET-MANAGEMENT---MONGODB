const express = require('express');
const router = express.Router();
const userContoller = require('../controller/userController');
const ticketController = require('../controller/ticketController');

// User routes
router.post('/adduser',userContoller.adduser);
router.get('/getuser',userContoller.getuser);
router.patch('/updateuser/:id',userContoller.updateuser);
router.delete('/deleteuser/:id',userContoller.deleteuser);

// Ticket routes
router.post('/addticket',ticketController.addticket);

module.exports = router;
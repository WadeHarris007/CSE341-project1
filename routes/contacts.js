const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

//get all route
router.get('/' , contactsController.getAll);

//get route
router.get('/:id' , contactsController.getSingle);

module.exports = router;
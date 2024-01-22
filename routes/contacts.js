const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

//get all route
router.get('/' , contactsController.getAll);

//get route
router.get('/:id' , contactsController.getSingle);

router.post('/' , contactsController.createContact);

router.put('/:id' , contactsController.updateContact);

router.delete('/:id' , contactsController.deleteContact);

module.exports = router;
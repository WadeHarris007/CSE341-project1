const router = require('express').Router();

//any get request (basically a / sign) will be processed here
router.get('/', (req, res) => { res.send('Hello world');});

module.exports = router;
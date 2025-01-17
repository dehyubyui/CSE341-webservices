// ./routes/index.js
const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.send('Hello World');
});

router.use('/users', require('./users'));

module.exports = router;

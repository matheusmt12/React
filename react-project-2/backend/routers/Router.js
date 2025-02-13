const express = require('express');
const router = express();


//user router

router.use('/api/users', require('./UserRouter'));
router.use('/api/photos',require('./PhotoRouter'));

router.get('/', (req, res) =>{
    res.send("Api funcionando ");
})

module.exports = router;
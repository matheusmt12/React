const express = require('express');
const router = express();


router.get('/', (req, res) =>{
    res.send("Api funcionando ");
})

module.exports = router;
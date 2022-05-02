const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,'../../client/index.html'))
    }
    catch (err) {
        res.status(404).json({message: err})
    }
})

router.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname,'../../client/notFound.html'))
})

module.exports = router;
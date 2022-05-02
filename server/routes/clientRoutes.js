const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/*', (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,'../../client/build/index.html'))
    }
    catch (err) {
        res.status(404).json({message: err})
    }
})

module.exports = router;
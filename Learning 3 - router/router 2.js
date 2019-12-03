var router = require('express').Router();

router.route('/fetch').get((req, res) => {
    res.send("Response from router 2.");
});

module.exports = router;